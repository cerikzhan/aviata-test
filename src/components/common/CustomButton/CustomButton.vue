<template>
  <button class="custom-button">
    <div v-if="loading" class="custom-button__loader" />
    <slot v-else />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomButton.vue",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.custom-button {
  position: relative;
  width: 200px;
  padding: 7px 14px;
  background-color: #55bb06;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &__loader {
    display: inline-block;

    &:after {
      content: " ";
      display: block;
      width: 18px;
      height: 18px;
      margin: 8px;
      border-radius: 50%;
      border-width: 3px;
      border-style: solid;
      border-color: white transparent white transparent;
      animation: common-button-loader 1.2s linear infinite;
    }
  }
}

@keyframes common-button-loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
