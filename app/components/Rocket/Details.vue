<script lang="ts" setup>
interface Information {
	route: string
	obj: any
	name: string | null
	firstFlight: string | null
	heightF: number | null
	heightM: number | null
	massK: number | null
	massL: number | null
	description: string | null
}

const props = defineProps<{
	rocket: Information
}>()

const favorites = useFavorites()
</script>

<template>
	<v-col cols="12" lg="5">
		<v-img
			class=""
			src="https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Ae4cd9435-eb63-49dc-a1a7-4013e4f7d0bb?source=next-article&fit=scale-down&quality=highest&width=1440&dpr=1"
			cover
		></v-img>
	</v-col>

	<v-col cols="12" lg="7" class="d-flex flex-column">
		<div class="flex-grow-1">
			<h1 class="text-md-h4 font-weight-bold">
				{{ rocket.name }}
			</h1>

			<p class="my-2 text-xs-subtitle-2 text-grey-lighten-1">First Flight: {{ rocket.firstFlight }}</p>

			<div class="my-5">
				<div class="my-2">
					Height:
					<v-chip class="mr-2" label>{{ rocket.heightF }} ft.</v-chip>
					<v-chip class="mr-2" label>{{ rocket.heightM }} m.</v-chip>
				</div>
				<div class="my-2">
					Mass:
					<v-chip class="mr-2" label>{{ rocket.massK }} kg.</v-chip>
					<v-chip class="mr-2" label>{{ rocket.massL }} lb.</v-chip>
				</div>
			</div>

			<p class="pb-10">
				{{ rocket.description }}
			</p>
		</div>

		<v-btn
			class="text-none flex-grow-0"
			:color="favorites.favorite.includes(rocket.route) ? 'background' : 'blue-darken-4'"
			:disabled="favorites.favorite.includes(rocket.route) ? true : false"
			rounded="0"
			variant="flat"
			@click="favorites.add(rocket.route, rocket.obj)"
		>
			<span class="">
				{{ favorites.favorite.includes(rocket.route) ? 'Added to Favorites' : 'Favorites' }}
			</span>
		</v-btn>
	</v-col>
</template>
