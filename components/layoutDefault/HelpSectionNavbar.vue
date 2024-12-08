<template>
	<div class="help-section-navbar">
		<a
			target="_blank"
			href="https://ashot0.github.io/Portfolio.2.0-public/#/"
			class="help-section-navbar__link"
		>
			<NavNeedhelpIcon class="help-section-navbar__img" />
		</a>
		<h3 class="help-section-navbar__title">Need help?</h3>
		<h4 class="help-section-navbar__subtitle">Please check my link</h4>
		<a
			target="_blank"
			href="https://ashot0.github.io/Portfolio.2.0-public/#/"
			class="help-section-navbar__doc-btn"
		>
			LINK
		</a>
	</div>
</template>

<script setup lang="ts">
import { NavNeedhelpIcon } from '@/assets/Icons/icons';
const router = useRouter();
</script>
<style scoped lang="scss">
.help-section-navbar {
	background: center / contain no-repeat
		url('/assets/Images/BackgroundHelp.png');
	width: calc(100% - 16px);
	position: relative;
	margin: 23px 8px 8px 8px;
	padding: 16px;
	bottom: 0;
	left: 0;
	height: 169.5px;
	border-radius: 15px;
	@media (max-width: 768px) {
		width: 100%;
		background: center / cover no-repeat
			url('/assets/Images/BackgroundHelp.png');
	}
	&__link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: fit-content;
		background-color: var(--white-color);
		padding: 8.5px;
		border-radius: 12px;
		margin-bottom: 20.5px;
	}

	&__img {
		color: var(--nav-btn-icon-color);
		width: 18px;
		height: 18px;
	}

	&__title {
		color: var(--white-color);
		font-size: 14px;
		font-weight: 700;
		margin-bottom: 3.5px;
	}

	&__subtitle {
		color: var(--white-color);
		font-size: 12px;
		margin-bottom: 11.5px;
	}

	&__doc-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 35px;
		border-radius: 12px;
		background: rgb(10, 14, 35);
		background: linear-gradient(
			155deg,
			rgba(10, 14, 35, 0.71) 0%,
			rgba(6, 11, 40, 0.74) 100%
		);
		color: var(--white-color);
		font-weight: 700;
		font-size: 10px;
	}
}
</style>
