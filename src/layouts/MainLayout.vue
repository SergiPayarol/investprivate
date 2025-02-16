<template>
  <q-layout view="lHh Lpr lFf">
    <div class="q-pa-md bg-image">
      <!-- Header with Menu -->
      <q-header :class="{ 'black-header': isScrolledToNosotros }" elevated>
        <q-toolbar class="toolbar-title q-pa-sm">
          <div class="logo-container" style="text-align: left">
            <img
              src="~assets/logo_investprivate.svg"
              alt="Logo"
              class="header-logo"
            />
          </div>

          <div class="right-content q-ml-auto">
            <div
              class="contact-info q-mb-sm"
              :class="{
                'q-pa-none': true,
                'q-justify-right': $q.screen.lt.sm,
                'q-align-right': $q.screen.lt.sm,
                'q-flex': true,
              }"
              style="
                display: flex;
                align-items: center;
                justify-content: flex-end;
                margin-right: 20px;
              "
            >
              <a
                href="https://wa.me/+34624064818"
                target="_blank"
                class="contacto-link-header"
              >
                <img
                  src="~assets/whats_logo_white.svg"
                  alt="WhatsApp"
                  class="whatsapp-image-header"
                />
              </a>
              <a href="tel:+34624064818" target="_blank" class="phone-link">
                <q-icon
                  name="call"
                  class="phone-icon"
                  v-show="$q.screen.gt.sm"
                />
              </a>
              <a
                href="tel:+34624064818"
                :class="{
                  'phone-number': true,
                  'q-ml-sm': true,
                  'text-h5': !$q.screen.lt.sm,
                  'text-body2': $q.screen.lt.sm,
                  'q-mr-sm': $q.screen.lt.sm,
                }"
                v-show="$q.screen.gt.sm"
              >
                624 06 48 18
              </a>
              <LanguageSwitcher v-show="$q.screen.gt.sm" />
            </div>

            <div v-show="$q.screen.lt.sm" class="telf_menu">
              <a href="tel:+34624064818" target="_blank" class="phone-link">
                <q-icon name="call" class="phone-icon-responsive q-mr-md" />
              </a>
              <q-btn
                flat
                dense
                icon="menu"
                @click="drawer = !drawer"
                class="menu-btn q-pa-none"
              />
            </div>
            <q-drawer
              v-model="drawer"
              side="right"
              overlay
              v-show="$q.screen.lt.md"
              class="drawer-menu"
            >
              <q-list>
                <q-item clickable @click="handleMenuClick('nosotros')">
                  <q-item-section class="drawer-item">{{
                    $t("header.nosotros")
                  }}</q-item-section>
                </q-item>
                <q-item clickable @click="handleMenuClick('servicios')">
                  <q-item-section class="drawer-item">{{
                    $t("header.servicios")
                  }}</q-item-section>
                </q-item>
                <q-item clickable @click="handleMenuClick('como-trabajamos')">
                  <q-item-section class="drawer-item">{{
                    $t("header.como_trab")
                  }}</q-item-section>
                </q-item>
                <q-item clickable @click="handleMenuClick('prueba')">
                  <q-item-section class="drawer-item">{{
                    $t("header.prueba")
                  }}</q-item-section>
                </q-item>
                <q-item clickable @click="handleMenuClick('contacto')">
                  <q-item-section class="drawer-item">{{
                    $t("header.contacto")
                  }}</q-item-section>
                </q-item>
                <q-item v-if="$q.screen.lt.sm" class="drawer-language-switcher">
                  <LanguageSwitcher />
                </q-item>
              </q-list>
            </q-drawer>
            <div
              class="menu-items"
              v-show="$q.screen.gt.sm"
              style="display: flex; justify-content: center; margin-top: 5px"
            >
              <q-btn
                flat
                @click="scrollTo('nosotros')"
                :label="$t('header.nosotros')"
                class="q-mr-sm text-h5"
              />
              <q-btn
                flat
                @click="scrollTo('servicios')"
                :label="$t('header.servicios')"
                class="q-mr-sm text-h5"
              />
              <q-btn
                flat
                @click="scrollTo('como-trabajamos')"
                :label="$t('header.como_trab')"
                class="q-mr-sm text-h5"
              />
              <q-btn
                flat
                @click="scrollTo('prueba')"
                :label="$t('header.prueba')"
                class="q-mr-sm text-h5"
              />
              <q-btn
                flat
                @click="scrollTo('contacto')"
                :label="$t('header.contacto')"
                class="q-mr-sm text-h5"
              />
            </div>
          </div>
        </q-toolbar>
      </q-header>
      <q-page-container class="expanded-container">
        <div class="text-container">
          <div class="logo-container" style="text-align: center">
            <img :src="currentLogo" alt="Logo" class="content-logo" />
          </div>
          <h4
            class="detectives-privados"
            style="flex-grow: 1; text-align: center"
          >
            <br />{{ $t("content_text.keywords") }}
          </h4>
        </div>
      </q-page-container>
    </div>
    <q-page-container>
      <div id="nosotros" class="section">
        <h2>{{ $t("content.nosotros") }}</h2>
        <p>{{ $t("content_text.nosotros_p1") }}</p>
        <p>{{ $t("content_text.nosotros_p2") }}</p>
      </div>

      <div id="servicios" class="section">
        <h2>{{ $t("content.servicios") }}</h2>
        <div class="content-wrapper">
          <div class="text-content">
            <p>{{ $t("content_text.servicios_p") }}</p>
            <br />
            <ul>
              <li>{{ $t("content_text.servicios_li1") }}</li>
              <li>{{ $t("content_text.servicios_li2") }}</li>
              <li>{{ $t("content_text.servicios_li3") }}</li>
              <li>{{ $t("content_text.servicios_li4") }}</li>
              <li>{{ $t("content_text.servicios_li5") }}</li>
              <li>{{ $t("content_text.servicios_li6") }}</li>
              <li>{{ $t("content_text.servicios_li7") }}</li>
              <li>{{ $t("content_text.servicios_li8") }}</li>
            </ul>
          </div>

          <img src="~assets/i5.jpg" alt="Camera" class="imagen-servicios" />
        </div>
      </div>

      <div id="como-trabajamos" class="section">
        <h2>{{ $t("content.como_trab") }}</h2>
        <p>{{ $t("content_text.como_trab_p1") }}</p>
        <p>{{ $t("content_text.como_trab_p2") }}</p>
        <p>{{ $t("content_text.como_trab_p3") }}</p>
        <p>{{ $t("content_text.como_trab_p4") }}</p>
      </div>

      <div id="prueba" class="section">
        <h2>{{ $t("content.prueba") }}</h2>
        <div class="content-wrapper">
          <img src="~assets/prueba_foto.jpg" alt="pc" class="imagen-prueba" />
          <div class="text-content">
            <p>{{ $t("content_text.prueba_p1") }}</p>
            <p>{{ $t("content_text.prueba_p2") }}</p>
          </div>
        </div>
      </div>

      <div id="contacto" class="section">
        <h2>{{ $t("content_text.contacto") }}</h2>
        <div class="contacto-texto">
          <div class="contacto-item">
            <a
              href="https://wa.me/+34624064818"
              target="_blank"
              class="contacto-link"
            >
              <img
                src="~assets/whats_logo_black.png"
                alt="WhatsApp"
                class="whatsapp-image"
              />
            </a>
            <a
              href="https://wa.me/+34624064818"
              target="_blank"
              class="contacto-link"
            >
              <span>+34 624 064 818</span>
            </a>
          </div>

          <div class="contacto-item">
            <a
              href="mailto:info@investprivatedetectives.com"
              target="_blank"
              class="contacto-link"
            >
              <img
                src="~assets/email_black.jpg"
                alt="Email"
                class="email-image"
              />
            </a>
            <a
              href="mailto:info@investprivatedetectives.com"
              target="_blank"
              class="contacto-link"
            >
              <span>info@investprivatedetectives.com</span>
            </a>
          </div>
        </div>
      </div>
      <PopupDialog />
    </q-page-container>
    <q-footer elevated class="bg-grey-8 text-white q-pa-md">
      <div class="row items-center">
        <div>{{ $t("footer.footer") }}</div>

        <q-btn
          flat
          :label="$t('footer.avis_legal_boto')"
          color="white"
          @click="alert = true"
          class="q-ml-sm"
        />
      </div>
    </q-footer>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section class="q-pt-none" style="margin: 50px">
          <div style="margin-bottom: 50px">
            <strong style="font-size: 24px">{{
              $t("footer.avis_legal")
            }}</strong>
          </div>

          <div>
            <div style="margin-bottom: 15px">
              <strong style="font-size: 18px; margin-bottom: 10px">{{
                $t("footer.ley")
              }}</strong>
            </div>

            <div style="margin-bottom: 15px">
              <p style="margin-bottom: 15px">{{ $t("footer.ley_text") }}</p>
            </div>

            <div style="margin-bottom: 15px">
              <strong style="font-size: 18px; margin-bottom: 10px">{{
                $t("footer.derechos")
              }}</strong>
            </div>

            <div style="margin-bottom: 15px">
              <p style="margin-bottom: 15px">
                {{ $t("footer.derechos_text") }}
              </p>
            </div>

            <div style="margin-bottom: 15px">
              <strong style="font-size: 18px; margin-bottom: 10px">{{
                $t("footer.cookies")
              }}</strong>
            </div>

            <div style="margin-bottom: 15px">
              <p style="margin-bottom: 15px">{{ $t("footer.cookies_text") }}</p>
            </div>

            <div style="margin-bottom: 15px">
              <strong style="font-size: 18px; margin-bottom: 10px">{{
                $t("footer.exencion")
              }}</strong>
            </div>

            <div style="margin-bottom: 15px">
              <p style="margin-bottom: 15px">
                {{ $t("footer.exencion_text") }}
              </p>
            </div>

            <div>
              <strong style="font-size: 18px; margin-bottom: 10px">{{
                $t("footer.ley_ap")
              }}</strong>
            </div>

            <div style="margin-bottom: 15px">
              <p>{{ $t("footer.ley_ap_text") }}</p>
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import PopupDialog from "src/components/PopupDialog.vue";
import LanguageSwitcher from "src/components/LanguageSwitcher.vue";
import { ref, onMounted, onBeforeUnmount, nextTick, computed } from "vue";
import { useI18n } from "vue-i18n";

