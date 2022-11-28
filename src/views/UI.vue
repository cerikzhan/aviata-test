<template>
  <div class="ui">
    <div class="ui__buttons">
      <custom-button>Save</custom-button>
      <custom-button :loading="true">Save</custom-button>
      <custom-button variant="link">Save</custom-button>
      <custom-button variant="secondary">+&nbsp;Add</custom-button>
      <custom-button variant="secondary" size="sm">+&nbsp;Add</custom-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CustomButton from "@/components/common/CustomButton/CustomButton.vue";

export default defineComponent({
  components: { "custom-button": CustomButton },
});
</script>

<style lang="scss" scoped>
.ui {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  &__buttons {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
