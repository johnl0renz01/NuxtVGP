<script setup>
import { useDisplay } from 'vuetify'
const { xs, mdAndDown } = useDisplay()
</script>

<template>
	<v-app-bar :elevation="1">
		<template v-slot:prepend v-if="mdAndDown">
			<v-app-bar-nav-icon></v-app-bar-nav-icon>
		</template>

		<v-img
			contain
			src="https://vectorjungal.com/files/preview/1280x417/11722413140pede41toujup4lyxcujeadimugv0hckoehvvje1mkv5tdxrn2ykfm4niuu8rizng6b4jha4ajhdpjcdjfqhtksoyrlz3hiifvplz.png"
		></v-img>
	</v-app-bar>
</template>
