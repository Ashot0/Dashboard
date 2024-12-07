import { defineStore } from 'pinia';
import {
	ImageAuthor1,
	ImageAuthor2,
	ImageAuthor3,
	ImageAuthor4,
	ImageAuthor5,
	ImageAuthor6,
} from '@/assets/Icons/icons.js';

interface Author {
	image: any;
	name: string;
	email: string;
	function1: string;
	function2: string;
	status: boolean;
	employed: string;
}

export const useAuthorsStore = defineStore('authors', {
	state: () => ({
		authors: [
			{
				image: ImageAuthor1,
				name: 'Esthera Jackson',
				email: 'esthera@simmmple.com',
				function1: 'Manager',
				function2: 'Organization',
				status: true,
				employed: '14/06/21',
			},
			{
				image: ImageAuthor2,
				name: 'Alexa Liras',
				email: 'alexa@simmmple.com',
				function1: 'Programmer',
				function2: 'Developer',
				status: false,
				employed: '14/06/21',
			},
			{
				image: ImageAuthor3,
				name: 'Laurent Michael',
				email: 'laurent@simmmple.com',
				function1: 'Executive',
				function2: 'authors',
				status: true,
				employed: '14/06/21',
			},
			{
				image: ImageAuthor4,
				name: 'Freduardo Hill',
				email: 'freduardo@simmmple.com',
				function1: 'Manager',
				function2: 'Organization',
				status: true,
				employed: '14/06/21',
			},
			{
				image: ImageAuthor5,
				name: 'Daniel Thomas',
				email: 'daniel@simmmple.com',
				function1: 'Programmer',
				function2: 'Developer',
				status: false,
				employed: '14/06/21',
			},
			{
				image: ImageAuthor6,
				name: 'Mark Wilson',
				email: 'mark@simmmple.com',
				function1: 'Designer',
				function2: 'UI/UX Design',
				status: false,
				employed: '14/06/21',
			},
		] as Author[],
	}),
	getters: {
		authorCount: (state) => state.authors.length,
	},
	actions: {
		setAuthors(newAuthors: Author[]) {
			this.authors = newAuthors;
		},

		addAuthor(newAuthor: Author) {
			this.authors.push(newAuthor);
		},

		removeAuthorByName(name: string) {
			this.authors = this.authors.filter((author) => author.name !== name);
		},

		clearAuthors() {
			this.authors = [];
		},
	},
});
