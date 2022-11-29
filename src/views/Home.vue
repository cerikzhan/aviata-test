<template>
  <div class="home">
    <the-sidebar />
    <div class="home__content">
      <flight-card
        v-for="flight in flights"
        :key="flight.id"
        :flight="flight"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { fetchFlights } from "@/api/repositories";
import { Flight } from "@/entities/Flight";
import TheSidebar from "@/components/TheSidebar/TheSidebar.vue";
import FlightCard from "@/components/FlightCard/FlightCard.vue";

export default defineComponent({
  name: "Home",
  components: { "flight-card": FlightCard, "the-sidebar": TheSidebar },
  setup() {
    const flights = ref<Flight[]>([]);

    onMounted(() => {
      getFlights();
    });

    async function getFlights() {
      flights.value = await fetchFlights();
    }

    return {
      flights,
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
}
</style>
