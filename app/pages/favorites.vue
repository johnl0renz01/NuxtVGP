<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import Card from '~/components/Favorites/Card.vue'
import Empty from '~/components/Favorites/Empty.vue'

const favorites = useFavorites()

const rocket_id = favorites.favorite
const rockets = favorites.favoritesObject
</script>

<template>
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
