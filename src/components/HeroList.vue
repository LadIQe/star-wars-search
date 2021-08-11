<template>
  <div class="q-mt-lg">
    <div
      v-show="!heros.length"
      class=" text-center"
    >
      <span
        v-show="!name"
        class="text-subtitle1"
      >
        {{ t('emptyName') }}
      </span>

      <img
        v-show="name && !isSearching"
        src="../assets/nothing-found.png"
      >
    </div>

    <div
      v-for="(hero, i) in heros"
      :key="i"
      class="hero"
    >
      <span v-html="hero" />
    </div>
  </div>
</template>

<script lang="ts">
import { fetchHeroes } from 'src/store/services'
import { defineComponent, toRef, ref, watch } from 'vue'
import { Notify } from 'quasar'
import { capitalize } from 'src/utils/StringUtils'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  props: {
    name: {
      type: String,
      default: ''
    }
  },

  emits: ['searching'],

  setup (props, { emit }) {
    const { t } = useI18n()
    const name = toRef(props, 'name')
    const isSearching = ref(false)
    const heros = ref<string[]>([])

    const setSearching = (value: boolean) => {
      isSearching.value = value

      emit('searching', value)
    }

    const fetchNewHeroes = async (name: string) => {
      setSearching(true)

      try {
        const response = await fetchHeroes(name)

        heros.value = response.data.results.map((item) => {
          const index = item.name.toLowerCase().indexOf(name)

          if (index === 0) {
            const capitalizedName = capitalize(name)

            return item.name.replaceAll(capitalizedName, `<b>${capitalizedName}</b>`)
          }

          return item.name.replaceAll(name, `<b>${name}</b>`)
        })
      } catch {
        Notify.create({ message: t('somethingWrong'), type: 'negative' })
      }

      setSearching(false)
    }

    watch(name, (value) => {
      if (value.length) {
        fetchNewHeroes(value)
      } else {
        heros.value = []
      }
    })

    return {
      t,
      heros,
      isSearching
    }
  }
})
</script>

<style lang="scss" scoped>
.hero {
  padding: 25px;
  margin-bottom: 10px;
  background: $hero-background-color;
  color: white;
  border-radius: 5px;
  font-size: 20px;
}
</style>
