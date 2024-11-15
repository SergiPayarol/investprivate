<template>
  <div class="language-switcher">
    <button
      :class="{ active: $i18n.locale === 'ca-CA' }"
      @click="changeLanguage('ca-CA')"
    >
      CA
    </button>
    <button
      :class="{ active: $i18n.locale === 'es-ES' }"
      @click="changeLanguage('es-ES')"
    >
      ES
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    changeLanguage(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>

<style>
.language-switcher button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 0px 3px;
  margin: 0 2px;
  color: white;
}

.language-switcher .active {
  font-weight: bold;
  color: #3498db;
}

@media (max-width: 768px) {
  .language-switcher button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 12px;
    padding: 0px 3px;
    margin: 0 2px;
    color: black;
  }
}
</style>
