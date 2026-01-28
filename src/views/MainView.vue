<template>
  <MainLayout
    @toggleTheme="toggleTheme"
    :switchThemeHeaderFooter="switchThemeHeaderFooter"
    :switchThemeMain="switchThemeMain"
    :buttonsTheme="buttonsTheme"
  >
    <MainContent
        class="border"
        title="Летательные аппараты"
        :theme-styles="switchTheme"
        :buttonsTheme="buttonsTheme"
      />
      <SidebarNav
        :theme-styles="switchTheme"
        class="border"
      />
  </MainLayout>
</template>

<script lang="ts">
import MainContent from '@/components/MainContent.vue'
import MainLayout from '@/components/layouts/MainLayout.vue'
import SidebarNav from '@/components/SidebarNav.vue'
import { defineComponent, type CSSProperties } from 'vue'

export default defineComponent({
  name: 'MainView',
  components: { SidebarNav, MainContent, MainLayout},
  data() {
    return {
      isDarkTheme: false,
    }
  },
  computed: {
    switchTheme(): CSSProperties {
      return {
          'background-color': this.isDarkTheme ? '#36373a' : 'white',
          color: this.isDarkTheme ? 'darkgray' : 'black',
        }
    },
    switchThemeMain(): CSSProperties {
      return {
          'background-color': this.isDarkTheme ? 'darkgray' : undefined,
        }
    },
    switchThemeHeaderFooter(): CSSProperties {
      return {
          'background-color': this.isDarkTheme ? '#36373a' : 'rgba(13, 140, 190, 0.5)',
          color: this.isDarkTheme ? 'darkgray' : 'black',
        }
    },
    buttonsTheme(): CSSProperties {
      return {
          'background-color': this.isDarkTheme ? 'gray' : undefined,
        }
    }
  },
  methods: {
    toggleTheme(event: boolean) {
      this.isDarkTheme = event
      console.log(event)
    },
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
.border {
  border: 3px solid gray;
}
</style>
