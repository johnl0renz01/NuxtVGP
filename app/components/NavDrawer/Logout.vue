<template>
	<div class="pa-2">
		<v-hover v-slot:default="{ isHovering, props }">
			<v-btn
				block
				class="text-subtitle-2"
				:class="isHovering ? 'bg-blue-grey-darken-4' : ''"
				v-bind="props"
			>
				Logout
			</v-btn>
		</v-hover>
	</div>
</template>
