<script lang="ts">
import Details from './Details.vue'
</script>

<script lang="ts" setup>
interface Information {
	link: string | null
	rocketName: string | null
	missionName: string | null
	launchDate: string | null
	launchSite: string | null
	launchDetails: string | null
}

const props = defineProps<{
	launches: Information
}>()
</script>

<template>
	<v-hover v-slot:default="{ isHovering, props }">
		<v-divider class=""></v-divider>
		<div
			class="mobile-container text-subtitle-2 py-1"
			:class="isHovering ? 'bg-blue-darken-4' : ''"
			v-bind="props"
		>
			<div class="text-no-wrap pr-4" style="min-width: 60px; max-width: 60px">
				<v-hover v-slot:default="{ isHovering, props }">
					<NuxtLink :to="'' + launches.link" class="text-decoration-none">
						<button
							class="px-3 py-1 rounded-sm"
							:class="isHovering ? 'bg-white' : 'bg-grey-darken-2'"
							v-bind="props"
						>
							Info
						</button>
					</NuxtLink>
				</v-hover>
			</div>
			<div class="text-wrap pr-4" style="min-width: 150px; max-width: 150px">
				{{ launches.rocketName }}
			</div>
			<div class="text-wrap pr-4" style="min-width: 200px; max-width: 200px">
				{{ launches.missionName }}
			</div>
			<div class="text-no-wrap" style="min-width: 300px; max-width: 300px">
				{{ launches.launchDate }}
			</div>
			<div class="text-wrap" style="min-width: 125px; max-width: 125px">{{ launches.launchSite }}</div>
			<div class="text-wrap" style="min-width: 300px; max-width: 300px">
				<Details :details="{ description: launches.launchDetails }" />
			</div>
		</div>
	</v-hover>
</template>

<style scoped>
.mobile-container {
	-ms-overflow-style: none;
	scrollbar-width: none;

	width: 100vw;
	text-wrap: nowrap;
	display: flex;
	align-items: center;
	overflow-x: auto;
	z-index: 9;
}

.mobile-container::-webkit-scrollbar {
	display: none;
}
</style>
