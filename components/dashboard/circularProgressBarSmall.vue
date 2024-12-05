<template>
	<div class="circular-progress-bar-small">
		<h4 class="circular-progress-bar-small__title">{{ props.title }}</h4>
		<h5 class="circular-progress-bar-small__sub-title">{{ props.subTitle }}</h5>
		<div class="circular-progress-bar-small__dashboard-wrapper">
			<a-progress
				type="dashboard"
				:size="212"
				:stroke-color="{
					'0%': '#0075ffff',
					'100%': '#0075ff00',
				}"
				:percent="props.percent"
			>
				<template #format="percent">
					<div class="circular-progress-bar-small__icon-wrapper">
						<div class="circular-progress-bar-small__icon">
							<Smile />
						</div>
					</div>
				</template>
			</a-progress>
		</div>
		<div class="circular-progress-bar-small__info">
			<p>0%</p>
			<div class="circular-progress-bar-small__info-center">
				<p class="circular-progress-bar-small__percent">{{ props.percent }}%</p>
				<p>Based on likes</p>
			</div>
			<p>100%</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Smile } from '@/assets/Icons/icons';
const props = defineProps<{
	title: string;
	subTitle: string;
	percent: number;
}>();
</script>

<style scoped lang="scss">
.circular-progress-bar-small {
	position: relative;
	border-radius: 20px;
	padding: 26px 28px 38px 28px;
	min-width: 250px;
	width: 21.88%;
	height: 344px;
	background: rgb(6, 11, 40);
	background: linear-gradient(
		135deg,
		rgba(6, 11, 40, 0.94) 0%,
		rgba(10, 14, 35, 0.49) 100%
	);
	&__title {
		color: var(--white-color);
		font-size: 18px;
		line-height: 140%;
		font-weight: bold;
		margin-bottom: 4px;
	}

	&__sub-title {
		color: var(--grey-color);
		font-size: 14px;
		font-weight: 500;
	}

	&__dashboard-wrapper {
		bottom: 30px;
		left: 50%;
		translate: -50%;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&__icon-wrapper {
		display: flex;
		justify-content: center;
		height: 110px;
	}
	&__icon {
		color: var(--white-color);
		background-color: var(--nav-btn-icon-color);
		border-radius: 50%;
		width: 48px;
		height: 48px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&__info {
		text-align: center;
		position: absolute;
		bottom: 38px;
		width: calc(100% - 56px);
		height: 82px;
		z-index: 25;
		background: rgb(6, 11, 40);
		background: linear-gradient(
			135deg,
			rgba(6, 11, 40, 0.74) 0%,
			rgba(10, 14, 35, 0.71) 100%
		);
		display: flex;
		justify-content: space-between;
		padding: 17px 25px 20px 25px;
		border-radius: 20px;
		color: var(--grey-color);
		font-size: 12px;
	}
	&__info-center {
		position: absolute;
		left: 50%;
		display: flex;
		flex-direction: column;
		gap: 5px;
		transform: translate(-50%);
	}

	&__percent {
		font-size: 28px;
		font-weight: bold;
		color: var(--white-color);
	}
}
</style>
