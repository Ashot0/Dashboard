<template>
	<div class="billing">
		<BillingCard class="billing__card" />
		<BillingBalance class="billing__balance" />
		<BillingPaymentMethod class="billing__payment-method" />
		<BillingInformation class="billing__billing-information" />
		<BillingInvoices class="billing__invoices" />
		<BillingYourTransactions class="billing__your-transactions" />
	</div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped lang="scss">
.billing {
	display: grid;
	grid-template-columns: 28.75% 26% 42.13%;
	grid-template-rows: 240px 172px 538px;
	grid-column-gap: 24px;
	grid-row-gap: 24px;
	color: var(--white-color);

	&__card {
		grid-area: 1 / 1 / 2 / 2;
	}

	&__balance {
		grid-area: 1 / 2 / 2 / 3;
	}

	&__payment-method {
		grid-area: 2 / 1 / 3 / 3;
	}

	&__billing-information {
		grid-area: 3 / 1 / 4 / 3;
	}

	&__invoices {
		grid-area: 1 / 3 / 3 / 4;
	}

	&__your-transactions {
		grid-area: 3 / 3 / 4 / 4;
	}

	@media (max-width: 1024px) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto auto;

		&__invoices {
			grid-area: 4 / 1 / 5 / 3;
		}

		&__your-transactions {
			grid-area: 5 / 1 / 6 / 3;
		}
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto auto auto auto auto;

		&__card {
			grid-area: 1 / 1 / 2 / 2;
		}

		&__balance {
			grid-area: 2 / 1 / 3 / 2;
		}

		&__payment-method {
			grid-area: 3 / 1 / 4 / 2;
		}

		&__billing-information {
			grid-area: 4 / 1 / 5 / 2;
		}

		&__invoices {
			grid-area: 5 / 1 / 6 / 2;
		}

		&__your-transactions {
			grid-area: 6 / 1 / 7 / 2;
		}
	}
}
</style>
