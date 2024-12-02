export const useFavorites = defineStore('favorites', {
	state: () => ({
		favorite: [] as string[],
		favoritesObject: [] as any,
	}),
	getters: {
		list: (state) => state.favorite,
	},
	actions: {
		add(rocket: string, rocketObject: any) {
			if (!this.favorite.includes(rocket)) {
				this.favorite.push(rocket)
				this.favoritesObject.push(rocketObject)
			}
		},

		remove(index: number) {
			this.favorite.splice(index, 1)
			this.favoritesObject.splice(index, 1)
		},
	},
})
