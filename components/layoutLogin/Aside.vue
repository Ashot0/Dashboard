<template>
	<aside class="aside">
		<div class="aside__image-wrapper">
			<img
				ref="rotatingBg"
				class="aside__rotating-bg"
				src="@/assets/Images/RotateBg.png"
				alt=""
				srcset=""
			/>
		</div>
		<div class="aside__text">
			<h3 class="aside__sub-title">INSPIRED BY THE FUTURE:</h3>
			<h2 class="aside__title">THE VISION UI DASHBOARD</h2>
		</div>
	</aside>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
gsap.registerPlugin();
const rotatingBg = ref();

onMounted(() => {
	gsap.to(rotatingBg.value, {
		rotationZ: '360deg',
		duration: 150,
		repeat: -1,
	});
});
</script>

<style scoped lang="scss">
.aside {
	width: 50%;
	max-width: 50vw;
	height: 100%;
	top: 0;
	overflow: hidden;
	position: relative;
	&__image-wrapper {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&__rotating-bg {
		object-fit: cover;
		position: fixed;
		min-height: 150vh;
		width: 125vw;
		// top: -25%;
		// left: -75%;
	}

	&__text {
		font-family: var(--jakarta);
		position: absolute;
		transform: translate(-50%);
		left: 50%;
		top: 50%;
		z-index: 12;
		color: var(--white-color);
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 16px;
		letter-spacing: 4px;
		text-wrap: nowrap;
	}

	&__sub-title {
		font-size: 20px;
	}

	&__title {
		font-size: 36px;
		font-weight: bold;
	}
	&__sub-title,
	&__title {
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 1) 0%,
			rgba(117, 122, 140, 0.9) 100%
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
}
</style>
