<template>
<nav class="navbar navbar-expand-lg fixed-top bg-white">
  <div class="container">
    <a href="#inicio" class="navbar-brand">
      <img class="mx-auto logo" alt="logo" src="@/assets/lebreiro-logo.png" height="40px" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a :class="borderActiveClass1" class="nav-link" href="#magnament">{{ $t('menu.management') }}</a>
        </li>
        <li class="nav-item">
          <a :class="borderActiveClass2" class="nav-link" href="#architecture">{{ $t('menu.architecture') }}</a>
        </li>
        <li class="nav-item">
          <a :class="borderActiveClass3" class="nav-link" href="#cases">{{ $t('menu.cases') }}</a>
        </li>
        <li class="nav-item me-3">
          <a :class="borderActiveClass4" class="nav-link" href="#contact">{{ $t('menu.contact') }}</a>
        </li>
      </ul>
      <div class="switch-block">
        EN <span class="form-check form-switch d-inline-block align-bottom mx-1">
          <input class="form-check-input" type="checkbox" v-model="isSpanish" @change="toggleLanguage" />
        </span> ES
      </div>
      <button class="btn btn-secondary ms-lg-3">
        <a href="https://app.lebreiro.com/">{{ $t('menu.login') }}</a>
      </button>
    </div>
  </div>
</nav>

</template>

<script setup>

const { locale, setLocale } = useI18n()

const isSpanish = ref(locale.value === 'es')

async function toggleLanguage() {
  const newLocale = isSpanish.value ? 'es' : 'en'
  await setLocale(newLocale)
}
  const router = useRouter()

  const { currentRoute } = router

  const borderActiveClass1 = computed(() => {
    if ( currentRoute.value.hash === '#magnament') {
        return 'page-active';
      } 
    }
  )
  const borderActiveClass2 = computed(() => {
    if ( currentRoute.value.hash === '#architecture') {
        return 'page-active';
      } 
    }
  )
  const borderActiveClass3 = computed(() => {
    if ( currentRoute.value.hash === '#cases') {
        return 'page-active';
      } 
    }
  )
  const borderActiveClass4 = computed(() => {
    if ( currentRoute.value.hash === '#contact') {
        return 'page-active';
      } 
    }
  )
</script>


<style lang="scss" scoped>
  .logo{
    animation: logo-up linear both;
    animation-timeline: scroll(root);
    animation-range: 0 400px;
  }
.navbar{
  margin: 0px !important;
  border: none !important;
  padding: 10px 30px;
  animation: show-background linear both;
  animation-timeline: scroll(root);
  animation-range: 0 400px;

}
.btn-secondary {
  background-color: #65cce3;
  border-color: #65cce3;

  a {
    color: #4B4B4B !important;
    text-decoration: none;
  }

  &:hover {
    background-color: #4eb9d4; // tono un poco más oscuro
    border-color: #4eb9d4;
    transition: background-color 0.2s ease;
  }

  transition: background-color 0.2s ease;
}
a{
  border-color: transparent;
}
.page-active{
  border-bottom: 3px solid #65cce3;
}
.form-switch .form-check-input,
.form-switch .form-check-input:checked,  
.form-switch .form-check-input:focus {
    height: 20px !important;
    width: 40px !important;
    background-color: transparent !important;
    border-color: #4eb9d4 !important;
    box-shadow: none !important;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%234eb9d4'/%3e%3c/svg%3e") !important;
}
</style>