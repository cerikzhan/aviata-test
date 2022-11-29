<template>
  <div class="datetime">
    <time class="datetime__date"
      >25 ноя, вс <span class="datetime__red">+1</span></time
    >
    <time class="datetime__time">23:25</time>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DateTime",
});
</script>

<style lang="scss" scoped>
.datetime {
  display: flex;
  flex-direction: column;

  &__date {
    font-size: rem(12);
  }

  &__red {
    font-size: rem(10);
    color: $danger-color;
  }

  &__time {
    font-size: rem(24);
    font-weight: 600;
  }
}
</style>
