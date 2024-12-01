export default {
	data() {
		const query = gql`
			query getRockets {
				rockets {
					name
					description
					first_flight
					height {
						meters
						feet
					}
					mass {
						kg
						lb
					}
					stages
				}
			}
		`

		const { data } = useAsyncQuery<{
			rockets: {
				name: string
				description: string
				first_flight: string
				height: {
					meters: number
					feet: number
				}
				mass: {
					kg: number
					lb: number
				}
				stages: number
			}[]
		}>(query)

		const rockets = computed(() => data.value?.rockets ?? [])

		return {
			rockets,
		}
	},
}