export default {
  components: {
    PopupDialog,
    LanguageSwitcher,
  },
  setup() {
    const { t } = useI18n();
    const drawer = ref(false);
    const isScrolledToNosotros = ref(false);

    const scrollTo = (sectionId) => {
      const element = document.getElementById(sectionId);
      const headerHeight = document.querySelector(".q-header").offsetHeight;
      if (element) {
        window.scrollTo({
          top: element.offsetTop - headerHeight,
          behavior: "smooth",
        });
      } else {
        console.warn(`No se encontró el elemento con ID: ${sectionId}`);
      }
    };

    const handleMenuClick = (section) => {
      drawer.value = false;
      nextTick(() => {
        scrollTo(section);
      });
    };

    const handleScroll = () => {
      const nosotrosSection = document.getElementById("nosotros");
      if (nosotrosSection) {
        const rect = nosotrosSection.getBoundingClientRect();
        const headerHeight = document.querySelector(".q-header").offsetHeight;

        if (rect.top - headerHeight <= 0) {
          isScrolledToNosotros.value = true;
        } else {
          isScrolledToNosotros.value = false;
        }
      }
    };

    const currentLogo = computed(() => {
      return useI18n().locale.value === "ca-CA"
        ? require("../assets/logo_investprivate_cat.svg")
        : require("../assets/logo_investprivate.svg");
    });

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Check initial position
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    const alert = ref(false);

    return {
      drawer,
      t,
      scrollTo,
      handleMenuClick,
      isScrolledToNosotros,
      currentLogo,
      alert,
    };
  },
};
</script>

