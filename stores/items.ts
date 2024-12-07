import { defineStore } from 'pinia';
import { WalletIcon, CartIcon, Rocket, SettingKey } from '@/assets/Icons/icons';

interface Item {
	id: number;
	image: any;
	title: string;
	num: string;
	sumbol: string;
	percent: number;
}

export const useItemsStore = defineStore('items', {
	state: () => ({
		items: [
			{
				id: 1,
				image: WalletIcon,
				title: 'Users',
				num: '32,984',
				sumbol: '',
				percent: 66,
			},
			{
				id: 2,
				image: Rocket,
				title: 'Clicks',
				num: '2,45',
				sumbol: 'm',
				percent: 85,
			},
			{
				id: 3,
				image: CartIcon,
				title: 'Sales',
				num: '2,400',
				sumbol: '$',
				percent: 40,
			},
			{
				id: 4,
				image: SettingKey,
				title: 'Settings',
				num: '320',
				sumbol: '',
				percent: 60,
			},
		] as Item[],
	}),
	getters: {
		itemCount: (state) => state.items.length,
	},
	actions: {
		setItems(newItems: Item[]) {
			this.items = newItems;
		},

		addItem(newItem: Item) {
			this.items.push(newItem);
		},

		removeItemById(id: number) {
			this.items = this.items.filter((item) => item.id !== id);
		},

		clearItems() {
			this.items = [];
		},
	},
});
