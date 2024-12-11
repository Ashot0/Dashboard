<template>
	<div class="login-layout">
		<LayoutLoginHeader class="login-layout__header" />
		<div class="login-layout__wrapper">
			<LayoutLoginAside class="login-layout__aside" />
			<div class="login-layout__page-slot">
				<slot />
				<footer class="login-layout__footer">
					<a
						target="_blank"
						href="https://ashot0.github.io/Portfolio.2.0-public/#/"
						>©2024, Made by Illia Golovan</a
					>
				</footer>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.login-layout {
	height: fit-content;
	font-family: var(--jakarta);
	min-height: 100vh;
	background-color: black;
	overflow-x: hidden;
	max-width: 100vw;
	&::-webkit-scrollbar {
		display: none;
	}

	&__header {
		z-index: 11;
	}

	&__wrapper {
		top: 0;
		position: relative;
		z-index: 9;
		display: flex;
		width: 100vw;
		height: 100vh;
	}

	&__aside {
		@media (max-width: 1024px) {
			display: none;
		}
	}

	&__page-slot {
		width: 50vw;
		padding-bottom: 100px;
		min-height: 100vh;
		height: fit-content;
		position: relative;
		z-index: 10;
		background: center / cover no-repeat url('/assets/Images/DarkBlueBg.png');
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@media (max-width: 1024px) {
			width: 100vw;
		}
	}

	&__footer {
		position: absolute;
		left: 50%;
		transform: translate(-50%);
		bottom: 41px;
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
