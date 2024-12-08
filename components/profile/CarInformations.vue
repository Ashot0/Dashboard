<template>
	<div class="car-informations">
		<h3 class="car-informations__title title-base">Car Informations</h3>
		<p class="car-informations__sub-title">
			Hello, Mark Johnson! Your Car is ready.
		</p>
		<div class="car-informations__wrapper">
			<div class="car-informations__current-load">
				<a-progress
					type="dashboard"
					:size="171"
					:stroke-color="{
						'0%': '#05CD99ff',
						'75%': '#05CD9920',
						'100%': '#05CD9900',
					}"
					:percent="68"
				>
					<template #format="percent">
						<div class="car-informations__progress-bar">
							<ConsumptionPower />
							<div class="car-informations__total-store">68%</div>
							<p class="car-informations__name">Current load</p>
						</div>
					</template>
				</a-progress>
				<div class="car-informations__progress-info">
					<p class="car-informations__progress-time">0h 58 min</p>
					<p class="car-informations__progress-text">Time to full charge</p>
				</div>
			</div>

			<div class="car-informations__info">
				<div
					v-for="info in carInformationsBlocks"
					class="car-informations__block"
				>
					<div class="car-informations__block-info">
						<p class="car-informations__name">{{ info.name }}</p>
						<p class="car-informations__num">{{ info.num }}</p>
					</div>
					<component
						class="projects-table__image"
						v-if="info.image"
						:is="info.image"
					/>
				</div>

				<!-- 	
	<div class="car-informations__battery-health"></div>
	<div class="car-informations__consumption"></div>
	<div class="car-informations__efficiency"></div>
	<div class="car-informations__this-week"></div> -->
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	CarInformationsIcon1,
	CarInformationsIcon2,
	CarInformationsIcon3,
	CarInformationsIcon4,
	ConsumptionPower,
} from '@/assets/Icons/icons';
const carInformationsBlocks = [
	{
		name: 'Battery Health',
		num: '76%',
		image: CarInformationsIcon1,
	},
	{
		name: 'Efficiency',
		num: '+20%',
		image: CarInformationsIcon3,
	},
	{
		name: 'Consumption',
		num: '163W/km',
		image: CarInformationsIcon2,
	},
	{
		name: 'This Week',
		num: '1.342km',
		image: CarInformationsIcon4,
	},
];
</script>

<style scoped lang="scss">
.car-informations {
	background: rgb(6, 11, 40);
	background: linear-gradient(
		135deg,
		rgba(6, 11, 40, 0.94) 0%,
		rgba(10, 14, 35, 0.49) 100%
	);
	border-radius: 20px;
	color: var(--white-color);
	padding: 28px 22px 39px 22px;
	&__title {
		margin-bottom: 6px;
		@media (max-width: 768px) {
			text-align: center;
		}
	}

	&__sub-title {
		color: var(--grey-color);
		line-height: 150%;
		font-size: 14px;
		margin-bottom: 30px;
		@media (max-width: 768px) {
			text-align: center;
		}
	}
	&__total-store {
		font-family: var(--jakarta);
		margin-top: 6px;
		margin-bottom: 10px;
		color: var(--white-color);
		font-weight: bold;
		font-size: 36px;
	}

	&__wrapper {
		display: flex;
		justify-content: space-between;
		@media (min-width: 1280px) and (max-width: 1440px) {
			flex-direction: column;
			gap: 25px;
			height: max-content;
		}

		@media (max-width: 768px) {
			flex-direction: column;
			gap: 25px;
			height: max-content;
		}
	}

	&__current-load {
		display: flex;
		flex-direction: column;
		gap: 17px;
		@media (min-width: 1280px) and (max-width: 1440px) {
			align-items: center;
		}
		@media (max-width: 768px) {
			align-items: center;
		}
	}
	&__progress-info {
		display: flex;
		flex-direction: column;
		gap: 2px;
		text-align: center;
	}

	&__progress-time {
		font-size: 18px;
		font-weight: bold;
		letter-spacing: -2%;
	}

	&__progress-text {
		color: var(--grey-color);
		font-size: 14px;
		line-height: 20px;
		letter-spacing: -2%;
	}

	&__progress-bar {
		font-family: var(--jakarta);
	}

	&__info {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 24px;
		grid-row-gap: 24px;
		@media (max-width: 768px) {
			grid-template-columns: repeat(1, 1fr);
			grid-template-rows: repeat(4, 1fr);
		}
	}

	&__block-info {
		display: flex;
		justify-content: center;
		gap: 3px;
		flex-direction: column;
	}
	&__block {
		height: 100%;
		background: rgb(6, 11, 40);
		background: linear-gradient(
			135deg,
			rgba(6, 11, 40, 0.74) 0%,
			rgba(10, 14, 35, 0.71) 100%
		);
		width: 100%;
		border-radius: 20px;
		padding: 14px 14px 14px 18px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__name {
		color: var(--grey-color);
		font-size: 12px;
		font-weight: 500;
	}

	&__num {
		font-size: 22px;
		font-weight: bold;
		line-height: 140%;
	}
}
</style>
