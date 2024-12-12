<template>
	<div class="aside-navbar__wrapper">
		<nav class="aside-navbar">
			<header class="aside-navbar__title">VISION UI FREE</header>
			<div class="aside-navbar__line"></div>
			<menu class="aside-navbar__menu">
				<LayoutDefaultLinkButtonNavbar
					:closeNavbar="closeNavbar"
					:name="'Dashboard'"
					:link="'/dashboard'"
				>
					<NavDashboardIcon />
				</LayoutDefaultLinkButtonNavbar>
				<LayoutDefaultLinkButtonNavbar
					:closeNavbar="closeNavbar"
					:name="'Tables'"
					:link="'/tables'"
				>
					<NavTablesIcon />
				</LayoutDefaultLinkButtonNavbar>
				<LayoutDefaultLinkButtonNavbar
					:closeNavbar="closeNavbar"
					:name="'Billing'"
					:link="'/billing'"
				>
					<NavBillingIcon />
				</LayoutDefaultLinkButtonNavbar>
				<LayoutDefaultLinkButtonNavbar
					:closeNavbar="closeNavbar"
					:name="'RTL'"
					:link="'/rtl'"
				>
					<NavRTLIcon />
				</LayoutDefaultLinkButtonNavbar>
				<h2 class="aside-navbar__sub-title">ACCOUNT PAGES</h2>
				<LayoutDefaultLinkButtonNavbar
					:closeNavbar="closeNavbar"
					:name="'Profile'"
					:link="'/profile'"
				>
					<NavProfileIcon />
				</LayoutDefaultLinkButtonNavbar>
				<LayoutDefaultLinkButtonNavbar
					:closeNavbar="closeNavbar"
					:name="'SignIn'"
					:link="'/signIn'"
				>
					<NavSignInIcon />
				</LayoutDefaultLinkButtonNavbar>
				<LayoutDefaultLinkButtonNavbar
					:closeNavbar="closeNavbar"
					:name="'SignUp'"
					:link="'/signUp'"
				>
					<NavSignUpIcon />
				</LayoutDefaultLinkButtonNavbar>
			</menu>
		</nav>
		<div class="aside-navbar__help-section">
			<LayoutDefaultHelpSectionNavbar />
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	NavBillingIcon,
	NavDashboardIcon,
	NavProfileIcon,
	NavRTLIcon,
	NavSignInIcon,
	NavSignUpIcon,
	NavTablesIcon,
} from '@/assets/Icons/icons';
const props = defineProps({
	onClose: Function,
});
const closeNavbar = () => {
	if (typeof props.onClose === 'function') {
		props.onClose();
	}
};
</script>

<style lang="scss" scoped>
.aside-navbar {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	&__wrapper {
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		z-index: 10;
		font-family: var(--jakarta);
		background: rgb(26, 31, 55);
		background: linear-gradient(
			150deg,
			rgba(6, 11, 38, 0.94) 0%,
			rgba(26, 31, 55, 0) 100%
		);

		min-width: 304px;
		max-height: 1135px;
		height: 100%;
		padding: 0 15px 15px 15px;
		overflow: auto;
		&::-webkit-scrollbar {
			display: none;
		}
		@media (min-width: 1600px) {
			border-radius: 20px;
			min-width: 264px;
		}
		@media (max-width: 1600px) {
			background: rgb(26, 31, 55);
		}
		@media (max-width: 768px) {
			width: 100vw;
		}
	}

	&__title {
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 1) 0%,
			rgba(117, 122, 140, 0) 100%
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-weight: 500;
		font-size: 18px;

		margin-top: 36px;
		margin-bottom: 31.5px;
	}
	&__sub-title {
		color: var(--white-color);
		padding: 12px 16px;
	}
	&__line {
		width: 100%;
		height: 1px;
		background: rgb(224, 225, 226);
		background: linear-gradient(
			90deg,
			rgba(224, 225, 226, 0) 0%,
			rgba(224, 225, 226, 1) 50%,
			rgba(224, 225, 226, 0.16) 100%
		);
		margin-bottom: 22.5px;
	}
	&__menu {
		width: 100%;
		padding: 0 7px;
		display: flex;
		flex-direction: column;
	}
	&__help-section {
	}
}
.navbar-btn {
	&_active {
	}
}
</style>
