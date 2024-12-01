<template>
	<v-card class="h-auto pb-10">
		<v-divider class=""></v-divider>
		<v-footer class="pt-6">
			<v-row justify="center" no-gutters>
				<v-btn v-for="icon in icons" :key="icon" :icon="icon" class="mx-4" variant="text"></v-btn>

				<v-col class="text-center" cols="12">
					<div class="pt-4 pb-2 px-16">
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
		icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
	}),
}
</script>
