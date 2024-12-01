export default {
	mixins: [launch],
	data() {
		return {
			search: '',
			headers: [
				{ key: 'mission_name', title: 'Mission Name', filterable: false },
				{ key: 'launch_date_utc', title: 'Launch Date', filterable: true },
				{ key: 'launch_site', title: 'Launch Site', filterable: false },
				{ key: 'rocket.rocket_name', title: 'Rocket Name', filterable: false },
				{ key: 'details', title: 'Details', filterable: false, sortable: false },
			],
			launch,
		}
	},
}
