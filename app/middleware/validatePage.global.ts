export default defineNuxtRouteMiddleware((to) => {
	const validRoutes = ['/launches', '/favorites']
	const rocketRegex = /^\/rocket\/[a-zA-Z0-9_-]+$/

	if (!validRoutes.includes(to.path) && !rocketRegex.test(to.path)) {
		return navigateTo('/launches')
	}
})
