<template>
	<v-card class="h-auto pb-10">
		<v-divider class=""></v-divider>
		<v-footer class="pt-6">
			<v-row justify="center" no-gutters>
				<v-btn
					v-for="(icon, index) in icons"
					:key="index"
					:icon="icon.icon"
					:href="icon.link"
					target="_blank"
					class="mx-4"
					variant="text"
				></v-btn>

				<v-col class="text-center pb-4" cols="12">
					<div class="pt-4 px-16">
						Dedicated to reducing space travel costs and enabling humanity's future on Mars.
					</div>
					{{ new Date().getFullYear() }} —
					<strong>SpaceX</strong>
				</v-col>
			</v-row>
		</v-footer>
	</v-card>
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
