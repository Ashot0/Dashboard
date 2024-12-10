<template>
	<div class="sign-in">
		<div class="sign-in__wrapper">
			<h4 class="sign-in__title">Nice to see you!</h4>
			<p class="sign-in__sub-title">Enter your email and password to sign in</p>
			<SignInForm :type="'in'" class="sign-in__form" />
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'login',
});
const route = useRoute();
</script>

<style scoped lang="scss">
.sign-in {
	// min-height: 100vh;
	height: 100%;
	display: flex;
	margin-top: 200px;
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
		margin-bottom: 6.5px;
		margin-left: 50px;
	}

	&__sub-title {
		color: var(--grey-color);
		font-size: 14px;
		font-weight: 500;
		line-height: 140%;
		margin-left: 50px;
		margin-bottom: 35.5px;
	}

	&__form {
	}
}
</style>
