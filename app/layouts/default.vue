<style>
html {
	overflow-y: auto;
}
</style>

<template>
	<v-app>
		<NavDrawer v-if="lgAndUp" />
		<v-main class="d-flex flex-column">
			<Navbar />
			<slot />
			<Footer />
		</v-main>
	</v-app>
</template>

<script setup>
import { useDisplay } from 'vuetify'
import Favorites from '~/pages/favorites.vue'
import Rocketinfo from '~/pages/favorites.vue'
const { xs, mdAndUp, lgAndUp } = useDisplay()
</script>
