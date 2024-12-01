export default {
	mixins: [launchData],
	data() {
		return {
			search: '',
			headers: [
				{},
				{ title: 'Rocket Name' },
				{ title: 'Mission Name' },
				{ key: 'launch_date_utc', title: 'Launch Date', filterable: true, sortable: true },
				{ title: 'Launch Site' },
				{ title: 'Details' },
			],
			launchData,
		}
	},
}
