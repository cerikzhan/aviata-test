<template>
  <div class="card">
    <div class="card__body">
      <div class="card__info">
        <div class="card__airline">
          <div class="card__image">
            <img
              :src="`https://aviata.kz/static/airline-logos/80x80/${`KC`}.png`"
              alt="air astana"
            />
          </div>
          <h3 class="card__title">Air Astana</h3>
        </div>
        <date-time />
        <route-info />
        <date-time />
      </div>
      <div class="card__actions">
        <custom-button variant="link" size="sm">Детали перелета </custom-button>
        <custom-button variant="link" size="sm">Условия тарифа </custom-button>
      </div>
    </div>
    <div class="card__footer">
      <p class="card__price">590 240 ₸</p>
      <custom-button>Выбрать</custom-button>
      <p class="card__passengers">Цена за всех пассажиров</p>
      <div class="card__baggage">
        <p>Нет багажа</p>
        <custom-button variant="secondary" size="sm"
          >+ Добавить багаж</custom-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import DateTime from "@/components/DateTime/DateTime.vue";
import RouteInfo from "@/components/RouteInfo/RouteInfo.vue";

export default defineComponent({
  name: "FlightCard",
  components: {
    "route-info": RouteInfo,
    "date-time": DateTime,
    "custom-button": CustomButton,
  },
});
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 4px;
  overflow: hidden;

  @include laptop {
    flex-direction: column;
    justify-content: flex-start;
  }

  &__body {
    flex: 1 1 auto;
    padding: 40px;

    @include laptop {
      width: 100%;
    }
  }

  &__airline {
    display: flex;
    align-items: center;
    gap: 7px;
  }

  &__image {
    width: 20px;
    height: 20px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 12px 20px;
    background-color: #f5f5f5;

    @include laptop {
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }
  }

  &__price {
    margin-bottom: 12px;
    font-size: rem(24);
    font-weight: 600;
  }

  &__passengers {
    margin-top: 8px;
    font-size: rem(12);
    color: $text-color-muted;
  }

  &__baggage {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
    gap: 6px;
    font-size: rem(12);

    @include laptop {
      display: none;
    }
  }
}
</style>
