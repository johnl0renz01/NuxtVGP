<script lang="ts" setup>
interface Information {
	rocketName: string | null
	missionName: string | null
	launchDate: string | null
	launchSite: string | null
	launchDetails: string | null
}

const props = defineProps<{
	header: Information
}>()
</script>

<template>
	<div class="mobile-container text-subtitle-2">
		<div class="text-no-wrap pr-4" style="min-width: 60px; max-width: 60px"></div>
		<div class="text-wrap pr-4" style="min-width: 150px; max-width: 150px">
			{{ header.rocketName }}
		</div>
		<div class="text-wrap pr-4" style="min-width: 200px; max-width: 200px">
			{{ header.missionName }}
		</div>
		<div class="text-no-wrap" style="min-width: 300px; max-width: 300px">
			{{ header.launchDate }}
		</div>
		<div class="text-wrap" style="min-width: 125px; max-width: 125px">{{ header.launchSite }}</div>
		<div class="text-wrap" style="min-width: 300px; max-width: 300px">
			{{ header.launchDetails }}
		</div>
	</div>
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
	z-index: 10;
	position: absolute;
}

.mobile-container::-webkit-scrollbar {
	display: none;
}
</style>
