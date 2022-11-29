import { ref } from "vue";

const tariffs = ref<string[]>([]);
const airlines = ref<string[]>(["ALL"]);

function onResetTariffs() {
  tariffs.value = [];
}

function onResetAirlines() {
  airlines.value = ["ALL"];
}

export function useFilter() {
  return {
    tariffs,
    airlines,
    onResetTariffs,
    onResetAirlines,
  };
}
