export const useOptions = defineStore('Options', {
	state: () => ({
		currentLink: '',
	}),
	actions: {
		setLink(value: string) {
			this.currentLink = value
		},
	},
})
