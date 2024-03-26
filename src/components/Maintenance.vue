<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
   <div class="flex h-screen">
      <div
         class="lg:py-16 lg:px-12 max-w-screen-md px-4 py-8 m-auto text-center">
         <div class="flex mb-4 text-gray-400">
            <div class="mx-auto">
               <UIcon name="i-line-md-cog-filled-loop" class="text-4xl" />
               <UIcon name="i-line-md-cog-filled-loop" class="text-6xl" />
            </div>
         </div>
         <h1
            class="lg:mb-6 md:text-5xl xl:text-6xl mb-4 text-4xl font-bold leading-none tracking-tight text-white">
            {{ t('h1') }}
         </h1>
         <p class="md:text-lg xl:text-xl font-light text-gray-400">
            {{ t('p') }}
         </p>
      </div>
   </div>
</template>

<i18n lang="json">
{
   "en": {
      "h1": "Under maintenance",
      "p": "We are improving for you! Sorry for the disturbances. We will be back soon."
   },

   "es": {
      "h1": "En mantenimiento",
      "p": "¡Estamos mejorando para ti! Disculpa las molestias. Pronto estaremos de vuelta."
   }
}
</i18n>
