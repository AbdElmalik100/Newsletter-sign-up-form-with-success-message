<template>
    <div class="news-letter">
        <div class="container min-h-screen md:px-2 grid place-items-center md:py-10">
            <div v-if="!confirmed" class="box bg-White md:p-4 md:rounded-3xl flex items-center shadow-xl shadow-gray-900 md:flex-row flex-col-reverse md:w-auto w-full">
                <div class="left-side md:px-10 p-8 py-10 w-2/2">
                    <h1 class="font-bold text-Dark-Slate-Grey md:text-6xl text-5xl">Stay updated!</h1>
                    <p class="text-Dark-Slate-Grey my-7">
                        Join 60,000+ product managers receiving monthly updates on.
                    </p>
                    <ul class="flex flex-col gap-4 text-Dark-Slate-Grey">
                        <li class="flex items-center gap-3">
                            <img src="assets/images/icon-list.svg" alt="">
                            <span>Product discovery and building what matters</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <img src="assets/images/icon-list.svg" alt="">
                            <span>Measuring to ensure updates are a success</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <img src="assets/images/icon-list.svg" alt="">
                            <span>And much more!</span>
                        </li>
                    </ul>
                    <form class="mt-10">
                        <label class="w-full">
                            <div class="flex items-center justify-between font-bold mb-1">
                                <span class="text-Dark-Slate-Grey text-xs block">
                                    Email address
                                </span>
                                <span class="error text-rose-500 text-xs block">
                                    {{ errors.email }}
                                </span>
                            </div>
                            <input type="text" v-model="email" :class="errors.email ? 'border-rose-500 bg-rose-100 focus:border-rose-500 text-rose-500' :''"
                                class="w-full border p-3 px-5 rounded-lg outline-none focus:border-Dark-Slate-Grey transition ease-in-out"
                                placeholder="email@company.com">
                            <button @click.prevent="sendNewsLetter"
                                class="main-btn mt-4 w-full">
                                Subscribe to monthly newsletter
                            </button>
                        </label>
                    </form>
                </div>
                <div class="right-side md:w-1/2 w-full">
                    <picture>
                        <source media="(min-width: 768px)" srcset="/images/illustration-sign-up-desktop.svg" type="image/svg+xml">
                        <source media="(max-width: 767px)" class="w-full" srcset="/images/illustration-sign-up-mobile.svg" type="image/svg+xml">
                        <img src="assets/images/illustration-sign-up-desktop.svg" class="h-full w-full ms-auto" alt="">
                    </picture>
                </div>
            </div>
            <SubscribeSuccess :confirmed="confirmed" :email="values.email" @dismiss="dismiss"></SubscribeSuccess>
        </div>
    </div>
</template>

<script setup>
import * as yup from 'yup';
import { useForm } from 'vee-validate';

const confirmed = ref(false)
const { values, defineField, errors, handleSubmit, resetForm } = useForm({
    validationSchema: yup.object({
        email: yup.string().required('Valid email required').email('Invalid email address'),
    })
});

const [email] = defineField('email');

const sendNewsLetter = handleSubmit(values => {
    confirmed.value = true
})

const dismiss = () => {
    confirmed.value = false
    resetForm()
}

</script>

<style lang="scss" scoped></style>