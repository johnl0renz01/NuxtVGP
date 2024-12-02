<template>
	<v-btn
		v-for="(icon, index) in icons"
		:key="index"
		:icon="icon.icon"
		:href="icon.link"
		target="_blank"
		class="mx-4"
		variant="text"
	></v-btn>
</template>

<script lang="ts">
export default {
	data: () => ({
		icons: [
			{ icon: 'mdi-facebook', link: 'https://www.instagram.com/spacex/?hl=en' },
			{ icon: 'mdi-twitter', link: 'https://x.com/spacex?mx=2' },
			{ icon: 'mdi-linkedin', link: 'https://ph.linkedin.com/company/spacex' },
			{ icon: 'mdi-instagram', link: 'https://www.facebook.com/spacextechnologies/' },
		],
	}),
}
</script>
