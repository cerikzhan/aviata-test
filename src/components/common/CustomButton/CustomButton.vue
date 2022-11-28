<template>
  <button
    v-bind="$attrs"
    :class="[`custom-button--${variant}`, `custom-button--${size}`]"
    class="custom-button"
  >
    <div v-if="loading" class="custom-button__loader" />
    <slot v-else />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type ButtonVariant = "primary" | "secondary" | "link";
type ButtonSize = "md" | "sm";

export default defineComponent({
  name: "CustomButton.vue",
  props: {
    variant: {
      type: String as PropType<ButtonVariant>,
      default: "primary",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: "md",
    },
  },
});
</script>

<style lang="scss" scoped>
.custom-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  font-size: rem(18);
  line-height: rem(24);
  cursor: pointer;
  transition: opacity 0.3s ease;

  &--primary {
    width: 200px;
    padding: 7px 14px;
    background-color: $primary-color;
    color: white;
    font-weight: 700;
  }

  &--secondary {
    padding: 3px 8px;
    background-color: #eaf0fa;
    color: #5763b3;
    font-weight: 600;
  }

  &--link {
    padding: 0;
    background-color: transparent;
    border-bottom: 1px dashed $secondary-color;
    border-radius: 0;
    color: $secondary-color;
    line-height: rem(18);
  }

  &--sm {
    font-size: rem(12);
  }

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
      margin: 2px;
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
