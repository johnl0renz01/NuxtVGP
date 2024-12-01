export default {
	data() {
		const query = gql`
			query getLaunches {
				launches {
					mission_name
					launch_date_utc
					launch_site {
						site_name
					}
					rocket {
						rocket_name
					}
					details
					launch_year
				}
			}
		`

		const { data } = useAsyncQuery<{
			launches: {
				mission_name: string
				launch_date_utc: string
				launch_site: {
					site_name: string
				}
				rocket: {
					rocket_name: string
				}
				details: string
				launch_year: string
			}[]
		}>(query)

		const launches = computed(() => data.value?.launches ?? [])

		return {
			launches,
		}
	},
}
