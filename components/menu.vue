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
            <a class="nav-link"  href="#magnament">Gestión colaborativa</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#architecture">Aquitectura y tecnología</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"  href="#cases">Casos de uso</a>
          </li>
          <li class="nav-item me-3">
            <a class="page-2 nav-link" href="#contact">Contacto</a>
          </li>
        </ul>
        <button class="btn btn-secondary ms-lg-3"><a  href="https://app.lebreiro.com/">Iniciar sesión</a></button>
      </div>
    </div>
  </nav>
</template>

<script setup>
  const router = useRouter()
  const { currentRoute } = router
  const borderActiveClass1 = computed(() => {
    if ( currentRoute.value.name === 'index') {
        return 'page-1-active';
      } 
    }
  )
  const borderActiveClass2 = computed(() => {
    if ( currentRoute.value.name === 'quienes-somos') {
        return 'page-2-active';
      } 
    }
  )
  const borderActiveClass3 = computed(() => {
    if ( currentRoute.value.name === 'nuestros-clientes') {
        return 'page-3-active';
      } 
    }
  )
  const borderActiveClass4 = computed(() => {
    if ( currentRoute.value.name === 'contact') {
        return 'page-4-active';
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

</style>