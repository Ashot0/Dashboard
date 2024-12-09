<template>
	<div class="dashboard">
		<DashboardSmallNumIconBlock
			class="dashboard__small-num-block"
			:name="'Today’s Money'"
			:num="'$53,000'"
			:percent="55"
		>
			<template v-slot:icon>
				<WalletIcon />
			</template>
		</DashboardSmallNumIconBlock>
		<DashboardSmallNumIconBlock
			class="dashboard__small-num-block"
			:name="'Today’s Users'"
			:num="'2,300'"
			:percent="5"
		>
			<template v-slot:icon>
				<GlobeIcon />
			</template>
		</DashboardSmallNumIconBlock>
		<DashboardSmallNumIconBlock
			class="dashboard__small-num-block"
			:name="'New Clients'"
			:num="'+3,052'"
			:percent="-14"
		>
			<template v-slot:icon>
				<DocumentIcon />
			</template>
		</DashboardSmallNumIconBlock>
		<DashboardSmallNumIconBlock
			class="dashboard__small-num-block"
			:name="'Total Sales'"
			:num="'$173,000'"
			:percent="8"
		>
			<template v-slot:icon>
				<CartIcon />
			</template>
		</DashboardSmallNumIconBlock>
		<DashboardWelcomeBackBlock
			class="dashboard__welcome-back-block"
			:name="'Mark Johnson'"
		/>
		<DashboardCircularProgressBarSmall
			class="dashboard__circular-progress-bar-small"
			:title="'Satisfaction Rate'"
			:subTitle="'From all projects'"
			:percent="75"
		/>
		<DashboardCircularProgressBarBig
			class="dashboard__circular-progress-bar-big"
			:title="'Referral Tracking'"
			:invited="145"
			:bonus="'1,465'"
			:totalStore="9.3"
		/>
		<DashboardGraphBigBlock
			class="dashboard__graph-big-block"
			:title="'Sales overview'"
			:num="[1, 2, 3, 4, 5]"
			:percent="5"
		/>
		<DashboardProgressBarsBlock
			class="dashboard__progress-bars-block"
			:title="'Active Users'"
			:num="num"
			:percent="23"
			:items="itemsStore.items"
		/>
		<DashboardProjectsBigBlock
			class="dashboard__projects-big-block"
			v-if="projectsStore.projects.length === projectsStore.ProjectCount"
			:projects="projectsStore.projects"
		/>
		<DashboardOrdersBlockMiddle class="dashboard__orders-block-middle" />
	</div>
</template>

<script setup lang="ts">
import {
	WalletIcon,
	GlobeIcon,
	DocumentIcon,
	CartIcon,
} from '@/assets/Icons/icons';
import { useProjectsStore } from '@/stores/projects';
import { useItemsStore } from '@/stores/items';

const projectsStore = useProjectsStore();
const itemsStore = useItemsStore();
const num = [64, 46, 24, 58, 100, 82, 94, 58, 32];
</script>

<style scoped lang="scss">
.dashboard {
	display: flex;
	gap: 24px 1%;
	flex-wrap: wrap;
	max-width: 100vw;
	overflow: hidden;
	&__small-num-block {
		// max-width: 382px;
		width: 24%;
		min-width: 250px;

		@media (max-width: 1280px) {
			width: 49%;
		}
		@media (max-width: 640px) {
			width: 100%;
		}
	}

	&__welcome-back-block {
		min-width: 290px;
		width: 40.75%;
		height: 344px;

		@media (max-width: 1280px) {
			width: 100%;
		}
	}

	&__circular-progress-bar-small {
		min-width: 250px;
		width: 21.88%;
		@media (max-width: 1280px) and (min-width: 1024px) {
			width: 49%;
		}
		@media (max-width: 1024px) {
			width: 100%;
		}
	}

	&__circular-progress-bar-big {
		min-width: 451px;
		width: 34.44%;
		@media (max-width: 1280px) and (min-width: 1024px) {
			width: 49%;
		}
		@media (max-width: 1024px) and (min-width: 768px) {
			width: 100%;
		}
		@media (max-width: 768px) {
			min-width: 310px;
			width: 100%;
		}
	}

	&__graph-big-block {
		width: 57.75%;
		min-width: 412px;
		@media (max-width: 1280px) and (min-width: 1024px) {
			width: 49%;
		}
		@media (max-width: 1024px) {
			width: 100%;
			min-width: 100%;
			max-width: 100%;
		}
	}

	&__progress-bars-block {
		width: 40.75%;
		min-width: 440px;
		@media (max-width: 1280px) and (min-width: 1024px) {
			width: 49%;
		}
		@media (max-width: 1024px) {
			width: 100%;
			min-width: 100%;
		}
	}

	&__projects-big-block {
		width: 66.06%;
		@media (max-width: 1024px) {
			width: 100%;
		}
	}

	&__orders-block-middle {
		width: 32.44%;
		@media (max-width: 1024px) {
			width: 100%;
		}
	}
}
</style>
