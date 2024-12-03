<script lang="ts">
import LoadingSpinner from '~/components/LoadingSpinner.vue'
import Details from '~/components/Rocket/Details.vue'
import Invalid from '~/components/Rocket/Invalid.vue'

export default {
	mixins: [rocketData],
	data: () => ({
		breadcrumbs: [
			{
				title: 'Launches',
				disabled: false,
				to: '/launches',
			},
			{
				title: 'Details',
				disabled: true,
				to: '',
			},
		],
	}),
}
</script>

<script lang="ts" setup>
setActiveLink('launches')

const route = useRoute()

var id: string = route.params.id as string
id = id.replace(/_/g, ' ')
const currentId = ref(id)

const rockets = rocketData.data().rockets.value
var rocketsIndex: number = 0

const currentRocket = useDetails()

for (let i = 0; i < rockets.length; i++) {
	if (rockets[i]?.name.toLowerCase() == currentId.value.toLowerCase()) {
		currentRocket.set(rockets[i])
		rocketsIndex = i
		break
	}
}

useSeoMeta({
	title: `${(route.params.id as string).replace(/_/g, ' ')}`,
})

const loading = ref(true)

const rocketArray = rocketData.data().rockets.value
if (rocketArray.length > 0) {
	loading.value = false
}
</script>

<template>
	<template v-if="!loading">
		<main class="pb-16 pa-10 h-100" v-if="currentRocket.displayName">
			<v-breadcrumbs :items="breadcrumbs" :to="breadcrumbs.to">
				<template v-slot:divider>
					<v-icon icon="mdi-chevron-right" class="mb-1"></v-icon>
				</template>
			</v-breadcrumbs>
			<v-row class="px-4 py-lg-4">
				<Details
					:rocket="{
						route: route.params.id as string,
						obj: rockets[rocketsIndex],
						name: currentRocket.displayName,
						firstFlight: currentRocket.displayFirstFlight,
						heightF: currentRocket.displayHeightF,
						heightM: currentRocket.displayHeightM,
						massK: currentRocket.displayMassK,
						massL: currentRocket.displayMassL,
						description: currentRocket.displayDescription,
					}"
				/>
			</v-row>
		</main>
		<Invalid v-else />
	</template>
	<template v-else>
		<v-row justify="center" align="center" class="fill-height">
			<v-col cols="12" class="text-center">
				<LoadingSpinner />
			</v-col>
		</v-row>
	</template>
</template>
