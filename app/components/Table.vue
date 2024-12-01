<script lang="ts">
let years: string[] = []
for (let i = 2024; i >= 2000; i--) {
	years.push(i.toString())
}

export default {
	mixins: [sort],

	data: () => ({
		years,
	}),
}

/*

<td class="text-wrap text-right">
							<v-hover v-slot:default="{ isHovering, props }">
								<v-btn
									rounded="lg"
									class="text-subtitle-2"
									:class="isHovering ? 'bg-white' : 'bg-grey-darken-2'"
									v-bind="props"
								>
									Details
								</v-btn>
							</v-hover>
						</td>
*/
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
			label="Filter Year"
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
		>
			<template v-slot:item="{ item }">
				<v-hover v-slot:default="{ isHovering, props }">
					<tr :class="isHovering ? 'bg-blue' : ''" v-bind="props">
						<td class="w-25">{{ item.mission_name }}</td>
						<td class="">{{ item.launch_date_utc }}</td>
						<td class="">{{ item.launch_site }}</td>
						<td class="">{{ item.rocket.rocket_name }}</td>
						<td class="text-wrap">{{ item.details }}</td>
					</tr>
				</v-hover>
			</template>
		</v-data-table>
	</v-card>
</template>
