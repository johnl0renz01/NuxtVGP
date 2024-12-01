<script lang="ts">
export default {
	data: () => ({
		breadcrumbs: [
			{
				title: 'Dashboard',
				disabled: false,
				to: '/',
			},
			{
				title: 'Details',
				disabled: false,
				to: '',
			},
		],
	}),
}
</script>

<script lang="ts" setup>
const route = useRoute()
var id: string = route.params.id as string
id = id.replace(/-/g, ' ')

console.log(id)

const currentId = ref(id)

const query = gql`
	query getRockets {
		rockets {
			name
			description
			first_flight
			height {
				meters
				feet
			}
			mass {
				kg
				lb
			}
			stages
		}
	}
`
const { data } = useAsyncQuery<{
	rockets: {
		name: string
		description: string
		first_flight: string
		height: {
			meters: number
			feet: number
		}
		mass: {
			kg: number
			lb: number
		}
		stages: number
	}[]
}>(query)
const rockets = computed(() => data.value?.rockets ?? [])

const rocket = useDetails()

for (let i = 0; i < rockets.value.length; i++) {
	if (rockets.value[i]?.name == currentId.value) {
		rocket.set(rockets.value[i])
		break
	}
}

console.log(rocket)
</script>

<template>
	<v-container class="d-grid pb-16 h-100">
		<v-breadcrumbs :items="breadcrumbs" :to="breadcrumbs.to">
			<template v-slot:divider>
				<v-icon icon="mdi-chevron-right" class="mb-1"></v-icon>
			</template>
		</v-breadcrumbs>
		<v-row class="px-4 py-lg-4">
			<v-col cols="12" md="5">
				<v-img
					class=""
					src="https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Ae4cd9435-eb63-49dc-a1a7-4013e4f7d0bb?source=next-article&fit=scale-down&quality=highest&width=1440&dpr=1"
					cover
				></v-img>
			</v-col>

			<v-col cols="12" md="7" class="d-flex flex-column">
				<div class="flex-grow-1">
					<h1>
						{{ rocket.displayName }}
					</h1>

					<span class="me-1 text-subtitle-2 text-grey-lighten-1">
						First Flight: {{ rocket.displayFirstFlight }}
					</span>

					<div class="my-4">
						<div class="my-2">
							Height:
							<v-chip class="mr-2" label>{{ rocket.displayHeightF }} ft.</v-chip>
							<v-chip class="mr-2" label>{{ rocket.displayHeightM }} m.</v-chip>
						</div>
						<div class="my-2">
							Mass:
							<v-chip class="mr-2" label>{{ rocket.displayMassK }} kg.</v-chip>
							<v-chip class="mr-2" label>{{ rocket.displayMassL }} lb.</v-chip>
						</div>
					</div>

					<p class="pb-10">
						{{ rocket.displayDescription }}
					</p>
				</div>

				<v-btn class="text-none flex-grow-0" color="info" rounded="0" variant="flat">
					<span class="">Favorite</span>
				</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>
