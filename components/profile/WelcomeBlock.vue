<template>
	<div class="welcome-block" :class="activeBg && 'welcome-block_active'">
		<div class="welcome-block__top">
			<h2 class="welcome-block__title">Welcome back!</h2>
			<p class="welcome-block__sub-title">Nice to see you, Mark Johnson!</p>
		</div>
		<button
			@click="activeBg = !activeBg"
			class="welcome-block__btn"
			type="button"
		>
			Turn on your car <ArrowUp class="welcome-block__btn-icon" />
		</button>
	</div>
</template>

<script setup lang="ts">
import { ArrowUp } from '@/assets/Icons/icons';
const activeBg = ref(false);
</script>

<style scoped lang="scss">
.welcome-block {
	color: var(--white-color);
	position: relative;
	padding: 31px 35px 44px 35px;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	background: center / cover no-repeat
		url(/assets/Images/BackgroundWelcome1.png);
	transition: background 1s, opacity 1s;
	&_active {
		background: center / cover no-repeat
			url(/assets/Images/BackgroundWelcome2.png);
		.welcome-block__top {
			opacity: 0;
			transition: opacity 1s;
		}
	}
	&__top {
		display: flex;
		flex-direction: column;
		gap: 3px;
		opacity: 1;
		transition: opacity 1s;
	}
	&__title {
		font-size: 30px;
		font-weight: bold;
		line-height: 140%;
	}

	&__sub-title {
		font-size: 14px;
		line-height: 150%;
	}

	&__btn {
		position: absolute;
		bottom: 44px;
		width: fit-content;
		color: var(--white-color);
		background: none;
	}

	&__btn-icon {
		rotate: 90deg;
	}
}
</style>
