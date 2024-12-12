<template>
	<div class="progress-bars-block">
		<div :class="'progress-bars-block__graph-wrapper'">
			<div class="progress-bars-block__graph-size">
				<p>0</p>
				<p>100</p>
				<p>200</p>
				<p>300</p>
				<p>400</p>
				<p>500</p>
			</div>
			<div
				v-for="item in props.num"
				class="progress-bars-block__graph-line"
				:style="`height: ${item}%`"
			></div>
		</div>
		<h3 class="progress-bars-block__title title-base">{{ props.title }}</h3>
		<p class="progress-bars-block__percent">
			<span
				:class="
					props.percent < 0
						? 'progress-bars-block__percent_negative'
						: 'progress-bars-block__percent_positive'
				"
				>({{ props.percent > 0 ? '+' : '' }}{{ props.percent }}) 
			</span>
			than last week
		</p>
		<div class="progress-bars-block__items">
			<div v-for="item in items" class="progress-bars-block__item item">
				<div class="item__top">
					<div class="item__img-wrapper">
						<component class="item__img" :is="item.image" />
					</div>
					<div class="item__title">{{ item.title }}</div>
				</div>
				<div class="item__number">{{ item.num }}{{ item.sumbol }}</div>
				<div class="item__line">
					<a-progress :percent="item.percent" size="small" :show-info="false" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	title: string;
	num: number[];
	percent: number;
	items: {
		id: number;
		image: any;
		title: string;
		num: string;
		sumbol: string;
		percent: number;
	}[];
}>();
props.items.forEach((item) => {
	item.image = markRaw(item.image);
});
</script>

<style scoped lang="scss">
.progress-bars-block {
	height: 445px;
	border-radius: 20px;
	padding: 16px;
	background: rgb(6, 11, 40);
	background: linear-gradient(
		135deg,
		rgba(6, 11, 40, 0.74) 0%,
		rgba(10, 14, 35, 0.71) 100%
	);
	color: var(--white-color);
	&__graph-wrapper {
		position: relative;
		display: flex;
		align-items: end;
		justify-content: space-between;
		width: 100%;
		height: 222px;
		padding: 35px;
		border-radius: 10px;
		margin-bottom: 24px;
		background: rgb(6, 12, 41);
		background: linear-gradient(
			160deg,
			rgba(6, 12, 41, 1) 0%,
			rgba(4, 12, 48, 0.5) 100%
		);
	}
	&__graph-size {
		font-size: 10px;
		height: 152px;
		display: flex;
		flex-direction: column-reverse;
		justify-content: space-between;
	}
	&__graph-line {
		position: relative;
		min-width: 7px;
		background-color: var(--white-color);
		border-radius: 15px;
	}

	&__title {
		margin-bottom: 6px;
		margin-left: 5px;
	}

	&__percent {
		margin-left: 5px;
		margin-bottom: 36px;
		line-height: 140%;
		color: var(--grey-color);
		font-size: 14px;
		&_negative {
			font-weight: 500;
			color: var(--red-color);
		}
		&_positive {
			font-weight: 500;
			color: var(--green-color);
		}
	}
	&__items {
		margin-left: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	&__item {
	}
}

.item {
	display: flex;
	flex-direction: column;
	width: 100.5px;
	height: 65.5px;
	@media (max-width: 640px) {
		width: fit-content;
	}
	&__top {
		display: flex;
		align-items: center;
		gap: 11px;
		margin-bottom: 6.5px;
	}

	&__img-wrapper {
		width: 25px;
		height: 25px;
		padding: 6px;
		border-radius: 6px;
		background-color: var(--nav-btn-icon-color);
		display: flex;
		justify-content: center;
		align-items: center;
		@media (max-width: 640px) {
			display: none;
		}
	}
	&__img {
		width: 12.5px;
		height: 12.5px;
	}

	&__title {
		color: var(--grey-color);
		font-size: 14px;
		font-weight: 500;
		line-height: 150%;
	}

	&__number {
		font-weight: bold;
		line-height: 140%;
		font-size: 18px;
		color: var(--white-color);
	}

	&__line {
		// @media (max-width: 640px) {
		// 	display: none;
		// }
	}
}
</style>
