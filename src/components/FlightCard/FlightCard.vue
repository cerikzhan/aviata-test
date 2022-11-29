<template>
  <div class="card">
    <div class="card__body">
      <div class="card__info">
        <div class="card__airline">
          <div class="card__image">
            <img
              :src="`https://aviata.kz/static/airline-logos/80x80/${flight.carrier.short}.png`"
              alt="air astana"
            />
          </div>
          <h3 class="card__title">{{ flight.carrier.name }}</h3>
        </div>
        <p class="card__baggage-text">Нет багажа</p>
        <date-time />
        <route-info class="card__route" :flight="flight" />
        <date-time />
      </div>
      <div class="card__actions">
        <custom-button variant="link" size="sm">Детали перелета </custom-button>
        <custom-button variant="link" size="sm">Условия тарифа </custom-button>
        <p v-if="!flight.refundable" class="card__refund">
          <img src="../../assets/icons/return.svg" alt="невозвратный" />
          <span>невозвратный</span>
        </p>
      </div>
    </div>
    <div class="card__footer">
      <p class="card__price">{{ flight.price }} ₸</p>
      <custom-button>Выбрать</custom-button>
      <p class="card__passengers">Цена за всех пассажиров</p>
      <div class="card__baggage">
        <p>{{ flight.baggage ? "20 КГ" : "Нет багажа" }}</p>
        <custom-button variant="secondary" size="sm"
          >+ Добавить багаж</custom-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Flight } from "@/entities/Flight";
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
  props: {
    flight: {
      type: Object as PropType<Flight>,
      required: true,
    },
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
      padding: 40px 20px;
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

  &__baggage-text {
    display: none;
    font-size: rem(12);

    @include phone {
      display: block;
    }
  }

  &__info {
    display: grid;
    grid-template-columns: 2fr 1fr 170px 1fr;
    grid-gap: 10px;
    justify-items: center;
    align-items: center;

    @include phone {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 25px;
    }
  }

  &__route {
    @include phone {
      grid-row: 3;
      grid-column: 1 / 3;
      width: 100%;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 40px;

    @include phone {
      display: none;
    }
  }

  &__refund {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: $text-color-muted;
    font-size: rem(12);
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

    @include phone {
      flex-direction: column;
      justify-content: center;
    }
  }

  &__price {
    margin-bottom: 12px;
    font-size: rem(24);
    font-weight: 600;

    @include laptop {
      margin-bottom: 0;
    }

    @include phone {
      margin-bottom: 12px;
    }
  }

  &__passengers {
    margin-top: 8px;
    font-size: rem(12);
    color: $text-color-muted;

    @include laptop {
      margin-top: 0;
    }

    @include phone {
      margin-top: 8px;
    }
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
