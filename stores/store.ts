import { defineStore } from 'pinia';

export const useCounterStore = defineStore('store', {
	state: () => ({
		count: 0 as number,
	}),
	actions: {
		increment() {
			this.count++;
		},
		decrement() {
			this.count--;
		},
	},
});
