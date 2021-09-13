<template>
  <div>{{ t("hello") }} {{ t("sir") }}!</div>
  <div>
    <counter v-model:count="count" />
  </div>
  <div>
    <q-btn class="q-ma-md" color="primary" :label="t('home.settingsLink')" :to="{ name: 'Settings' }" />
    <q-btn class="q-ma-md" color="info" :label="t('home.about')" :to="{ name: 'About' }" />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

import Counter from "@/components/Counter.vue";
import { ref, watch } from "vue";
import { useMainStore } from "@/stores";

const { t } = useI18n();
const mainStore = useMainStore();

const count = ref(0);

watch(count, () => {
  mainStore.counter += 1;
});
</script>
