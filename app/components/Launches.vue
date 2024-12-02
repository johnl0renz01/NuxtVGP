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
	<z>
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
				<v-hover v-slot:default="{ isHovering, props }">
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

						<Details :details="{ description: item.details }" />
					</tr>
				</v-hover>
			</template>
		</v-data-table>
	</z>
</template>
