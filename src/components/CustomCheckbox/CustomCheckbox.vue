<template>
  <div class="custom-checkbox">
    <input
      v-model="model"
      :id="`checkbox-input-${value}`"
      :value="value"
      type="checkbox"
      class="custom-checkbox__input"
    />
    <label :for="`checkbox-input-${value}`" class="custom-checkbox__label"
      ><slot
    /></label>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "CustomCheckbox",
  inheritAttrs: false,
  emits: ["update:modelValue"],
  props: {
    modelValue: { type: [Array, Boolean] },
    value: { type: [Boolean, String] },
  },
  setup(props, { emit }) {
    const model = computed({
      get(): any {
        return props.modelValue;
      },
      set(value: string[] | boolean) {
        emit("update:modelValue", value);
      },
    });

    return {
      model,
    };
  },
});
</script>

<style lang="scss" scoped>
.custom-checkbox {
  &__input {
    opacity: 0;
    z-index: -1;
    position: absolute;
  }

  &__label {
    display: inline-flex;
    align-items: center;
    font-size: rem(12);
    user-select: none;
    cursor: pointer;

    &::before {
      content: "";
      display: inline-block;
      width: 12px;
      height: 12px;
      border: 2px solid $gray-color;
      border-radius: 2px;
      margin-right: 12px;
    }
  }

  &__input:checked + label::before {
    border-color: $primary-color;
    background-color: $primary-color;
    background-image: url("../../assets/images/check.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
