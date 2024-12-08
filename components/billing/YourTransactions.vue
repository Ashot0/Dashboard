<template>
	<div class="your-transactions">
		<div class="your-transactions__top">
			<h3 class="your-transactions__title title-base">Your Transactions</h3>
			<h4 class="your-transactions__date-range">
				<Calendar class="your-transactions__calendar-icon" />
				23 - 30 March 2020
			</h4>
		</div>
		<div class="your-transactions__wrapper">
			<div class="your-transactions__sub-title">NEWEST</div>
			<div
				v-for="transaction in transactionsAfter"
				class="your-transactions__transaction transaction"
			>
				<div
					class="transaction__icon"
					:class="[
						transaction.amount >= 0
							? 'transaction__icon_up'
							: 'transaction__icon_down',
						transaction.status && 'transaction__icon_warning',
					]"
				>
					<Warning v-if="transaction.status" />
					<ArrowUp v-else />
				</div>
				<div class="transaction__info">
					<div class="transaction__name">{{ transaction.company }}</div>
					<div class="transaction__date">{{ transaction.dateTime }}</div>
				</div>
				<div
					class="transaction__sum"
					:class="transaction.amount > 0 ? 'transaction__sum_up' : ''"
				>
					<span class="transaction__icon_warning" v-if="transaction.status">{{
						transaction.status
					}}</span>
					<span v-else
						><span v-if="transaction.amount > 0">+</span
						>{{ transaction.amount }}$</span
					>
				</div>
			</div>

			<div class="your-transactions__sub-title">YESTERDAY</div>

			<div
				v-for="transaction in transactionsBefore"
				class="your-transactions__transaction transaction"
			>
				<div
					class="transaction__icon"
					:class="[
						transaction.amount >= 0
							? 'transaction__icon_up'
							: 'transaction__icon_down',
						transaction.status && 'transaction__icon_warning',
					]"
				>
					<Warning v-if="transaction.status" />
					<ArrowUp v-else />
				</div>
				<div class="transaction__info">
					<div class="transaction__name">{{ transaction.company }}</div>
					<div class="transaction__date">{{ transaction.dateTime }}</div>
				</div>
				<div
					class="transaction__sum"
					:class="transaction.amount > 0 ? 'transaction__sum_up' : ''"
				>
					<span class="transaction__icon_warning" v-if="transaction.status">{{
						transaction.status
					}}</span>
					<span v-else
						><span v-if="transaction.amount > 0">+</span
						>{{ transaction.amount }}$</span
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Calendar, Warning, ArrowUp } from '@/assets/Icons/icons';
interface Transaction {
	company: string;
	dateTime: string;
	amount: number;
	status?: string;
}
const transactions: Transaction[] = [
	{ company: 'Netflix', dateTime: '27 March 2020, at 12:30 PM', amount: -2500 },
	{ company: 'Apple', dateTime: '27 March 2020, at 12:30 PM', amount: 2500 },
	{ company: 'Stripe', dateTime: '26 March 2020, at 13:45 PM', amount: 800 },
	{ company: 'HubSpot', dateTime: '26 March 2020, at 12:30 PM', amount: 1700 },
	{
		company: 'Webflow',
		dateTime: '26 March 2020, at 05:00 AM',
		amount: 0,
		status: 'Pending',
	},
	{
		company: 'Microsoft',
		dateTime: '25 March 2020, at 16:30 PM',
		amount: -987,
	},
];

const cutoffDate = new Date('2020-03-27T00:00:00');

const transactionsAfter = computed(() => {
	return transactions.filter(
		(transaction) => new Date(transaction.dateTime.split(',')[0]) >= cutoffDate
	);
});

const transactionsBefore = computed(() => {
	return transactions.filter(
		(transaction) => new Date(transaction.dateTime.split(',')[0]) < cutoffDate
	);
});
</script>

<style scoped lang="scss">
.your-transactions {
	background: rgb(6, 11, 40);
	background: linear-gradient(
		130deg,
		rgba(6, 11, 40, 0.94) 0%,
		rgba(10, 14, 35, 0.49) 100%
	);
	padding: 28px 22px 26px 21px;
	border-radius: 20px;
	color: var(--white-color);
	display: flex;
	flex-direction: column;
	gap: 17.5px;

	&__top {
		display: flex;
		justify-content: space-between;
	}
	&__title {
	}

	&__date-range {
		color: var(--grey-color);
		font-size: 14px;
		line-height: 150%;
		font-weight: 500;
	}

	&__calendar-icon {
		border-radius: 3px;
		margin-right: 7.5px;
		background-color: aliceblue;
	}

	&__wrapper {
		display: flex;
		flex-direction: column;
		gap: 21px;
	}

	&__sub-title {
		color: var(--grey-color);
		font-size: 10px;
		font-weight: 500;
		line-height: 150%;
	}

	&__transaction {
	}
}
.transaction {
	display: flex;
	align-items: center;
	&__icon {
		width: 35px;
		height: 35px;
		border: 1px solid;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 14px;
		&_up {
			color: var(--green-color);
			border-color: var(--green-color);
		}
		&_down {
			color: var(--red-color);
			rotate: 180deg;
			border-color: var(--red-color);
		}
		&_warning {
			color: var(--grey-color);
			border-color: var(--grey-color);
		}
	}

	&__info {
	}

	&__name {
		font-size: 14px;
		font-weight: 500;
		line-height: 140%;
	}

	&__date {
		font-size: 14px;
		line-height: 150%;
		color: var(--grey-color);
	}

	&__sum {
		flex: 1;
		text-align: end;
		color: var(--grey-color);
		font-size: 14px;
		line-height: 150%;
		font-weight: 500;
		&_up {
			color: var(--green-color);
		}
	}
}
</style>
