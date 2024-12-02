export const useDrawer = defineStore('drawer', {
	state: () => ({ drawer: false }),
	actions: {
		toggleDrawer() {
			this.drawer = !this.drawer
		},
	},
})
