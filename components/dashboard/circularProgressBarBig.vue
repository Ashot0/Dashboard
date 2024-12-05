<template>
	<div class="circular-progress-bar-big">
		<div class="circular-progress-bar-big__info">
			<h4 class="circular-progress-bar-big__title">{{ props.title }}</h4>
			<div class="circular-progress-bar-big__num-block">
				<h5 class="circular-progress-bar-big__sub-title">Invited</h5>
				<p class="circular-progress-bar-big__number">
					{{ props.invited }} people
				</p>
			</div>
			<div class="circular-progress-bar-big__num-block">
				<h5 class="circular-progress-bar-big__sub-title">Bonus</h5>
				<p class="circular-progress-bar-big__number">{{ props.bonus }}</p>
			</div>
		</div>
		<div class="circular-progress-bar-big__dashboard">
			<button type="button" class="circular-progress-bar-big__button">
				<DotDotDot />
			</button>
			<a-progress
				type="dashboard"
				:size="212"
				:stroke-color="{
					'0%': '#05CD99ff',
					'75%': '#05CD9920',
					'100%': '#05CD9900',
				}"
				:percent="props.totalStore * 10"
			>
				<template #format="percent">
					<div class="">
						<p class="circular-progress-bar-big__sub-title">Safety</p>
						<div class="circular-progress-bar-big__total-store">
							{{ props.totalStore }}
						</div>
						<p class="circular-progress-bar-big__sub-title">Total Score</p>
					</div>
				</template>
			</a-progress>
		</div>
	</div>
</template>
<script setup lang="ts">
import { DotDotDot } from '@/assets/Icons/icons';

const props = defineProps<{
	title: string;
	invited: number;
	bonus: string;
	totalStore: number;
}>();
</script>

<style scoped lang="scss">
.circular-progress-bar-big {
	padding: 27px 31px 44px 1.94%;
	position: relative;
	border-radius: 20px;
	min-width: 451px;
	width: 34.44%;
	height: 344px;
	background: rgb(6, 11, 40);
	background: linear-gradient(
		90deg,
		rgba(6, 11, 40, 0.74) 0%,
		rgba(10, 14, 35, 0.71) 100%
	);
	color: var(--white-color);
	display: flex;
	justify-content: space-between;
	@media (max-width: 1024px) and (min-width: 768px) {
		width: 100%;
	}
	@media (max-width: 768px) {
		flex-direction: column;
		min-width: 310px;
		height: fit-content;
	}
	&__info {
		position: relative;
		width: clamp(100px, 140%, 217px);
	}

	&__title {
		font-size: 18px;
		line-height: 140%;
		margin-bottom: 41px;
	}

	&__num-block {
		height: 93px;
		width: 100%;
		// width: 217px;
		// width: clamp(100px, 140%, 217px);
		padding: 20px 20px 29px 24px;
		margin: 0 0 21px 6.45%;
		background: rgb(6, 12, 41);
		background: linear-gradient(
			160deg,
			rgba(6, 12, 41, 1) 0%,
			rgba(4, 12, 48, 0.5) 100%
		);
		border-radius: 20px;
	}

	&__sub-title {
		font-weight: 500;
		font-size: 14px;
		margin-bottom: 5px;
		color: var(--grey-color);
	}

	&__number {
		line-height: 140%;
		font-size: 18px;
		font-weight: bold;
	}

	&__dashboard {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		min-width: 206px;
	}

	&__button {
		color: var(--purple-color);
		position: absolute;
		right: 25px;
		top: 20px;
		background-color: #ffffff14;
		width: 37px;
		height: 37px;
		border-radius: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&__total-store {
		font-family: var(--jakarta);
		color: var(--white-color);
		font-weight: bold;
		font-size: 50px;
		margin-bottom: 6px;
	}
}
</style>

<!-- :title=""
		:invited=""
		:bonus=""
		:totalStore="" 
		
		circular-progress-bar-big__dashboard
		
		-->