<style scoped>
h2 {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  margin-left: 5px;
}
p {
  font-family: "Poppins", sans-serif;
  margin-left: 15px;
  font-size: 18px;
  line-height: 1.6;
  color: #555;
}
li {
  font-family: "Poppins", sans-serif;
  margin-left: 10px;
  font-size: 18px;
  line-height: 1.6;
  color: #555;
}

/*HEADER*/

.header-logo {
  height: auto;
  width: 200px;
}
.right-content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 5px;
  width: 80%;
}
.contact-info {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}
.menu-items {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}

.q-header {
  padding: 0 1rem;
  background-color: #302d2d;
  transition: background-color 0.3s ease;
}

.black-header {
  background-color: #302d2d !important;
}

.bg-image {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #302d2d;
  opacity: 100%;
  height: 600px;
}
.phone-number {
  color: #ece4e4;
  text-decoration: none;
  font-weight: bold;
  margin-right: 5px;
}
.phone-link {
  color: white;
  font-size: x-large;
  padding-top: 0px;
  margin-right: -10px;
}
.whatsapp-image-header {
  width: 25px;
  height: auto;
  color: white;
  margin-right: 0%;
  padding-top: 8px;
}
.contacto-link-header {
  color: white;
  text-decoration: none;
}
@media (max-width: 768px) {
  .header-logo {
    height: auto;
    width: 100px;
    margin-left: -10px;
  }
  .bg-image {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #302d2d;
    opacity: 100%;
    height: 400px;
  }
  .phone-number {
    display: none;
  }
  .drawer-language-switcher {
    margin-top: auto;
  }
  .right-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .telf_menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .phone-icon {
    align-items: right;
  }
  .phone-icon-responsive {
    font-size: 24px;
  }
  .menu-btn {
    margin-left: 0px;
  }
  .logo-container {
    text-align: left;
  }
  .phone-link {
    color: white;
  }
}

