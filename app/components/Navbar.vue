<script setup>
import { useDisplay } from 'vuetify'
import Logo from './Navbar/Logo.vue'
const { xs, mdAndDown } = useDisplay()

const drawer = useDrawer()
</script>

<template>
	<v-app-bar :elevation="1">
		<template v-slot:prepend v-if="mdAndDown">
			<v-app-bar-nav-icon @click.stop="drawer.toggleDrawer()"></v-app-bar-nav-icon>
		</template>

		<Logo />
	</v-app-bar>
</template>
