export default defineNuxtRouteMiddleware((to, from) => {
	if (someConditionThatIndicatesError) {
		return navigateTo('/dashboard');
	}
});
