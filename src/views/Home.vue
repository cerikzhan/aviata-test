<template>
  <div class="home">
    <the-sidebar @change="getFlights" />
    <div class="home__content">
      <p v-if="!flights.length" class="home__empty">
        Нет рейсов подходящих по вашему запросу
      </p>
      <flight-card
        v-for="flight in flights"
        :key="flight.id"
        :flight="flight"
      />
      <pagination
        :page="pagination.page"
        :last-page="pagination.lastPage"
        @change="onPageChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive } from "vue";
import { fetchFlights, FlightParams } from "@/api/repositories";
import { Flight } from "@/entities/Flight";
import { useFilter } from "@/composables/filter";
import TheSidebar from "@/components/TheSidebar/TheSidebar.vue";
import FlightCard from "@/components/FlightCard/FlightCard.vue";
import Pagination from "@/components/Pagination/Pagination.vue";

interface FlightFilters {
  tariffs: string[] | null;
  airlines: string[] | null;
}

export default defineComponent({
  name: "Home",
  components: {
    pagination: Pagination,
    "flight-card": FlightCard,
    "the-sidebar": TheSidebar,
  },
  setup() {
    const pagination = reactive({
      page: 1,
      perPage: 10,
      total: 0,
      lastPage: 0,
    });
    const flights = ref<Flight[]>([]);

    const { tariffs, airlines } = useFilter();

    onMounted(() => {
      getFlights();
    });

    async function getFlights() {
      const params: FlightParams = {
        page: pagination.page,
        perPage: pagination.perPage,
        tariffs: tariffs.value.length ? tariffs.value : null,
        airlines: airlines.value.length ? airlines.value : null,
      };

      const response = await fetchFlights(params);

      flights.value = response.data;
      pagination.page = response.meta.page;
      pagination.total = response.meta.total;
      pagination.lastPage = response.meta.lastPage;
    }

    function onPageChange(page: number) {
      pagination.page = page;
      getFlights();
    }

    return {
      pagination,
      flights,
      getFlights,
      onPageChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-column-gap: 20px;
  margin: 50px 0;

  @include tablet {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__empty {
    text-align: center;
    color: $text-color-muted;
  }
}
</style>
