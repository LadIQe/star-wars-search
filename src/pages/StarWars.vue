<template>
  <div>
    <h1>{{ $t('title') }}</h1>

    <div>
      <q-input
        label="Name"
        v-model="name"
        :loading="isSearching"
        outlined
        debounce="500"
      >
        <template #append>
          <q-icon
            name="search"
            color="primary"
          />
        </template>
      </q-input>
    </div>

    <hero-list
      :name="name"
      @searching="setSearching"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HeroList from 'src/components/HeroList.vue'

export default defineComponent({
  components: { HeroList },

  setup () {
    const name = ref('')
    const isSearching = ref(false)

    const setSearching = (value: boolean) => {
      isSearching.value = value
    }

    return {
      name,
      isSearching,
      setSearching
    }
  }
})
</script>
