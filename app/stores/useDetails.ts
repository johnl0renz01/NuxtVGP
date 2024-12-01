export const useDetails = defineStore('details', {
	state: () => ({
		details: {
			name: '',
			description: '',
			first_flight: '',
			height: {
				meters: 0,
				feet: 0,
			},
			mass: {
				kg: 0,
				lb: 0,
			},
			stages: 0,
		},
	}),
	getters: {
		displayName: (state) => state.details.name,
		displayDescription: (state) => state.details.description,
		displayFirstFlight: (state) => state.details.first_flight,
		displayHeightM: (state) => state.details.height.meters,
		displayHeightF: (state) => state.details.height.feet,
		displayMassK: (state) => state.details.mass.kg,
		displayMassL: (state) => state.details.mass.lb,
		displayStages: (state) => state.details.stages,
	},
	actions: {
		set(arr: any) {
			this.details = arr
		},
	},
})
