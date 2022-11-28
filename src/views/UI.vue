<template>
  <div class="ui">
    <custom-button>Save</custom-button>
    <custom-button :loading="true">Save</custom-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CustomButton from "@/components/common/CustomButton/CustomButton.vue";

export default defineComponent({
  components: { "custom-button": CustomButton },
});
</script>
