<script setup lang="ts">
interface Details {
	description: string | null
}

const props = defineProps<{
	details: Details
}>()

const showFullDescription = ref(false)

const toggleFullDescription = () => {
	showFullDescription.value = !showFullDescription.value
}

const truncatedDescription = computed(() => {
	let description = props.details.description || ''
	if (!showFullDescription.value && description.length > 100) {
		description = description.substring(0, 100) + '...'
	}
	return description
})
</script>

<template>
	{{ truncatedDescription }}
	<span @click="toggleFullDescription" class="text-decoration-underline cursor-pointer text-caption">
		<br />
		{{
			props.details.description != null && props.details.description.length > 100
				? !showFullDescription
					? 'More'
					: 'Less'
				: ''
		}}
	</span>
</template>
