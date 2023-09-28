<template>
  <main>
    <NuxtLayout>
      <div class="mt-[120px]">
        <h3 class="mb-7 text-7xl font-bold text-center">
          {{ error.statusCode }}
        </h3>
        <div
          id="alert-2"
          class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <svg
            class="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
            />
          </svg>
          <span class="sr-only">Error</span>
          <div class="ml-3 text-sm font-medium">
            <p>{{ error.message }}</p>
          </div>
        </div>
        <button
          class="w-full uppercase flex items-center justify-center min-h-[50px] px-5 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50 bg-gradient-to-r from-from_gradient to-to_gradient text-white mt-6"
          @click="handleError"
        >
          Go Back
        </button>
      </div>
    </NuxtLayout>
  </main>
</template>

<script lang="ts" setup>
defineProps(['error']);

const handleError = () => clearError({ redirect: '/' });
</script>
