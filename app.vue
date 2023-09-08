<template>
  <NuxtErrorBoundary>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <template #error>
      <div class="error-container">
        <h1>Oops...</h1>
        <p>Something went wrong</p>
      </div>
    </template>
  </NuxtErrorBoundary>
</template>
<style>
body {
  margin: 0;
  background: black;
  color: white;
}

.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
