<template>
	<div class="payment-method">
		<div class="payment-method__top">
			<h4 class="payment-method__title title-base">Payment Method</h4>
			<button class="payment-method__btn blue-btn-base">ADD A NEW CARD</button>
		</div>
		<div class="payment-method__wrapper">
			<div v-for="card in cards" class="payment-method__card">
				<component
					class="payment-method__image"
					v-if="card.image"
					:is="card.image"
				/>
				<p class="payment-method__num">{{ card.num }}</p>
				<button class="payment-method__edit" type="button"><Edit /></button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { VisaIcon, MastercardIcon, Edit } from '@/assets/Icons/icons';
const cards = [
	{
		image: VisaIcon,
		num: '7812 2139 0823 XXXX',
	},
	{
		image: MastercardIcon,
		num: '7812 2139 0823 XXXX',
	},
];
</script>

<style scoped lang="scss">
.payment-method {
	background: rgb(6, 11, 40);
	background: linear-gradient(
		130deg,
		rgba(6, 11, 40, 0.94) 0%,
		rgba(10, 14, 35, 0.49) 100%
	);
	padding: 24px 22px 26px 22px;
	border-radius: 20px;
	color: var(--white-color);
	display: flex;
	flex-direction: column;
	gap: 24px;
	&__top {
		display: flex;
		justify-content: space-between;
	}

	&__wrapper {
		display: flex;
		gap: 28px;
		justify-content: center;
		@media (max-width: 768px) {
			flex-direction: column;
		}
	}

	&__card {
		border: 2px solid #ffffff80;
		border-radius: 20px;
		padding: 1px;
		box-sizing: border-box;
		border-radius: 20px;
		position: relative;
		width: 50%;
		padding: 22.75px 27px 22.75px 20px;
		display: flex;
		align-items: center;
		@media (max-width: 768px) {
			width: 100%;
		}
	}

	&__image {
		margin-right: 15px;
	}

	&__num {
		font-size: 14px;
		font-weight: 500;
		line-height: 140%;
		flex: 1;
	}

	&__edit {
		background: none;
	}
}
</style>
