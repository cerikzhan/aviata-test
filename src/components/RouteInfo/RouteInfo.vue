<template>
  <div class="route">
    <div class="route__top">
      <p class="route__airport">ALA</p>
      <div class="route__range">4 ч 20 м</div>
      <p class="route__airport">TSE</p>
    </div>
    <div class="route__divider divider">
      <span class="divider__dot divider__dot--left"></span>
      <span class="divider__dot divider__dot--middle"></span>
      <span class="divider__dot divider__dot--right"></span>
    </div>
    <p class="route__bottom">через Шымкент, 1 ч 50 м</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RouteInfo",
});
</script>

<style lang="scss" scoped>
.route {
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2px;
    font-size: rem(12);
  }

  &__airport {
    color: $gray-color;
  }

  &__bottom {
    margin-top: 2px;
    font-size: rem(12);
    color: $warn-color;
    text-align: center;
  }
}

.divider {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background-color: $gray-color;
  }

  &__dot {
    width: 5px;
    height: 5px;
    background-color: white;
    border-radius: 50%;
    border: 1px solid $gray-color;
    z-index: 1;
  }
}
</style>
