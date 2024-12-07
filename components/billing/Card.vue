<template>
	<div class="card">
		<div class="card__top">
			<div class="card__title title-base">{{ card.title }}</div>
			<div class="card__circles"><Circles /></div>
		</div>
		<div class="card__num">{{ card.num }}</div>
		<div class="card__info">
			<div class="card__cvv-wrapper">
				<div class="card__cvv-title">VALID THRU</div>
				<div class="card__cvv">{{ card.date }}</div>
			</div>
			<div class="card__cvv-wrapper">
				<div class="card__cvv-title">CVV</div>
				<div class="card__cvv">{{ card.cvv }}</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Circles } from '@/assets/Icons/icons';
const card = {
	title: 'Vision UI',
	num: '7812 2139 0823 XXXX',
	date: '05/24',
	cvv: '09X',
};
</script>

<style scoped lang="scss">
.card {
	border-radius: 20px;
	padding: 22px 24.28px 36.19px 31px;
	background: center / cover no-repeat url('@/assets/Images/CardBg.png');
	display: flex;
	flex-direction: column;

	&__top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	&__num {
		font-size: 24px;
		font-weight: bold;
		line-height: 140%;
		margin-top: 66.69px;
		margin-bottom: 12.5px;
		text-wrap: nowrap;
	}

	&__info {
		display: flex;
		gap: 34.5px;
	}
	&__cvv-title {
		font-size: 10px;
		line-height: 150%;
		font-weight: 500;
	}

	&__cvv {
		font-size: 14px;
		line-height: 140%;
		font-weight: 700;
	}
}
</style>