/*CONTENT*/

.content-logo {
  height: auto;
  width: 600px;
}

.q-page-container {
  background: transparent;
}

.q-toolbar {
  justify-content: flex-start;
}

.q-btn {
  text-transform: none;
}

.q-btn.flat {
  background-color: transparent;
  color: #000;
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.logo-container img {
  max-width: 100%;
  height: auto;
  margin-top: 0px;
}

.detectives-privados {
  margin-left: 0px;
  margin-top: -10px;
  font-family: "Poppins", sans-serif;
  color: #d9d9d9;
}

@media (max-width: 768px) {
  .detectives-privados {
    font-size: 12px;
    margin-top: -30;
  }

  .text-container {
    padding: 10px;
  }
}

/*CONTACTE*/

.whatsapp-image {
  width: 50px;
  height: 50px;
  margin-right: 15px;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.whatsapp-image:hover {
  transform: scale(1.2);
  filter: brightness(1.2);
}
.email-image {
  width: 60px;
  height: 60px;
  margin-right: 15px;
  margin-left: -5px;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.email-image:hover {
  transform: scale(1.2);
  filter: brightness(1.2);
}
.contacto-link {
  color: inherit;
  text-decoration: none;
}

.contacto-link:hover {
  text-decoration: underline;
  text-decoration-color: black;
}

.contacto-link:focus {
  outline: none;
  text-decoration: underline;
  text-decoration-color: black;
}
.contacto-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 25px;
}

/*SERVICIOS*/

.content-wrapper {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.text-content p {
  font-size: 18px;
  line-height: 1.6;
  color: #555;
}

.section {
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 1350px;
  margin: auto;
}

.section-title::after {
  content: "";
  width: 100px;
  height: 3px;
  background-color: #2c3e50;
  position: absolute;
  left: 0;
  bottom: -10px;
}

.text-content p {
  font-size: 18px;
  line-height: 1.6;
  color: #555;
  font-family: "Poppins", sans-serif;
}

/* Imagen */
.imagen-servicios {
  width: 550px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.imagen-servicios:hover {
  transform: scale(1.05);
}
.imagen-prueba {
  width: auto;
  height: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.imagen-prueba:hover {
  transform: scale(1.05);
}
body {
  font-family: "Poppins", sans-serif;
}
@media (max-width: 768px) {
  .imagen-servicios {
    display: none;
  }
  .imagen-prueba {
    display: none;
  }
  h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    margin-left: 5px;
  }
  p {
    font-family: "Poppins", sans-serif;
    margin-left: 15px;
    font-size: 14px;
    line-height: 1.6;
    color: #555;
  }
  li {
    font-family: "Poppins", sans-serif;
    margin-left: 15px;
    font-size: 14px;
    line-height: 1.6;
    color: #555;
  }
  .text-content p {
    font-size: 14px;
    line-height: 1.6;
    color: #555;
    font-family: "Poppins", sans-serif;
  }
  h2 {
    font-size: 50px;
  }
  .whatsapp-image {
    width: 25px;
    height: 25px;
    margin-right: 15px;
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  .email-image {
    width: 30px;
    height: 30px;
    margin-right: 15px;
    margin-left: -5px;
    transition: transform 0.3s ease, filter 0.3s ease;
  }
}

.menu-items {
  display: flex;
  align-items: center;
}
.drawer-menu {
  background-color: #333;
  color: white;
}

.drawer-item {
  color: rgb(0, 0, 0);
  font-size: 18px;
  padding: 10px 15px;
}
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    gap: 20px;
  }
  .imagen-servicios,
  .imagen-prueba {
    display: block;
    width: 100%;
    height: auto;
  }
  .text-content {
    text-align: justify;
  }
}
</style>
