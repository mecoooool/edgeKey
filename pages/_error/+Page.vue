<template>
  <div class="min-h-screen flex items-center justify-center bg-base-200 px-4">
    <div class="text-center space-y-4">
      <div class="text-8xl font-black text-base-content/10">{{ is404 ? '404' : '500' }}</div>
      <h1 class="text-2xl font-bold text-base-content">{{ heading }}</h1>
      <p class="text-base-content/60">{{ message }}</p>
      <AppButton href="/" variant="primary">Back to Home</AppButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePageContext } from "vike-vue/usePageContext";
import AppButton from "../../components/AppButton.vue";

const pageContext = usePageContext();
const { is404, abortReason } = pageContext;
const heading = is404 ? "Page Not Found" : "Server Error";
const message = abortReason ?? (is404 ? "The page you requested does not exist or has been removed." : "Something went wrong on the server. Please try again later.");
</script>
