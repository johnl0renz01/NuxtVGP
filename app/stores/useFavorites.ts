export const useFavorites = defineStore('favorites', {
	state: () => ({
		favorites: [] as string[],
	}),
	getters: {
		list: (state) => state.favorites,
	},
	actions: {
		add(rocket: string) {
			if (!this.favorites.includes(rocket)) {
				this.favorites.push(rocket)
			}
		},

		display() {
			console.log(this.favorites)
		},
	},
})
