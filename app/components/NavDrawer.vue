<template>
	<v-navigation-drawer class="bg-black" location="left" permanent>
		<template v-slot:prepend>
			<v-list-item
				lines="two"
				prepend-avatar="https://cdn2.vectorstock.com/i/1000x1000/44/01/default-avatar-photo-placeholder-icon-grey-vector-38594401.jpg"
				subtitle="Premium"
				title="John Doe"
			></v-list-item>
		</template>

		<v-divider></v-divider>

		<v-list density="compact" nav>
			<NuxtLink to="/" class="text-decoration-none text-white">
				<v-list-item prepend-icon="mdi-rocket" title="Launches" value="launches"></v-list-item>
			</NuxtLink>
			<NuxtLink to="/favorites" class="text-decoration-none text-white">
				<v-list-item prepend-icon="mdi-star" title="Favorites" value="favorite"></v-list-item>
			</NuxtLink>
			<v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
			<v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
		</v-list>

		<template v-slot:append>
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
	</v-navigation-drawer>
</template>
