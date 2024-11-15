<template>
  <q-dialog v-model="isDialogOpen" persistent>
    <q-card style="width: 800px">
      <q-card-section>
        <q-icon name="cookie" size="50px" color="brown" class="q-mb-sm" />

        <h3 class="q-mb-xs">Política de Privacidad</h3>
        <p>{{ $t("cookies_popup.content_p") }}</p>
      </q-card-section>

      <q-card-actions>
        <q-btn
          :label="$t('cookies_popup.entendido')"
          color="green"
          @click="closeDialog"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  data() {
    return {
      isDialogOpen: false,
    };
  },
  mounted() {
    this.isDialogOpen = true;
  },
  methods: {
    closeDialog() {
      this.isDialogOpen = false;
    },
  },
};
</script>

<style scoped>
p {
  font-family: "Poppins", sans-serif;
  margin-top: 10px;
  font-size: 18px;
}
</style>
