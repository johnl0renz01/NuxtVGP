<script setup lang="ts">
import Links from './Footer/Links.vue'
import Description from './Footer/Description.vue'
</script>

<template>
	<v-card class="h-auto pb-10">
		<v-divider class=""></v-divider>
		<v-footer class="pt-6">
			<v-row justify="center" no-gutters>
				<Links />
				<Description />
			</v-row>
		</v-footer>
	</v-card>
</template>
