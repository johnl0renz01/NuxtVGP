import { defineComponent } from 'vue'

interface Launch {
	mission_name: string
	launch_date_utc: string
	launch_site: string
	rocket: {
		rocket_name: string
	}
}

interface Header {
	key: string
	title: string
}

export default defineComponent({
	mixins: [launch],
	data() {
		return {
			search: '',
			year: '',
			headers: [
				{ key: 'mission_name', title: 'Mission Name' },
				{ key: 'launch_date_utc', title: 'Launch Date' },
				{ key: 'launch_site', title: 'Launch Site' },
				{ key: 'rocket.rocket_name', title: 'Rocket Name' },
			] as Header[],
			launch: [] as Launch[],
		}
	},
})
