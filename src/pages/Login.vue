<script setup>
import { ArrowRightStartOnRectangleIcon, EnvelopeIcon, LockClosedIcon, UserCircleIcon } from '@heroicons/vue/24/outline';
import { ShieldCheckIcon, XCircleIcon } from '@heroicons/vue/24/solid';
</script>

<template>
  <div class="bg-[url('./images/img.jpg')] bg-center bg-cover h-screen">
    <header class="flex items-center justify-between container mx-auto p-4">
      <div class="flex items-center gap-2">
        <ShieldCheckIcon class="h-10 w-10 text-[#33a5ea]" />
        <span class="font-black">Security</span>
      </div>
      <a href="#" class="border py-2 px-4 rounded-md bg-[#33a5ea] text-white hover:bg-[#50aeee]">Sign In</a>
    </header>
    <main class="flex flex-col gap-2 items-center container mx-auto mt-16">
      <section class="flex flex-col gap-4 items-center py-2">
        <ArrowRightStartOnRectangleIcon class="size-12 text-[#33a5ea]" />
        <h1 class="font-bold text-3xl">Welcome back!</h1>
      </section>
      <div class="flex flex-col gap-2 bg-gradient-to-b from-white to-orange-50 rounded-md shadow-2xl w-[400px] py-4">
        <section class="flex flex-col gap-2 px-8 py-2">
          <div class="flex items-center justify-center gap-2 border-2 border-red-400 bg-red-100 py-3 px-2 rounded-md">
            <XCircleIcon class="size-4 text-red-400" />
            <p class="text-red-800 text-[14px]">These creditians do not match our records.</p>
          </div>
        </section>
        <section class="flex flex-col gap-2 w-full px-8 py-2">
          <label for="email">Email</label>
          <div class="group w-full flex items-center gap-1 border-2 p-1 border-gray-300 rounded-md focus-within:border-[#33a5ea]">
            <div class="p-1">
              <EnvelopeIcon class="size-6 text-gray-400 group-focus-within:text-[#33a5ea]" />
            </div>
            <input type="email" id="email" class="w-full focus:outline-0" placeholder="john@example.com" />
          </div>
        </section>
        <section class="flex flex-col gap-2 w-full px-8 py-2">
          <label for="password">Password</label>
          <div class="group w-full flex items-center gap-1 border-2 p-1 border-gray-300 rounded-md focus-within:border-[#33a5ea]">
            <div class="p-1">
              <LockClosedIcon class="size-6 text-gray-400 group-focus-within:text-[#33a5ea]" />
            </div>
            <input type="password" id="password" class="w-full focus:outline-0" placeholder="Minimum 8 cheracters" />
          </div>
        </section>
        <section class="flex flex-col items-center gap-4 w-full px-8 py-2">
          <div class="flex justify-between w-full">
            <div class="space-x-2"><input id="checkbox" type="checkbox" /> <label for="checkbox">Remember me</label></div>
            <p class="text-[#33a5ea] hover:text-[#50aeee]">Forgot your password?</p>
          </div>
          <a href="#" class="w-full border-2 border-[#33a5ea] px-4 py-2 my-2 rounded-md bg-[#33a5ea] text-center text-white hover:bg-[#50aeee]"
            >Sign In</a
          >
        </section>
      </div>
    </main>
  </div>
</template>
