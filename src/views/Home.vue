<template>
  <div class="home">
    <the-sidebar />
    <div class="content">list</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheSidebar from "@/components/TheSidebar/TheSidebar.vue";

export default defineComponent({
  name: "Home",
  components: { "the-sidebar": TheSidebar },
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
