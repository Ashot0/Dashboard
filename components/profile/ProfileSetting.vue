<template>
	<div class="profile-settings">
		<h3 class="profile-settings__title title-base">Platform Settings</h3>
		<div class="profile-settings__wrapper">
			<div>
				<h4 class="profile-settings__sub-title">ACCOUNT</h4>
				<div class="profile-settings__switch">
					<a-switch size="small" v-model:checked="checked1" />Email me when
					someone follows me
				</div>
				<div class="profile-settings__switch">
					<a-switch size="small" v-model:checked="checked2" />
					Email me when someone answers to...
				</div>
				<div class="profile-settings__switch">
					<a-switch size="small" v-model:checked="checked3" />
					Email me when someone mentions me
				</div>
			</div>

			<div>
				<h4
					class="profile-settings__sub-title profile-settings__sub-title_top41"
				>
					APPLICATION
				</h4>
				<div class="profile-settings__switch">
					<a-switch size="small" v-model:checked="checked4" />New launches and
					projects
				</div>
				<div class="profile-settings__switch">
					<a-switch size="small" v-model:checked="checked5" />Monthly product
					updates
				</div>
				<div class="profile-settings__switch">
					<a-switch size="small" v-model:checked="checked6" />Subscribe to
					newsletter
				</div>
				<div class="profile-settings__switch">
					<a-switch size="small" v-model:checked="checked7" />Receive mails
					weekly
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const checked1 = ref<boolean>(true);
const checked2 = ref<boolean>(false);
const checked3 = ref<boolean>(true);
const checked4 = ref<boolean>(false);
const checked5 = ref<boolean>(false);
const checked6 = ref<boolean>(true);
const checked7 = ref<boolean>(true);
</script>

<style scoped lang="scss">
.profile-settings {
	background: rgb(6, 11, 40);
	background: linear-gradient(
		135deg,
		rgba(6, 11, 40, 0.94) 0%,
		rgba(10, 14, 35, 0.49) 100%
	);
	border-radius: 20px;
	color: var(--white-color);
	padding: 28px 21px;

	&__wrapper {
		@media (min-width: 768px) and (max-width: 1280px) {
			display: flex;
			gap: 20px;
		}
	}

	&__sub-title {
		color: var(--grey-color);
		font-size: 10px;
		line-height: 150%;
		font-weight: 500;
		margin-bottom: 20px;
		margin-top: 26px;
	}

	&__switch {
		text-wrap: nowrap;
		display: flex;
		align-items: center;
		gap: 15px;
		color: var(--grey-color);
		font-size: 14px;
		line-height: 150%;
		margin-bottom: 15.5px;
	}
}
</style>
