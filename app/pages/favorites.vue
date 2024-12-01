<template>
	<v-container class="d-grid h-100">
		<v-row>
			<v-col cols="6" v-for="rocket in rockets" :key="rocket.name" class="pa-16" justify="">
				<v-card
					:disabled="loading"
					:loading="loading"
					class="mx-auto h-100 d-flex flex-column"
					max-width="100%"
				>
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
								</v-col>
								<v-col>
									<div class="">
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
									text="Favorite"
									block
									border
									@click="reserve"
								></v-btn>
							</v-card-actions>
						</v-card-item>
					</div>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
export default {
	data: () => ({
		loading: false,
		selection: 1,
	}),

	methods: {
		reserve() {
			this.loading = true
			setTimeout(() => (this.loading = false), 2000)
		},
	},
}
</script>

<script lang="ts" setup>
const store = useCounter()
const selection = ref(0)
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
</script>
