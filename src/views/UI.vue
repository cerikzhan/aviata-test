<template>
  <div class="ui">
    <div class="ui__buttons">
      <custom-button @click="onClick">Save</custom-button>
      <custom-button :loading="true">Save</custom-button>
      <custom-button variant="link">Save</custom-button>
      <custom-button variant="secondary">+&nbsp;Add</custom-button>
      <custom-button variant="secondary" size="sm">+&nbsp;Add</custom-button>
    </div>

    <div class="ui__checkbox">
      <custom-checkbox v-model="checks" value="1"
        >Только прямые</custom-checkbox
      >
      <custom-checkbox v-model="checks" value="2"
        >Только с багажом</custom-checkbox
      >
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import CustomCheckbox from "@/components/CustomCheckbox/CustomCheckbox.vue";

export default defineComponent({
  components: {
    "custom-button": CustomButton,
    "custom-checkbox": CustomCheckbox,
  },
  data() {
    return {
      checks: [],
    };
  },
  methods: {
    onClick() {
      console.log("on click");
    },
  },
});
</script>

<style lang="scss" scoped>
.ui {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__buttons {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
