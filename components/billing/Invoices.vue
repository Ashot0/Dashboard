<template>
	<div class="invoices">
		<div class="invoices__top">
			<h4 class="invoices__title title-base">Invoices</h4>
			<button class="invoices__btn blue-btn-base" type="button">
				VIEW ALL
			</button>
		</div>
		<div class="invoices__wrapper">
			<div v-for="block in info" class="invoices__block">
				<div class="invoices__info">
					<p class="invoices__date">{{ block.date }}</p>
					<p class="invoices__id">{{ block.id }}</p>
				</div>
				<div class="invoices__document">
					<div class="invoices__sum">${{ block.sum }}</div>
					<div class="invoices__pdf">
						<DocumentIcon class="invoices__pdf-icon" /> PDF
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { DocumentIcon } from '@/assets/Icons/icons';

const info = [
	{ date: 'March, 01, 2020', id: '#MS-415646', sum: 180 },
	{ date: 'February, 10, 2021', id: '#RV-126749', sum: 250 },
	{ date: 'April, 05, 2020', id: '#FB-212562', sum: 560 },
	{ date: 'June, 25, 2019', id: '#QW-103578', sum: 120 },
	{ date: 'March, 01, 2019', id: '#AR-803481', sum: 300 },
];
</script>

<style scoped lang="scss">
.invoices {
	background: rgb(6, 11, 40);
	background: linear-gradient(
		130deg,
		rgba(6, 11, 40, 0.94) 0%,
		rgba(10, 14, 35, 0.49) 100%
	);
	padding: 23px 22.5px 47.5px 22.5px;
	border-radius: 20px;
	color: var(--white-color);
	display: flex;
	flex-direction: column;
	gap: 22px;

	&__top {
		display: flex;
		justify-content: space-between;
	}

	&__btn {
		padding: 10px 31.5px;
	}

	&__wrapper {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	&__block {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__info {
		display: flex;
		flex-direction: column;
		gap: 4.5px;
	}

	&__date {
		font-size: 14px;
		line-height: 140%;
		font-weight: 500;
	}

	&__id {
		color: var(--grey-color);
		font-size: 12px;
		line-height: 150%;
	}

	&__document {
		display: flex;
		gap: 14px;
	}

	&__sum {
		font-size: 12px;
		color: var(--grey-color);
	}
	&__pdf {
		color: var(--grey-color);
	}
	&__pdf-icon {
		color: var(--white-color);
		width: 15px;
		height: 15px;
	}
}
</style>
