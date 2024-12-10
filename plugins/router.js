import { defineNuxtPlugin } from '#app';
import { createRouter, createWebHashHistory } from 'vue-router';

export default defineNuxtPlugin((nuxtApp) => {
	const router = createRouter({
		history: createWebHashHistory(),
		routes: [...nuxtApp.$router.getRoutes()],
	});

	nuxtApp.vueApp.use(router);
});
