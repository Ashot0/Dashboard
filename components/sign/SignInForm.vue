<template>
	<div class="sign-in-form" :class="props.type === 'up' && 'sign-in-form_up'">
		<div v-if="props.type === 'up'" class="sign-in-form__up-wrapper">
			<h4 class="sign-in-form__title">Register with</h4>
			<div class="sign-in-form__buttons-up">
				<div class="sign-in-form__button"><facebookBig /></div>
				<div class="sign-in-form__button"><appleBig /></div>
				<div class="sign-in-form__button"><googleBig /></div>
			</div>

			<div class="sign-in-form__sub-title">or</div>
		</div>
		<SignFormInput
			class="sign-in-form__name"
			v-if="props.type === 'up'"
			:placeholder="'Your full name'"
			:name="'Name'"
			:type="'text'"
			:id="'name'"
		/>
		<SignFormInput
			class="sign-in-form__email"
			:placeholder="'Your email address'"
			:name="'Email'"
			:type="'email'"
			:id="'email'"
		/>
		<SignFormInput
			class="sign-in-form__password"
			:placeholder="'Your password'"
			:name="'Password'"
			:type="'password'"
			:id="'password'"
		/>
		<div class="sign-in-form__switch">
			<a-switch size="small" v-model:checked="checked" />Remember me
		</div>
		<button type="button" class="sign-in-form__btn blue-btn-base">
			sign {{ props.type }}
		</button>
		<div class="sign-in-form__dont">
			<a v-if="props.type === 'in'" @click="router.push('/signUp')"
				>Don't have an account?
				<span class="sign-in-form__dont_white">  Sign up</span></a
			>
			<a v-else @click="router.push('/signIn')"
				>Already have an account?
				<span class="sign-in-form__dont_white">  Sign in</span></a
			>
		</div>
	</div>
</template>

<script setup lang="ts">
import { facebookBig, appleBig, googleBig } from '@/assets/Icons/icons';
const router = useRouter();
const props = defineProps<{
	type: 'in' | 'up';
}>();
const checked = ref(true);
</script>

<style scoped lang="scss">
.sign-in-form {
	padding: 0 50px;
	@media (max-width: 480px) {
		width: 100vw;
		padding: 0 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	&_up {
		border-radius: 20px;
		border: 2px solid #ffffff50;
		background: rgb(255, 255, 255);
		background: linear-gradient(
			270deg,
			rgba(255, 255, 255, 0.09) 0%,
			rgba(255, 255, 255, 0) 100%
		);
	}
	&__up-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&__title {
		font-weight: bold;
		font-size: 18px;
		line-height: 130%;
		margin-bottom: 24px;
		margin-top: 45px;
	}

	&__buttons-up {
		display: flex;
		gap: 15px;
		margin-bottom: 20.5px;
	}

	&__button {
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 75px;
		height: 75px;
		border: 2px solid #ffffff50;
		border-radius: 20px;
		background: rgb(255, 255, 255);
		background: linear-gradient(
			270deg,
			rgba(255, 255, 255, 0.09) 0%,
			rgba(255, 255, 255, 0) 100%
		);
	}

	&__sub-title {
		color: var(--grey-color);
		font-weight: bold;
		font-size: 18px;
		line-height: 140%;
		margin-bottom: 17px;
	}

	&__name,
	&__email,
	&__password {
		margin-bottom: 24px;
	}

	&__switch {
		display: flex;
		gap: 10px;
		margin-bottom: 36px;
	}

	&__btn {
		text-transform: uppercase;
		height: 45px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 350px;
		@media (max-width: 480px) {
			width: 150px;
		}
	}

	&__dont {
		cursor: pointer;
		margin-top: 22px;
		text-align: center;
		font-weight: 500;
		font-size: 14px;
		line-height: 140%;
		color: var(--grey-color);
		margin-bottom: 45px;
		&_white {
			font-weight: bold;
			color: var(--white-color);
		}
	}
}
</style>
