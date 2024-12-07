<template>
	<div class="balance">
		<div class="balance__balance-wrapper">
			<h4 class="balance__title">Credit Balance</h4>
			<button type="button" class="balance__btn"><DotDotDot /></button>
			<p class="balance__num">$25,215</p>
		</div>
		<div class="balance__newest-wrapper">
			<h5 class="balance__sub-title">NEWEST</h5>
			<div v-for="item in items" class="balance__item">
				<div class="balance__item-image">
					<component
						class="projects-table__image"
						v-if="item.image"
						:is="item.image"
					/>
				</div>
				<div class="balance__item-info">
					<p class="balance__item-name">{{ item.name }}</p>
					<p class="balance__item-date">{{ item.date }}</p>
				</div>
				<div class="balance__item-sum">{{ item.sum }}</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BillTaxes, DotDotDot } from '@/assets/Icons/icons';
const items = [
	{
		image: BillTaxes,
		name: 'Bill & Taxes',
		date: 'Today, 16:36',
		sum: '-$154.50',
	},
];
</script>

<style scoped lang="scss">
.balance {
	background: rgb(6, 11, 40);
	background: linear-gradient(
		130deg,
		rgba(6, 11, 40, 0.94) 0%,
		rgba(10, 14, 35, 0.49) 100%
	);
	padding: 25px 24px 27px 24px;
	border-radius: 20px;
	// min-width: 416px;
	font-family: var(--jakarta);
	&__balance-wrapper {
		padding: 18px 15px 23px 15px;
		position: relative;
		height: 103px;
		width: 100%;
		border-radius: 14px;
		background: right / cover no-repeat url('@/assets/Images/Balance.png');
		margin-bottom: 19px;
	}

	&__title {
		font-size: 12px;
		font-weight: 500;
		line-height: 20px;
		letter-spacing: -2%;
	}

	&__btn {
		position: absolute;
		top: 15px;
		right: 17px;
		background: none;
		color: var(--white-color);
	}

	&__num {
		line-height: 42px;
		font-weight: bold;
		font-size: 34px;
	}

	&__newest-wrapper {
	}

	&__sub-title {
		font-size: 10px;
		font-weight: 500;
		line-height: 150%;
		color: var(--grey-color);
		margin-bottom: 8px;
	}

	&__item {
		display: flex;
		align-items: center;
	}

	&__item-image {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		background-color: var(--light-white-color-20);
		width: 42px;
		height: 42px;
		margin-right: 11px;
	}
	&__item-info {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	&__item-name {
		font-size: 14px;
		font-weight: 500;
		line-height: 140%;
	}

	&__item-date {
		color: var(--grey-color);
		font-size: 14px;
		font-weight: 500;
		line-height: 150%;
	}

	&__item-sum {
		position: relative;
		text-align: end;
		flex: 1;
		font-weight: bold;
		font-size: 14px;
		line-height: 24px;
	}
}
</style>
