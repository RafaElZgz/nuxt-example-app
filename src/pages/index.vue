<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
   <Title>{{ t('meta.title') }}</Title>
   <section>
      <Maintenance />
   </section>
</template>

<i18n lang="json">
{
   "en": {
      "meta": {
         "title": "Home"
      }
   },

   "es": {
      "meta": {
         "title": "Inicio"
      }
   }
}
</i18n>
