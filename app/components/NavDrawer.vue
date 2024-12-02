<script setup lang="ts">
import Profile from './NavDrawer/Profile.vue'
import Options from './NavDrawer/Options.vue'
import Logout from './NavDrawer/Logout.vue'
</script>

<template>
	<v-navigation-drawer class="bg-black" location="left">
		<template v-slot:prepend>
			<Profile />
		</template>
		<v-divider></v-divider>

		<Options />

		<template v-slot:append>
			<Logout />
		</template>
	</v-navigation-drawer>
</template>
