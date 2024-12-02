<script lang="ts">
import Desktop from './Launches/Desktop.vue'
import Mobile from './Launches/Mobile.vue'
import MobileHeader from './Launches/MobileHeader.vue'

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

		<MobileHeader
			v-if="!lgAndUp"
			:header="{
				rocketName: 'Rocket Name',
				missionName: 'Mission Name',
				launchDate: 'Launch Date',
				launchSite: 'Launch Site',
				launchDetails: 'Details',
			}"
		/>
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
				<template v-if="lgAndUp">
					<Desktop
						:launches="{
							link: '/rocket/' + underscore(item.rocket.rocket_name),
							rocketName: item.rocket.rocket_name,
							missionName: item.mission_name,
							launchDate: convertIsoToDateTime(item.launch_date_utc),
							launchSite: item.launch_site?.site_name || '',
							launchDetails: item.details,
						}"
					/>
				</template>

				<template v-else>
					<Mobile
						:launches="{
							link: '/rocket/' + underscore(item.rocket.rocket_name),
							rocketName: item.rocket.rocket_name,
							missionName: item.mission_name,
							launchDate: convertIsoToDateTime(item.launch_date_utc),
							launchSite: item.launch_site?.site_name || '',
							launchDetails: item.details,
						}"
					/>
				</template>
			</template>
		</v-data-table>
	</v-sheet>
</template>
