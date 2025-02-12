<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- Main circle -->
    <circle cx="12" cy="12" r="4" />
    <!-- Rays -->
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M4.93 4.93l1.41 1.41" />
    <path d="M17.66 17.66l1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M6.34 17.66l-1.41 1.41" />
    <path d="M19.07 4.93l-1.41 1.41" />
    <!-- Inner details -->
    <path d="M12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" fill="currentColor" />
  </svg>
</template>

<script setup>
defineOptions({ name: 'SunIcon' })
</script> 