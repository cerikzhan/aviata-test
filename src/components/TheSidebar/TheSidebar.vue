<template>
  <div class="sidebar">
    <filter-card title="Опции тарифа">
      <template v-for="option in tariffOptions" :key="option.id">
        <custom-checkbox v-model="tariffs" :value="option.value">{{
          option.title
        }}</custom-checkbox>
      </template>
    </filter-card>
    <filter-card title="Авиакомпании">
      <template v-for="option in airlineComputed" :key="option.id">
        <custom-checkbox v-model="airlines" :value="option.value">{{
          option.title
        }}</custom-checkbox>
      </template>
    </filter-card>
    <div>
      <custom-button variant="link" size="sm" @click="onFilterReset"
        >Сбросить все фильтры</custom-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import { fetchAirlines } from "@/api/repositories";
import FilterCard from "@/components/FilterCard/FilterCard.vue";
import CustomCheckbox from "@/components/CustomCheckbox/CustomCheckbox.vue";
import CustomButton from "@/components/CustomButton/CustomButton.vue";

interface FilterOption {
  id: number;
  value: string;
  title: string;
}

export default defineComponent({
  name: "TheSidebar",
  components: {
    CustomButton,
    "custom-checkbox": CustomCheckbox,
    "filter-card": FilterCard,
  },
  setup() {
    const tariffs = ref<string[]>([]);
    const tariffOptions: FilterOption[] = [
      {
        id: 1,
        value: "ST",
        title: "Только прямые",
      },
      {
        id: 2,
        value: "BG",
        title: "Только с багажом",
      },
      {
        id: 3,
        value: "RF",
        title: "Только возвратные",
      },
    ];
    const airlines = ref<string[]>([]);
    const airlineOptions = ref<FilterOption[]>([]);

    const airlineComputed = computed(() => [
      {
        id: 0,
        value: "ALL",
        title: "Все",
      },
      ...airlineOptions.value,
    ]);

    onMounted(() => {
      getAirlines();
    });

    async function getAirlines() {
      const res = await fetchAirlines();
      airlineOptions.value = Object.entries(res).map((airline, index) => ({
        id: index + 1,
        value: airline[0],
        title: airline[1],
      }));
    }

    function onFilterReset() {
      tariffs.value = [];
      airlines.value = [];
    }

    return {
      tariffs,
      tariffOptions,
      airlineOptions,
      airlines,
      airlineComputed,
      onFilterReset,
    };
  },
});
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
