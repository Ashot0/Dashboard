<template>
	<div class="default-layout">
		<aside
			class="default-layout__aside"
			:class="
				leftBlock
					? 'default-layout__aside_visible'
					: 'default-layout__aside_hidden'
			"
		>
			<button
				class="default-layout__aside-btn"
				:class="
					leftBlock
						? 'default-layout__aside_visible'
						: 'default-layout__aside_hidden'
				"
				type="button"
				@click="leftBlockHidden"
			>
				☰
			</button>
			<AsideNavbar :onClose="leftBlockHidden" />
		</aside>
		<main
			class="default-layout__page-wrapper"
			:class="!leftBlock && 'default-layout__page-wrapper_visible'"
			@click="leftBlockCloseClick"
		>
			<LayoutDefaultHeader class="default-layout__header" />
			<div class="default-layout__page-slot"><slot /></div>
			<img
				ref="rotatingBg"
				class="default-layout__rotating-bg"
				src="./../assets/Images/BlueBg.png"
				alt=""
				srcset=""
			/>
			<footer class="default-layout__footer">
				<a
					target="_blank"
					href="https://ashot0.github.io/Portfolio.2.0-public/#/"
					>©2024, Made by Illia Golovan</a
				>
				<a
					target="_blank"
					href="https://ashot0.github.io/Portfolio.2.0-public/#/"
					>link</a
				>
			</footer>
		</main>
	</div>
</template>

<script setup lang="ts">
import AsideNavbar from '~/components/layoutDefault/AsideNavbar.vue';
import { gsap } from 'gsap';
gsap.registerPlugin();
const rotatingBg = ref();
const leftBlock = ref(true);

const leftBlockHidden = () => {
	leftBlock.value = !leftBlock.value;
};
function leftBlockCloseClick(event: any) {
	if (!leftBlock.value) {
		leftBlock.value = !leftBlock.value;
		event.stopPropagation();
	}
}
onMounted(() => {
	gsap.to(rotatingBg.value, {
		rotationZ: '360deg',
		duration: 150,
		repeat: -1,
		ease: 'linear',
	});
});
</script>

<style lang="scss" scoped>
.default-layout {
	font-family: var(--jakarta);
	padding: 0 20px 20px 20px;
	min-height: 100vh;
	display: flex;
	gap: 12px;
	background-color: var(--background-dark-blue);
	max-width: 100vw;
	@media (max-width: 1024px) {
		padding: 0 20px 10px 20px;
	}
	@media (min-width: 1600px) {
		padding-left: 288px;
	}
	&::-webkit-scrollbar {
		background-color: var(--nav-btn-background);
		width: 8px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: var(--nav-btn-icon-color);
		border-radius: 8px;
		opacity: 0.5;
	}
	&__aside {
		z-index: 25;
		position: absolute;
		left: 0;
		transition: all 0.3s;
		@media (max-width: 1600px) {
			left: -100%;
		}

		&_visible {
			@media (max-width: 1600px) {
				left: -100%;
			}
		}
		&_hidden {
			@media (max-width: 1600px) {
				left: 0;
			}
		}
	}
	&__aside-btn {
		position: fixed;
		top: 22.5px;
		left: 22.5px;
		z-index: 25;
		background: var(--background-dark-blue);
		color: var(--white-color);
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 12px;
		@media (min-width: 1600px) {
			display: none;
		}
	}
	&__header {
		top: 10px;
		position: sticky;
		z-index: 20;
	}
	&__page-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 24px;
		flex: 1;
		height: auto;
		min-height: 100vh;
		&_visible {
			@media (max-width: 1600px) {
				opacity: 0.4;
				* {
					pointer-events: none;
				}
			}
		}
	}
	&__rotating-bg {
		z-index: 0;
		width: 125vw;
		left: 50%;
		position: fixed;
	}
	&__navbar {
	}
	&__page-slot {
		flex: 1;
		z-index: 10;
	}
	&__footer {
		font-family: var(--jakarta);
		z-index: 10;
		padding: 10px 10px 0 10px;
		text-align: center;
		display: flex;
		justify-content: space-between;
		a {
			color: var(--white-color);
		}
	}
}
</style>
