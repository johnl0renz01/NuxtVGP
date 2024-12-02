<style>
html {
	overflow-y: auto;
}
</style>

<template>
	<v-app>
		<NavDrawer v-model="drawer.drawer" :permanent="lgAndUp" :temporary="mdAndDown" />
		<v-main class="d-flex flex-column">
			<Navbar class="flex-grow-0" />
			<slot class="flex-grow-1" />
			<Footer class="flex-grow-0" />
		</v-main>
	</v-app>
</template>

<script setup>
import { useDisplay } from 'vuetify'
import Favorites from '~/pages/favorites.vue'
import Rocketinfo from '~/pages/favorites.vue'
const { xs, mdAndDown, lgAndUp } = useDisplay()

const drawer = useDrawer()
</script>
