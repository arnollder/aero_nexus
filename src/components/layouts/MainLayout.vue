<template>
  <div class="root"
    :style="switchThemeMain"
  >
    <HeaderV 
        @toggleTheme="toggleTheme"
        title="Гражданский Эшелон" 
        :style="switchThemeHeaderFooter"
        :buttonsTheme="buttonsTheme"
    />
    <div class="container">
        <slot />
    </div>
    <FooterV 
        title="Footer"
        :style="switchThemeHeaderFooter"      
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, type CSSProperties, type PropType } from 'vue'
import FooterV from '@/components/FooterV.vue'
import HeaderV from '@/components/HeaderV.vue'

export default defineComponent({
  name: 'MainLayout',
  data() {
    return {
      isDark: false,
    }
  },
  components: { HeaderV, FooterV },
  props: {
    switchThemeHeaderFooter: {
        type: Object as PropType<CSSProperties>,
        default: () => ({}),
    },
    switchThemeMain: {
        type: Object as PropType<CSSProperties>,
        default: () => ({}),
    },
    buttonsTheme: {
        type: Object as PropType<CSSProperties>,
        default: () => ({}),
    }
  },
  emits: ['toggleTheme'],
  methods: {
    toggleTheme(event: boolean) {
      this.isDark = event
      //this.isDark = !this.isDark
      this.$emit('toggleTheme', this.isDark)
      console.log('MainLayout')
    }
  },  
})
</script>

<style scoped>
.root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.container {
  display: flex;
  column-gap: 10px;
  flex-grow: 1;
  padding: 10px;
}
</style>
