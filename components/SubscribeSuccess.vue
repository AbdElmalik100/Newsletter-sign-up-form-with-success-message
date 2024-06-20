<template>
    <div class="subscribe-success duration-300 transition ease-in-out p-8 md:rounded-3xl md:h-auto h-full bg-White shadow-xl shadow-gray-900 flex-col md:justify-between gap-9 lg:w-1/3 md:w-1/2"
        :class="confirmed ? 'flex relative' : 'invisible scale-0 absolute'">
        <img src="assets/images/icon-success.svg" class="w-14" alt="">
        <h1 class="text-5xl text-Dark-Slate-Grey font-bold">
            Thanks for subscribing!
        </h1>
        <p class="text-Dark-Slate-Grey">
            A confirmation email has been sent to 
            <span class="font-bold">
                {{ email }} 
            </span>, Please open it and click the button inside to confirm your subscription.
        </p>
        <button class="main-btn w-full md:mt-0 mt-auto" @click="$emit('dismiss')">
            Dismiss message
        </button>
    </div>
</template>

<script setup>

defineProps(['email', 'confirmed'])

</script>

<style lang="scss" scoped></style>