<template>
	<main class="pa-10 h-100">
		<v-row v-if="rockets.length > 0">
			<v-col
				cols="12"
				md="6"
				v-for="(rocket, index) in rockets"
				:key="rocket.name"
				class="pa-16"
				justify=""
			>
				<v-card class="mx-auto h-100 d-flex flex-column" max-width="100%">
					<template v-slot:loader="{ isActive }">
						<v-progress-linear
							:active="isActive"
							color="deep-purple"
							height="4"
							indeterminate
						></v-progress-linear>
					</template>

					<v-img
						class="flex-grow-0"
						height="250"
						src="https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Ae4cd9435-eb63-49dc-a1a7-4013e4f7d0bb?source=next-article&fit=scale-down&quality=highest&width=1440&dpr=1"
						cover
					></v-img>

					<div class="d-flex flex-column flex-grow-1">
						<v-card-item>
							<v-card-title>{{ rocket.name }}</v-card-title>
							<v-card-subtitle>
								<span class="me-1">First Flight: {{ rocket.first_flight }}</span>
							</v-card-subtitle>
						</v-card-item>

						<v-card-item>
							<v-row no-gutters class="mb-4">
								<v-col>
									<div class="">
										Height:
										<v-chip class="mr-2" label>{{ rocket.height.feet }} ft.</v-chip>
										<v-chip class="mr-2" label>{{ rocket.height.meters }} m.</v-chip>
									</div>
									<div class="my-2">
										Mass:
										<v-chip class="mr-2" label>{{ rocket.mass.kg }} kg.</v-chip>
										<v-chip class="mr-2" label>{{ rocket.mass.lb }} lb.</v-chip>
									</div>
								</v-col>
							</v-row>
						</v-card-item>

						<v-card-text class="">
							<div>
								{{ rocket.description }}
							</div>
						</v-card-text>

						<v-card-item class="">
							<v-divider class="mx-4 mb-1"></v-divider>

							<v-card-actions>
								<v-btn
									color="deep-purple-lighten-2 font-weight-bold"
									text="Remove"
									block
									border
									@click="favorites.remove(index)"
								></v-btn>
							</v-card-actions>
						</v-card-item>
					</div>
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

<script lang="ts" setup>
const favorites = useFavorites()
const rockets = favorites.favoritesObject
</script>
