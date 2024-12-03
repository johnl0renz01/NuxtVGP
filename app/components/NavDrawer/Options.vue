<script lang="ts" setup>
const options = useOptions()
</script>

<template>
	<v-list density="compact" nav>
		<NuxtLink to="/launches" class="text-decoration-none text-white">
			<v-list-item
				prepend-icon="mdi-rocket"
				title="Launches"
				value="launches"
				:class="options.currentLink == 'launches' ? 'bg-grey-darken-4' : ''"
			></v-list-item>
		</NuxtLink>
		<NuxtLink to="/favorites" class="text-decoration-none text-white">
			<v-list-item
				prepend-icon="mdi-star"
				title="Favorites"
				value="favorites"
				:class="options.currentLink == 'favorites' ? 'bg-grey-darken-4' : ''"
				aria-selected="false"
			></v-list-item>
		</NuxtLink>
	</v-list>
</template>
