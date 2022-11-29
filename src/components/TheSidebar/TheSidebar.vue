<template>
  <div class="sidebar">
    <filter-card title="Опции тарифа" @reset="onResetTariffs">
      <template v-for="option in tariffOptions" :key="option.id">
        <custom-checkbox v-model="tariffs" :value="option.value">{{
          option.title
        }}</custom-checkbox>
      </template>
    </filter-card>

    <filter-card title="Авиакомпании" @reset="onResetAirlines">
      <template v-for="option in airlineComputed" :key="option.id">
        <custom-checkbox v-model="airlines" :value="option.short">{{
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
import { defineComponent, ref, onMounted, computed, watch } from "vue";
import { fetchAirlines } from "@/api/repositories";
import { Airline } from "@/entities/Airline";
import { useFilter } from "@/composables/filter";
import FilterCard from "@/components/FilterCard/FilterCard.vue";
import CustomCheckbox from "@/components/CustomCheckbox/CustomCheckbox.vue";
import CustomButton from "@/components/CustomButton/CustomButton.vue";

export default defineComponent({
  name: "TheSidebar",
  components: {
    CustomButton,
    "custom-checkbox": CustomCheckbox,
    "filter-card": FilterCard,
  },
  emits: ["change"],
  setup(props, { emit }) {
    const { tariffs, airlines, onResetTariffs, onResetAirlines } = useFilter();

    const tariffOptions = [
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
    const airlineOptions = ref<Airline[]>([]);

    const airlineComputed = computed(() => [
      {
        id: 0,
        short: "ALL",
        title: "Все",
      },
      ...airlineOptions.value,
    ]);

    watch(
      () => [tariffs.value, airlines.value],
      () => {
        emit("change");
      }
    );

    onMounted(() => {
      getAirlines();
    });

    async function getAirlines() {
      airlineOptions.value = await fetchAirlines();
    }

    function onFilterReset() {
      onResetTariffs();
      onResetAirlines();
    }

    return {
      tariffs,
      tariffOptions,
      airlineOptions,
      airlines,
      airlineComputed,
      onResetTariffs,
      onResetAirlines,
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
