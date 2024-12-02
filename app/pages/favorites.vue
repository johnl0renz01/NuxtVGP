<script lang="ts" setup>
import { useDisplay } from 'vuetify'
const { xs, mdAndUp } = useDisplay()

const favorites = useFavorites()

const rocket_id = favorites.favorite
const rockets = favorites.favoritesObject
</script>

<template>
	<main class="pa-16 h-100">
		<v-row v-if="rockets.length > 0">
			<v-col cols="12" v-for="(rocket, index) in rockets" :key="rocket.name" class="" justify="">
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
							<span class="me-1">First Flight: {{ rocket.first_flight }}</span>
						</v-card-subtitle>
					</v-card-item>

					<v-card-actions class="">
						<NuxtLink
							:to="'/rocket/' + rocket_id[index]"
							class="w-100 text-decoration-none text-white"
						>
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
							@click="favorites.remove(index)"
						></v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
		<v-container v-else class="fill-height" fluid>
			<v-row justify="center" align="center" class="fill-height">
				<v-col cols="12">
					<div class="text-center">
						<p class="h-100vh text-center text-subtitle-2">
							Your favorite rockets list is currently empty.
							<br />
							<br />
							Start adding your preferred SpaceX rockets to stay updated on their latest
							missions and developments.
						</p>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</main>
</template>
