<template>
	<header class="header">
		<div class="header__breadcrumb">
			<h2 class="header__path">
				<span class="header__path_grey">Pages</span> / {{ pageTitle }}
			</h2>
			<h3 class="header__title">{{ pageTitle }}</h3>
		</div>
		<div class="header__menu">
			<div class="header__search-wrapper">
				<SearchIcon class="header__search-icon" />
				<input
					placeholder="Type here..."
					class="header__search"
					type="search"
					name=""
					id=""
				/>
			</div>
			<button
				@click="navigateTo('/signIn')"
				class="header__sign-in"
				type="button"
			>
				<PersonIcon class="header__sign-in-icon" /> Sign In
			</button>
			<button @click="navigateTo('/rtl')" class="header__setting" type="button">
				<SettingIcon class="header__setting-icon" />
			</button>
			<button
				@click="navigateTo('/notification')"
				class="header__notification"
				type="button"
			>
				<NotificationIcon class="header__notification-icon" />
			</button>
		</div>
	</header>
</template>

<script setup lang="ts">
import {
	PersonIcon,
	SearchIcon,
	SettingIcon,
	NotificationIcon,
} from '@/assets/Icons/icons';
const route = useRoute();
const router = useRouter();

const pageTitle = computed(() => {
	const path = route.path.replace(/^\//, '');
	return path.charAt(0).toUpperCase() + path.slice(1);
});
const navigateTo = (link: string) => {
	router.push(link);
};
</script>

<style scoped lang="scss">
.header {
	position: relative;
	z-index: 25;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: var(--jakarta);
	// height: 52.5px;
	margin: 0 -10px 10px -10px;
	padding: 10px 20px;
	backdrop-filter: blur(10px);
	border-radius: 20px;
	border: 2px solid #ffffff30;
	@media (max-width: 1600px) {
		padding: 10px 20px 10px 60px;
	}
	&__breadcrumb {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: 3.5px;
	}

	&__path {
		position: relative;
		line-height: 140%;
		color: var(--white-color);
		font-size: 12px;
		font-weight: 700;
		&_grey {
			color: var(--grey-color);
			font-weight: 400;
		}
	}

	&__title {
		position: relative;
		line-height: 140%;
		color: var(--white-color);
		font-size: 14px;
		font-weight: 500;
	}

	&__menu {
		position: relative;
		display: flex;
		align-items: center;
	}

	&__search-wrapper {
		position: relative;
		display: flex;
		align-items: center;
		height: 39.5px;
		min-width: 199px;
		background-color: var(--search-background);
		border: 1px solid var(--light-gray-border-30);
		border-radius: 15px;
		margin-right: 18px;
		@media (max-width: 768px) {
			display: none;
		}
	}

	&__search {
		position: relative;
		color: var(--grey-color);
		background: none;
		font-family: var(--jakarta);
		line-height: 150%;
		font-size: 12px;
	}
	&__search-icon {
		position: relative;
		color: var(--search-btn-color);
		width: 15px;
		height: 15px;
		margin: 0 12.5px;
	}

	&__sign-in {
		position: relative;
		font-size: 12px;
		margin-right: 23.5px;
		background: none;
		color: var(--sign-in-color);
	}
	&__sign-in-icon {
		position: relative;
		width: 12px;
		height: 12px;
	}

	&__setting {
		position: relative;
		background: none;
		color: var(--sign-in-color);
		width: 12px;
		height: 12px;
		margin-right: 18.5px;
	}
	&__setting-icon {
		position: relative;
		width: 100%;
		height: 100%;
	}

	&__notification {
		position: relative;
		background: none;
		color: var(--sign-in-color);
		width: 12px;
		height: 12px;
	}
	&__notification-icon {
		position: relative;
		width: 100%;
		height: 100%;
	}
}
</style>
