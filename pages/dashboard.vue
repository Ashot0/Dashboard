<template>
	<div class="dashboard">
		<DashboardSmallNumIconBlock
			:name="'Today’s Money'"
			:num="'$53,000'"
			:percent="55"
		>
			<template v-slot:icon>
				<WalletIcon />
			</template>
		</DashboardSmallNumIconBlock>
		<DashboardSmallNumIconBlock
			:name="'Today’s Users'"
			:num="'2,300'"
			:percent="5"
		>
			<template v-slot:icon>
				<GlobeIcon />
			</template>
		</DashboardSmallNumIconBlock>
		<DashboardSmallNumIconBlock
			:name="'New Clients'"
			:num="'+3,052'"
			:percent="-14"
		>
			<template v-slot:icon>
				<DocumentIcon />
			</template>
		</DashboardSmallNumIconBlock>
		<DashboardSmallNumIconBlock
			:name="'Total Sales'"
			:num="'$173,000'"
			:percent="8"
		>
			<template v-slot:icon>
				<CartIcon />
			</template>
		</DashboardSmallNumIconBlock>
		<DashboardWelcomeBackBlock :name="'Mark Johnson'" />
		<DashboardCircularProgressBarSmall
			:title="'Satisfaction Rate'"
			:subTitle="'From all projects'"
			:percent="75"
		/>
		<DashboardCircularProgressBarBig
			:title="'Referral Tracking'"
			:invited="145"
			:bonus="'1,465'"
			:totalStore="9.3"
		/>
		<DashboardGraphBigBlock
			:title="'Sales overview'"
			:num="[1, 2, 3, 4, 5]"
			:percent="5"
		/>
		<DashboardProgressBarsBlock
			:title="'Active Users'"
			:num="num"
			:percent="23"
			:items="items"
		/>
		<DashboardProjectsBigBlock />
		<DashboardOrdersBlockMiddle />
	</div>
</template>

<script setup lang="ts">
import {
	WalletIcon,
	GlobeIcon,
	DocumentIcon,
	CartIcon,
	Rocket,
	SettingKey,
} from '@/assets/Icons/icons';
const items = [
	{
		image: WalletIcon,
		title: 'Users',
		num: '32,984',
		sumbol: '',
		percent: 66,
	},
	{
		image: Rocket,
		title: 'Clicks',
		num: '2,45',
		sumbol: 'm',
		percent: 85,
	},
	{
		image: CartIcon,
		title: 'Sales',
		num: '2,400',
		sumbol: '$',
		percent: 40,
	},
	{
		image: SettingKey,
		title: 'Settings',
		num: '320',
		sumbol: '',
		percent: 60,
	},
];
const num = [64, 46, 24, 58, 100, 82, 94, 58, 32];

const route = useRoute();
</script>

<style scoped lang="scss">
.dashboard {
	display: flex;
	gap: 24px 1%;
	flex-wrap: wrap;
}
</style>
