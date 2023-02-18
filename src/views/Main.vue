<script setup lang='ts'>
import Logo from '@/assets/svg/scibeam-logo.svg?component'
</script>

<template>
<v-app>
  <v-container
    class='d-flex flex-column align-center justify-center flex-grow-1'>
    <Logo
      class='d-flex logo'/>
    <div
      class='text-h1 font-weight-bold text-primary pt-2'>
      Scibeam
    </div>
    <div
      class='text-h6'>
      Vue3 Catalyst 1.0.0
    </div>
  </v-container>
</v-app>
</template>

<style lang='sass'>
@keyframes fade_in
  0%
    opacity: 0
  100%
    opacity: 1

@keyframes slide_up
  0%
    padding-top: 4em
  100%
    padding-top: 0em
svg
  .inner, .middle, .outer
    transform-origin: 50% 50%

  @keyframes rotate_inner
    0%
      transform: rotate(90deg)
    100%
      transform: rotate(450deg)
  .inner
    transform: rotate(90deg)
    animation: rotate_inner 8s linear infinite, fade_in 1s linear

  @keyframes rotate_middle
    0%
      transform: rotate(0deg)
    100%
      transform: rotate(-360deg)
  .middle
    animation: rotate_middle 16s linear infinite, fade_in 2s linear

  @keyframes rotate_outer
    0%
      transform: rotate(90deg)
    100%
      transform: rotate(450deg)

  .outer
    transform: rotate(90deg)
    animation: rotate_outer 32s linear infinite, fade_in 4s linear
.logo
  max-width: 200px
</style>
