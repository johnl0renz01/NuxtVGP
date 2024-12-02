<script lang="ts">
let years: string[] = []
for (let i = 2024; i >= 2000; i--) {
	years.push(i.toString())
}

export default {
	mixins: [sortData, rocketData],
	loading: true,
	methods: {
		underscore(value: string) {
			return value.replace(/\s/g, '_')
		},
	},
}
</script>

<script lang="ts" setup>
import { useDisplay } from 'vuetify'
const { xs, lgAndUp } = useDisplay()
</script>

<template>
	<v-sheet>
		<v-select
			class="ma-3"
			:class="lgAndUp ? 'w-25' : 'w-100%'"
			clearable
			label="Filter Launch Year"
			:items="years"
			v-model="search"
		></v-select>

		<v-data-table
			class="text-no-wrap"
			:headers="headers"
			:items="launches"
			:search="search"
			height="61vh"
			fixed-header
			fixed-footer
			:items-per-page="-1"
			:loading="loading"
		>
			<template v-slot:loading>
				<v-skeleton-loader type="table-row@10"></v-skeleton-loader>
			</template>
			<template v-slot:item="{ item }">
				<v-hover v-if="lgAndUp" v-slot:default="{ isHovering, props }">
					<tr :class="isHovering ? 'bg-blue-darken-4' : ''" v-bind="props">
						<td class="">
							<v-hover v-slot:default="{ isHovering, props }">
								<NuxtLink
									:to="'/rocket/' + underscore(item.rocket.rocket_name)"
									class="text-decoration-none"
								>
									<button
										class="px-3 py-1 rounded-sm"
										:class="isHovering ? 'bg-white' : 'bg-grey-darken-2'"
										v-bind="props"
									>
										Info
									</button>
								</NuxtLink>
							</v-hover>
						</td>
						<td class="">
							{{ item.rocket.rocket_name }}
						</td>
						<td class="">{{ item.mission_name }}</td>
						<td class="">{{ convertIsoToDateTime(item.launch_date_utc) }}</td>
						<td class="">{{ item.launch_site }}</td>

						<td class="text-wrap py-2"><Details :details="{ description: item.details }" /></td>
					</tr>
				</v-hover>

				<!-- For mobile view -->

				<div v-else>
					<v-divider class=""></v-divider>
					<div class="mobile-container text-subtitle-2 py-1">
						<div class="text-no-wrap pr-4" style="min-width: 60px; max-width: 60px">
							<v-hover v-slot:default="{ isHovering, props }">
								<NuxtLink
									:to="'/rocket/' + underscore(item.rocket.rocket_name)"
									class="text-decoration-none"
								>
									<button
										class="px-3 py-1 rounded-sm"
										:class="isHovering ? 'bg-white' : 'bg-grey-darken-2'"
										v-bind="props"
									>
										Info
									</button>
								</NuxtLink>
							</v-hover>
						</div>
						<div class="text-wrap pr-4" style="min-width: 100px; max-width: 100px">
							{{ item.rocket.rocket_name }}
						</div>
						<div class="text-wrap pr-4" style="min-width: 200px; max-width: 200px">
							{{ item.mission_name }}
						</div>
						<div class="text-no-wrap" style="min-width: 300px; max-width: 300px">
							{{ convertIsoToDateTime(item.launch_date_utc) }}
						</div>
						<div style="min-width: 50px; max-width: 50px">{{ item.launch_site }}</div>
						<div class="text-wrap" style="min-width: 300px; max-width: 300px">
							<Details :details="{ description: item.details }" />
						</div>
					</div>
				</div>
			</template>
		</v-data-table>
	</v-sheet>
</template>

<style>
.mobile-container {
	-ms-overflow-style: none;
	scrollbar-width: none;

	width: 100vw;
	text-wrap: nowrap;
	display: flex;
	align-items: center;
	overflow-x: auto;
}

.mobile-container::-webkit-scrollbar {
	display: none; /* Safari and Chrome */
}
</style>
