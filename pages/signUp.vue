<template>
	<div class="sign-up">
		<h2 class="sign-up__title">Welcome!</h2>
		<h4 class="sign-up__sub-title">
			Use these awesome forms to login or create new account in your project for
			free.
		</h4>
		<SignInForm :type="'up'" />
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'login',
});
const route = useRoute();
</script>

<style scoped lang="scss">
.sign-up {
	margin-top: 150px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: var(--white-color);
	&__wrapper {
	}
	&__title {
		font-size: 30px;
		font-weight: bold;
		line-height: 130%;
		margin-bottom: 11.5px;
	}

	&__sub-title {
		font-size: 14px;
		font-weight: 500;
		line-height: 24px;
		margin-bottom: 54.5px;
		max-width: 333px;
		text-align: center;
	}

	&__form {
	}
}
</style>
