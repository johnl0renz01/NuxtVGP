<script lang="ts">
let years: string[] = []
for (let i = 2024; i >= 2000; i--) {
	years.push(i.toString())
}

export default {
	mixins: [sort],
	loading: true,
	methods: {
		truncate(value: string, length: number) {
			if (value === null) {
				return value
			}

			if (value.length > length) {
				return value.substring(0, length) + '...'
			} else {
				return value
			}
		},

		dash(value: string) {
			return value.replace(/\s/g, '_')
		},
	},
}
</script>

<script lang="ts" setup>
import { useDisplay } from 'vuetify'
const { xs, mdAndUp } = useDisplay()
</script>

<template>
	<v-card flat>
		<v-select
			class="ma-3"
			:class="mdAndUp ? 'w-25' : 'w-100'"
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
			v-model="selected"
			:items-per-page="-1"
			:loading="loading"
		>
			<template v-slot:loading>
				<v-skeleton-loader type="table-row@10"></v-skeleton-loader>
			</template>
			<template v-slot:item="{ item }">
				<v-hover v-slot:default="{ isHovering, props }">
					<tr :class="isHovering ? 'bg-blue' : ''" v-bind="props">
						<td class="">
							<v-hover v-slot:default="{ isHovering, props }">
								<NuxtLink
									:to="'/rocket/' + dash(item.rocket.rocket_name)"
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
						<td class="w-25">{{ item.mission_name }}</td>
						<td class="">{{ item.launch_date_utc }}</td>
						<td class="">{{ item.launch_site }}</td>

						<td class="text-wrap">
							{{ truncate(item.details, 100) }}
							<span class="text-decoration-underline cursor-pointer">
								{{ item.details != null && item.details.length > 100 ? 'Show More' : '' }}
							</span>
						</td>
					</tr>
				</v-hover>
			</template>
		</v-data-table>
	</v-card>
</template>
