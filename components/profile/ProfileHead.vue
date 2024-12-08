<template>
	<div class="profile-head">
		<div class="profile-head__img-wrapper">
			<img
				class="profile-head__img"
				src="@/assets/Images/ProfileImage.png"
				alt=""
				srcset=""
			/>
			<button class="profile-head__img-edit" type="button"><Edit /></button>
		</div>
		<div class="profile-head__info">
			<p class="profile-head__name title-base">Mark Johnson</p>
			<p class="profile-head__email">mark@simmmple.com</p>
		</div>

		<div class="profile-head__btns-block">
			<button class="profile-head__btn blue-btn-base" type="button">
				<Overview /><span>Overview</span>
			</button>
			<button class="profile-head__btn" type="button">
				<Teams /><span>Teams</span>
			</button>
			<button class="profile-head__btn" type="button">
				<SettingKey /><span>Projects</span>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { SettingKey, Overview, Teams, Edit } from '@/assets/Icons/icons';
</script>

<style scoped lang="scss">
.profile-head {
	padding: 22px 52.5px 22px 22px;
	border-radius: 20px;
	width: 100%;
	background: rgb(6, 11, 40);
	background: linear-gradient(
		135deg,
		rgba(6, 11, 40, 0.94) 0%,
		rgba(10, 14, 35, 0.49) 100%
	);
	display: flex;
	align-items: center;
	position: relative;
	@media (max-width: 768px) {
		padding: 15px;
	}
	&__img {
		width: 80px;
		height: 80px;
		border-radius: 12px;
		overflow: hidden;
	}
	&__img-wrapper {
		position: relative;
		width: 80px;
		height: 80px;
		margin-right: 22px;
	}

	&__img-edit {
		border-radius: 8px;
		width: 26px;
		height: 26px;
		bottom: -5px;
		right: -5px;
		position: absolute;
		background: linear-gradient(
			135deg,
			rgba(6, 11, 40, 1) 0%,
			rgba(76, 81, 110, 1) 100%
		);
	}
	&__info {
		display: flex;
		flex-direction: column;
		gap: 1px;
	}

	&__name {
		color: var(--white-color);
	}

	&__email {
		color: var(--grey-color);
		font-size: 14px;
		line-height: 150%;
	}

	&__btns-block {
		display: flex;
		justify-content: flex-end;
		flex: 1;
		@media (max-width: 640px) {
			display: none;
		}
	}

	&__btn {
		text-transform: uppercase;
		padding: 10px 22px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4px;
		background: none;
		width: 134.5px;
		border-radius: 12px;
		color: var(--white-color);
		font-size: 10px;
		font-weight: bold;
		line-height: 150%;
		@media (max-width: 768px) {
			padding: 10px;
			width: fit-content;
			margin-left: 20px;
			span {
				display: none;
			}
		}
	}
	.blue-btn-base {
		background-color: var(--nav-btn-icon-color);
	}
}
</style>
