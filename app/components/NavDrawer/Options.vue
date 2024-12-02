<template>
	<v-list density="compact" nav>
		<NuxtLink to="/launches" class="text-decoration-none text-white">
			<v-list-item prepend-icon="mdi-rocket" title="Launches" value="launches"></v-list-item>
		</NuxtLink>
		<NuxtLink to="/favorites" class="text-decoration-none text-white">
			<v-list-item prepend-icon="mdi-star" title="Favorites" value="favorite"></v-list-item>
		</NuxtLink>
	</v-list>
</template>
