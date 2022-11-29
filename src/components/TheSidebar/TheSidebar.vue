<template>
  <div class="sidebar">
    <filter-card title="Опции тарифа">
      <template v-for="option in options" :key="option.id">
        <custom-checkbox
          v-model="checks"
          :value="option.value"
          :num="option.id"
          >{{ option.title }}</custom-checkbox
        >
      </template>
    </filter-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FilterCard from "@/components/FilterCard/FilterCard.vue";
import CustomCheckbox from "@/components/CustomCheckbox/CustomCheckbox.vue";

export default defineComponent({
  name: "TheSidebar",
  components: {
    "custom-checkbox": CustomCheckbox,
    "filter-card": FilterCard,
  },
  setup() {
    return {
      checks: [],
      options: [
        {
          id: 1,
          value: "straight",
          title: "Только прямые",
        },
        {
          id: 2,
          value: "weight",
          title: "Только с багажом",
        },
        {
          id: 3,
          value: "returnable",
          title: "Только возвратные",
        },
      ],
    };
  },
});
</script>

<style scoped></style>
