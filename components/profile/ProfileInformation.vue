<template>
	<div class="profile-information">
		<h4 class="profile-information__title title-base">Profile Informations</h4>
		<p class="profile-information__information">
			<span class="profile-information__text-grey">{{ information.text }}</span>
		</p>
		<div class="profile-information__line"></div>

		<p class="profile-information__full-name">
			<span class="profile-information__text-grey">Full Name: </span>
			{{ information.fullName }}
		</p>
		<p class="profile-information__mobile">
			<span class="profile-information__text-grey">Mobile: </span>
			{{ information.Mobile }}
		</p>
		<p class="profile-information__email">
			<span class="profile-information__text-grey">Email: </span>
			{{ information.Email }}
		</p>
		<p class="profile-information__location">
			<span class="profile-information__text-grey">Location: </span>
			{{ information.Location }}
		</p>
		<div class="profile-information__social-media">
			<span class="profile-information__text-grey">Social Media:</span>
			<p class="profile-information__icons">
				<a href="https://www.facebook.com/"><facebook /></a>
				<a href="https://x.com/"><twitter /></a>
				<a href="https://www.instagram.com/"><instagram /></a>
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { facebook, twitter, instagram } from '@/assets/Icons/icons';
const information = {
	text: 'Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
	fullName: 'Mark Johnson',
	Mobile: '(44) 123 1234 123',
	Email: 'mark@simmmple.com',
	Location: 'United States',
};
</script>

<style scoped lang="scss">
.profile-information {
	background: rgb(6, 11, 40);
	background: linear-gradient(
		135deg,
		rgba(6, 11, 40, 0.94) 0%,
		rgba(10, 14, 35, 0.49) 100%
	);
	border-radius: 20px;
	color: var(--white-color);
	padding: 28px 21px 32px 21px;
	font-weight: 500;
	line-height: 150%;
	&__title {
		margin-bottom: 14px;
	}

	&__information {
		padding-bottom: 15px;
	}
	&__line {
		width: 100%;
		height: 1px;
		background: rgb(224, 225, 226);
		background: linear-gradient(
			90deg,
			rgba(224, 225, 226, 0) 0%,
			rgba(224, 225, 226, 1) 50%,
			rgba(224, 225, 226, 0.16) 100%
		);
		margin-bottom: 25px;
	}
	&__text-grey {
		font-weight: normal;
		color: var(--grey-color);
	}

	&__full-name,
	&__mobile,
	&__email,
	&__location,
	&__social-media {
		display: flex;
		margin-bottom: 15px;
		gap: 7.5px;
	}

	&__icons {
		display: flex;
		gap: 15px;
		align-items: center;
	}
}
</style>
