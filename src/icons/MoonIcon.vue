<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- Main crescent shape -->
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    <!-- Stars -->
    <circle cx="7" cy="8" r="0.5" fill="currentColor" />
    <circle cx="9" cy="14" r="0.5" fill="currentColor" />
    <circle cx="15" cy="9" r="0.5" fill="currentColor" />
    <!-- Subtle details -->
    <path d="M19 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" fill="currentColor" />
  </svg>
</template>

<script setup>
defineOptions({ name: 'MoonIcon' })
</script> 