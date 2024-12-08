<template>
	<header class="header">
		<div class="header__logo">VISION UI FREE</div>
		<nav class="header__navbar">
			<button
				class="header__link"
				@click="navigateTo('/dashboard')"
				type="button"
			>
				<Overview />dashboard
			</button>
			<button
				class="header__link"
				@click="navigateTo('/profile')"
				type="button"
			>
				<PersonIcon />profile
			</button>
			<button class="header__link" @click="navigateTo('/signIn')" type="button">
				<SignIn />sign In
			</button>
			<button class="header__link" @click="navigateTo('/signUp')" type="button">
				<SignUp />sign up
			</button>
		</nav>
		<button class="header__btn blue-btn-base" type="button">
			Free Download
		</button>
	</header>
</template>

<script setup lang="ts">
import { PersonIcon, Overview, SignIn, SignUp } from '@/assets/Icons/icons';

const router = useRouter();

const navigateTo = (link: string) => {
	router.push(link);
};
</script>

<style scoped lang="scss">
.header {
	position: fixed;
	top: 34px;
	transform: translate(-50%);
	left: 50%;
	display: flex;
	width: 61.88%;
	min-width: 987.5px;
	justify-content: space-between;
	align-items: center;
	padding: 17.5px 24px;
	backdrop-filter: blur(10px);
	border-radius: 20px;
	border: 2px solid #ffffff30;
	@media (max-width: 1024px) {
		width: 61.88%;
		min-width: 700px;
	}
	@media (max-width: 768px) {
		width: 61.88%;
		min-width: 500px;
	}
	@media (max-width: 640px) {
		width: 61.88%;
		min-width: fit-content;
		justify-content: center;
	}
	&__logo {
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 1) 0%,
			rgba(117, 122, 140, 0) 100%
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-weight: 500;
		font-size: 14px;
		text-wrap: nowrap;
	}

	&__navbar {
		display: flex;
		gap: 30px;
		@media (max-width: 640px) {
			display: none;
		}
	}

	&__btn {
		width: 150px;
		height: 35px;
		@media (max-width: 768px) {
			display: none;
		}
	}
	&__link {
		font-size: 10px;
		font-weight: bold;
		line-height: 150%;
		display: flex;
		gap: 4px;
		align-items: center;
		color: var(--white-color);
		background: none;
		text-transform: uppercase;
	}
}
</style>
