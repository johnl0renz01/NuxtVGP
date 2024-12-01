<template>
	<v-container>
		<v-card :disabled="loading" :loading="loading" class="mx-auto my-12">
			<template v-slot:loader="{ isActive }">
				<v-progress-linear
					:active="isActive"
					color="deep-purple"
					height="4"
					indeterminate
				></v-progress-linear>
			</template>

			<v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png" cover></v-img>

			<v-card-item>
				<v-card-title>Cafe Badilico</v-card-title>

				<v-card-subtitle>
					<span class="me-1">Local Favorite</span>

					<v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
				</v-card-subtitle>
			</v-card-item>

			<v-card-text>
				<v-row align="center" class="mx-0">
					<v-rating
						:model-value="4.5"
						color="amber"
						density="compact"
						size="small"
						half-increments
						readonly
					></v-rating>

					<div class="text-grey ms-4">4.5 (413)</div>
				</v-row>

				<div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

				<div>
					Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
					seating.
				</div>
			</v-card-text>

			<v-divider class="mx-4 mb-1"></v-divider>

			<v-card-title>Tonight's availability</v-card-title>

			<div class="px-4 mb-2">
				<v-chip-group v-model="selection" selected-class="bg-deep-purple-lighten-2">
					<v-chip>5:30PM</v-chip>

					<v-chip>7:30PM</v-chip>

					<v-chip>8:00PM</v-chip>

					<v-chip>9:00PM</v-chip>
				</v-chip-group>
			</div>

			<v-card-actions>
				<v-btn color="deep-purple-lighten-2" text="Reserve" block border @click="reserve"></v-btn>
			</v-card-actions>
		</v-card>

		<h3 class="my-5">
			Example Vuetify
			<v-chip color="blue">SimpleTable</v-chip>
			<v-chip color="orange">Data from spaceX graphql</v-chip>
		</h3>
		<p>There are {{ rockets?.length || 0 }} ships.</p>
		<v-table>
			<thead>
				<tr>
					<th class="text-left">Rocket Name</th>
					<th class="text-left">Description</th>
					<th class="text-left">First Flight</th>
					<th class="text-left">Mass (kg)</th>
					<th class="text-left">Stages</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="rocket in rockets" :key="rocket.name">
					<td class="text-no-wrap">{{ rocket.name }}</td>
					<td class="text-wrap">{{ rocket.description }}</td>
					<td>{{ rocket.first_flight }}</td>
					<td class="text-no-wrap">{{ rocket.mass.kg }}</td>
					<td>{{ rocket.stages }}</td>
				</tr>
			</tbody>
		</v-table>
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
