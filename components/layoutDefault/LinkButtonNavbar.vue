<template>
	<button
		class="link-button-navbar"
		:class="activeLink ? 'link-button-navbar_active' : ''"
		type="button"
		@click="navigateTo"
	>
		<div
			class="link-button-navbar__image-wrapper"
			:class="activeLink ? 'link-button-navbar__image-wrapper_active' : ''"
		>
			<slot> </slot>
		</div>
		<div class="link-button-navbar__name">
			{{ props.name }}
		</div>
	</button>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const props = defineProps<{
	name: string;
	link: string;
	closeNavbar: Function;
}>();
const router = useRouter();
const route = useRoute();
const activeLink = ref(false);

const navigateTo = () => {
	router.push(props.link);
	props.closeNavbar();
};
const activate = () => {
	if (route.path === props.link) {
		activeLink.value = true;
	} else {
		activeLink.value = false;
	}
};
watch(
	() => route.path,
	() => {
		activate();
	}
);
onMounted(() => {
	activate();
});
</script>

<style lang="scss" scoped>
.link-button-navbar {
	height: 54px;
	width: 100%;
	padding: 12px 16px 12px 16px;
	display: flex;
	align-items: center;
	gap: 15px;
	border-radius: 15px;
	background: none;
	&_active {
		background: var(--nav-btn-background);
	}

	&__image-wrapper {
		background: var(--nav-btn-background);
		color: var(--nav-btn-icon-color);
		border-radius: 12px;
		width: 30px;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		* {
			width: 14px;
			height: 14px;
		}
		&_active {
			background: var(--nav-btn-icon-color);
			color: var(--white-color);
		}
	}
	&__name {
		font-weight: 500;
		color: var(--white-color);
	}
}
</style>
