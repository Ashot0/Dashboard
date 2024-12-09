<template>
	<div class="profile">
		<ProfileHead class="profile__profile-head" />
		<ProfileWelcomeBlock class="profile__welcome-block" />
		<ProfileCarInformations class="profile__car-informations" />
		<ProfileInformation class="profile__profile-informations" />
		<ProfileSetting class="profile__platform-settings" />
		<ProfileProjects class="profile__projects" />
	</div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped lang="scss">
.profile {
	display: grid;
	grid-template-columns: 23% 45.63% 28.19%;
	grid-template-rows: 129px 377px 485px;
	grid-column-gap: 1.5%;
	grid-row-gap: 25px;

	&__profile-head {
		grid-area: 1 / 1 / 2 / 4;
	}
	&__welcome-block {
		grid-area: 2 / 1 / 3 / 2;
	}
	&__car-informations {
		grid-area: 2 / 2 / 3 / 3;
	}
	&__profile-informations {
		grid-area: 2 / 3 / 3 / 4;
	}
	&__platform-settings {
		grid-area: 3 / 1 / 4 / 2;
	}
	&__projects {
		grid-area: 3 / 2 / 4 / 4;
	}
	@media (min-width: 1280px) and (max-width: 1440px) {
		grid-template-rows: 129px 580px 485px;
		grid-template-columns: 30% 38% 30%;
	}
	@media (min-width: 768px) and (max-width: 1280px) {
		grid-template-rows: 129px 377px 377px 377px 277px 1fr;
	}
	@media (max-width: 768px) {
		grid-template-rows: 129px 377px 790px 377px 437px 1fr;
	}
	@media (max-width: 1280px) {
		grid-template-columns: 100%;
		&__profile-head {
			grid-area: 1 / 1 / 2 / 2;
		}
		&__welcome-block {
			grid-area: 2 / 1 / 3 / 2;
		}
		&__car-informations {
			grid-area: 3 / 1 / 4 / 2;
		}
		&__profile-informations {
			grid-area: 4 / 1 / 5 / 2;
		}
		&__platform-settings {
			grid-area: 5 / 1 / 6 / 2;
		}
		&__projects {
			grid-area: 6 / 1 / 7 / 2;
		}
	}
}
</style>
