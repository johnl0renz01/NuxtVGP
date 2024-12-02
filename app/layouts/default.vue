<style>
html {
	overflow-y: auto;
}

.v-table__wrapper {
	overflow-x: hidden;
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
const { mdAndDown, lgAndUp } = useDisplay()

const drawer = useDrawer()
</script>
