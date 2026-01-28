<template>
  <div>
    <div class="add">
      <!-- <h2 :style="[themeStyles, counterTitleColor]">
        {{ title }}
      </h2> -->
      <div>Заказ: {{ count }} шт.</div>
      <!-- <div>Double count {{ doubleCount }}</div> -->
       <div class="buttons">
         <button class="btn" :style="buttonsTheme" @click="decrement">-</button>
         <button class="btn" :style="buttonsTheme" @click="increment">+</button>
         <button class="btn-delete" :style="buttonsTheme" @click="reset">x</button>
       </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type CSSProperties, type PropType } from 'vue';

export default defineComponent({
  name: 'ClickCounter',
  data() {
    return {
      count: 0,
    };
  },
  props: {
    title: {
      type: String,
      default: 'Default counter title',
    },
    themeStyles: {
      type: Object as PropType<CSSProperties>,
      default: () => ({}),
    },
    buttonsTheme: {
      type: Object as PropType<CSSProperties>,
      default: () => ({}),
    },
  },
  emits: ['decrement'],
  computed: {
    doubleCount() {
      return this.count * 2;
    },
    counterTitleColor() {
      const styles = { ...this.themeStyles };
      if (this.count > 5) {
        styles.color = 'red';
      }
      return styles;
    },
  },
  methods: {
    showDecrement() {
      console.log('decrement');
    },
    increment() {
      this.count++;
    },

    decrement() {
      // this.showDecrement()
      this.count--;
      this.$emit('decrement', this.count);
      console.log('decrement from CC');
    },
    reset() {
      this.count = 0;
    },
  },
  watch: {
    count: {
      handler(newValue, oldValue) {
        console.log('newValue', newValue);
        console.log('oldValue', oldValue);
        // if (newValue === 0) alert('Значение равно 0!')
      },
      immediate: true,
      deep: true,
    },
  },
});
</script>

<style scoped>
.add {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-right: 10px;
  column-gap: 10px;
}
button {
  /* margin-right: 5px; */
  /* padding: 5px; */
  width: 25px;
  height: 25px;
  border: 1px solid rgba(4, 119, 13);
  border-radius: 9px;
  cursor: pointer;
}
button:hover {
  color: darkslategray;
  border: 2px solid darkslategray;
  font-weight: 700;
}
.btn {
  background-color: rgb(84, 207, 255);
}
.btn-delete {
  margin-left: 5px;
  background-color: rgba(165, 42, 42, 0.9);
}
</style>
