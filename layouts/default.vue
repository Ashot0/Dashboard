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
			<AsideNavbar />
		</aside>
		<main class="default-layout__page-wrapper">
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
import { ref, onMounted } from 'vue';
import AsideNavbar from '~/components/layoutDefault/AsideNavbar.vue';
import { gsap } from 'gsap';
gsap.registerPlugin();
const rotatingBg = ref();
const leftBlock = ref(false);

const leftBlockHidden = () => {
	leftBlock.value = !leftBlock.value;
};
onMounted(() => {
	gsap.to(rotatingBg.value, {
		rotationZ: '360deg',
		duration: 150,
		repeat: -1,
	});
});
</script>

<style lang="scss" scoped>
.default-layout {
	font-family: var(--jakarta);
	padding: 10px 22px 40px 10px;
	min-height: 100vh;
	display: flex;
	gap: 24px;
	background-color: var(--background-dark-blue);

	@media (min-width: 1600px) {
		padding-left: 288px;
	}
	&__aside {
		z-index: 25;
		position: absolute;
		left: 0;
		transition: all 1s;

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
		top: 15px;
		left: 5px;
		z-index: 25;
		background: var(--background-dark-blue);
		color: var(--white-color);
		padding: 10px;
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
		top: 0;
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
	}
	&__rotating-bg {
		z-index: 0;
		width: 125vw;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
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

<!-- const iconsList = [
  'CartIcon',
  'DocumentIcon',
  'GlobeIcon',
  'NavBillingIcon',
  'NavDashboardIcon',
  'NavNeedhelpIcon',
  'NavProfileIcon',
  'NavRTLIcon',
  'NavSignInIcon',
  'NavSignUpIcon',
  'NavTablesIcon',
  'NotificationIcon',
  'PersonIcon',
  'SearchIcon',
  'SettingIcon',
  'WalletIcon',
]; -->
