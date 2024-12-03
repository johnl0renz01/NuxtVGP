<script lang="ts" setup>
import Card from '~/components/Favorites/Card.vue'
import Empty from '~/components/Favorites/Empty.vue'
import LoadingSpinner from '~/components/LoadingSpinner.vue'

setActiveLink('favorites')

const favorites = useFavorites()

const rocket_id = favorites.favorite
const rockets = favorites.favoritesObject

useSeoMeta({
	title: 'Favorites',
})

const loading = ref(true)

setTimeout(() => {
	loading.value = false
}, 1)
</script>

<template>
	<template v-if="!loading">
		<main class="pa-16 h-100">
			<v-row v-if="rockets.length > 0">
				<v-col cols="12" v-for="(item, index) in rockets" :key="item.name" class="" justify="">
					<Card
						:rocket="{
							idx: index,
							link: '/rocket/' + rocket_id[index],
							name: item.name,
							firstFlight: item.first_flight,
						}"
					/>
				</v-col>
			</v-row>
			<v-container v-else class="fill-height" fluid>
				<Empty />
			</v-container>
		</main>
	</template>
	<template v-else>
		<v-row justify="center" align="center" class="fill-height">
			<v-col cols="12" class="text-center">
				<LoadingSpinner />
			</v-col>
		</v-row>
	</template>
</template>
