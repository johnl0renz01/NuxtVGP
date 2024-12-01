export default {
	mixins: [launch],
	data() {
		return {
			search: '',
			headers: [
				{ key: 'mission_name', title: 'Mission Name' },
				{ key: 'launch_date_utc', title: 'Launch Date' },
				{ key: 'launch_site', title: 'Launch Site' },
				{ key: 'rocket.rocket_name', title: 'Rocket Name' },
				{ key: 'details', title: 'Details' },
			],
			launch,
		}
	},
}
