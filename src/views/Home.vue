<template>
  <div class="home">
    <the-sidebar />
    <div class="content">
      <flight-card />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheSidebar from "@/components/TheSidebar/TheSidebar.vue";
import FlightCard from "@/components/FlightCard/FlightCard.vue";

export default defineComponent({
  name: "Home",
  components: { "flight-card": FlightCard, "the-sidebar": TheSidebar },
});
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-column-gap: 20px;
  margin: 50px 0;
}
</style>
