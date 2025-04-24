<script setup>
import { EnvelopeIcon } from '@heroicons/vue/24/outline';
import { ShieldCheckIcon } from '@heroicons/vue/24/solid';
import { ExclamationTriangleIcon } from '@heroicons/vue/24/solid';
</script>

<template>
  <div class="bg-[url('/images/img.jpg')] bg-center bg-cover h-screen">
    <header class="flex items-center justify-between container mx-auto p-4">
      <router-link :to="{ name: 'Register' }" class="flex items-center gap-2">
        <ShieldCheckIcon class="h-10 w-10 text-[#33a5ea]" />
        <span class="font-black">Security</span>
      </router-link>
      <div class="space-x-2">
        <router-link :to="{ name: 'Login' }" class="border py-2 px-4 rounded-md bg-[#aaaaaa] text-white hover:bg-[#50aeee]">Sign In</router-link>
        <router-link :to="{ name: 'Register' }" class="shadow-2xl border py-2 px-4 rounded-md bg-[#33a5ea] text-white hover:bg-[#50aeee]"
          >Sign Up</router-link
        >
      </div>
    </header>
    <main class="flex flex-col gap-2 items-center container mx-auto mt-10 text-sm">
      <section class="flex flex-col gap-4 items-center py-2">
        <EnvelopeIcon class="size-12 text-[#33a5ea]" />
        <h1 class="font-bold text-2xl">Verify Email</h1>
      </section>
      <div class="flex flex-col gap-2 bg-gradient-to-b from-white to-orange-50 rounded-md shadow-2xl w-[400px] py-4">
        <section class="flex flex-col gap-2 px-8 py-2">
          <div class="flex items-center justify-center gap-2 border-2 border-yellow-400 bg-yellow-50 py-3 px-2 rounded-md">
            <ExclamationTriangleIcon class="size-4 text-yellow-400" />
            <p class="text-yellow-800 text-[14px]">Please verify your email. We just emailed you verification link.</p>
          </div>
        </section>
        <section class="flex flex-col items-center gap-4 w-full px-8 py-2">
          <router-link
            :to="{ name: 'ConfirmPassword' }"
            class="w-full border-2 border-[#33a5ea] px-4 py-2 my-2 rounded-md bg-[#33a5ea] text-center text-white hover:bg-[#50aeee]"
            >Resend Verification Email</router-link
          >
        </section>
      </div>
    </main>
  </div>
</template>
