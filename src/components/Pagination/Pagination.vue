<template>
  <div v-if="lastPage > 1" class="pagination">
    <button
      v-for="(_, index) in Array(lastPage)"
      :key="index"
      :class="{ 'pagination__button--active': index + 1 === page }"
      class="pagination__button"
      @click="onPageChange(index + 1)"
    >
      {{ index + 1 }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pagination",
  emits: ["change"],
  props: {
    page: {
      type: Number,
      default: 1,
    },
    lastPage: {
      type: Number,
      default: 1,
    },
  },
  setup(props, { emit }) {
    function onPageChange(page: number) {
      emit("change", page);
    }

    return {
      onPageChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    padding: 0;
    background-color: white;
    border: 1px solid transparent;
    border-radius: 2px;
    cursor: pointer;

    &--active {
      border: 1px solid $secondary-color;
    }
  }
}
</style>
