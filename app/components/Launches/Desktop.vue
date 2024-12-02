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
		<tr :class="isHovering ? 'bg-blue-darken-4' : ''" v-bind="props">
			<td class="">
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
			</td>
			<td class="">
				{{ launches.rocketName }}
			</td>
			<td class="">{{ launches.missionName }}</td>
			<td class="">{{ launches.launchDate }}</td>
			<td class="">{{ launches.launchSite }}</td>

			<td class="text-wrap py-2">
				<Details :details="{ description: launches.launchDetails }" />
			</td>
		</tr>
	</v-hover>
</template>
