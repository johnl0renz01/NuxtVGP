<script lang="ts" setup>
import { useDisplay } from 'vuetify'
const { xs, mdAndUp } = useDisplay()

const favorites = useFavorites()

interface Information {
	idx: number
	link: string | null
	name: string | null
	firstFlight: string | null
}

const props = defineProps<{
	rocket: Information
}>()
</script>

<template>
	<v-card class="d-flex flex-column flex-md-row pr-md-4">
		<v-img
			cols="4"
			:max-height="mdAndUp ? '200' : '100%'"
			:max-width="mdAndUp ? '200' : '100%'"
			src="https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Ae4cd9435-eb63-49dc-a1a7-4013e4f7d0bb?source=next-article&fit=scale-down&quality=highest&width=1440&dpr=1"
			cover
		></v-img>
		<v-card-item class="flex-grow-1">
			<v-card-title>{{ rocket.name }}</v-card-title>
			<v-card-subtitle>
				<span class="me-1">First Flight: {{ rocket.firstFlight }}</span>
			</v-card-subtitle>
		</v-card-item>

		<v-card-actions class="">
			<NuxtLink :to="'' + rocket.link" class="w-100 text-decoration-none text-white">
				<v-btn
					class="text-caption text-uppercase font-weight-bold"
					text="Details"
					block
					border
				></v-btn>
			</NuxtLink>
		</v-card-actions>

		<v-card-actions class="">
			<v-btn
				class="text-caption text-uppercase font-weight-bold"
				color="deep-purple-lighten-1 "
				text="Remove"
				block
				border
				@click="favorites.remove(rocket.idx)"
			></v-btn>
		</v-card-actions>
	</v-card>
</template>
