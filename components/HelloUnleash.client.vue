<script setup lang="ts">
import { useFlag, useFlagsStatus, useVariant } from '@unleash/proxy-client-vue'

const enabled = useFlag('test-feature')
const variant = useVariant('test-feature')
const { flagsReady } = useFlagsStatus()
</script>

<template>
  <div class="hello-unleash">
    <h1>proxy-client-vue-nuxt3</h1>

    <div v-if="!flagsReady">Loading...</div>
    <div
      v-else
      :style="`font-size:24px; color: ${enabled ? '#00bd6e' : '#f94345'}`"
    >
      {{ enabled ? 'Feature is enabled!' : 'Feature is disabled!' }}
      <div v-if="variant?.enabled">
        {{ variant.name }}
      </div>
    </div>

    <p style="max-width: 400px; margin: auto; padding: 20px">
      Check out <a href="https://www.getunleash.io/">Unleash</a> - An
      open-source Feature Management Service that allows you to manage your
      feature roll-out like a pro.
    </p>

    <p>See <code>README.md</code> for more information.</p>

    <p>
      <a
        href="https://nuxt.com/docs/getting-started/introduction"
        target="_blank"
      >
        Nuxt Docs
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>
  </div>
</template>

<style>
html,
body,
.hello-unleash {
  height: 100%;
  background-color: #0c0c0d;
  color: #e4e4e7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Inter', sans-serif;
}

a {
  color: #00bd6e;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
