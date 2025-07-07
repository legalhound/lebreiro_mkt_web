<template>
  <div class="slide-one text-center" id="inicio">
    <img class="mx-auto mb-3 logo" :alt="$t('intro.logoAlt')" src="@/assets/lebreiro-logo.png" />
    <h1>{{ $t('intro.title') }}</h1>
    <p>{{ $t('intro.subtitle') }}</p>
  </div>
  <div class="slide-two text-center">
    <div class="row">
      <div class="col-xl-4 col-md-6 col-sm-12 ms-auto p-md-3 p-sm-1">
        <h2>{{ $t('intro.section1.title') }}</h2>
        <p class="px-2">{{ $t('intro.section1.text') }}</p>
      </div>
      <div class="col-xl-4 col-md-6 col-sm-12 me-auto p-md-3 p-sm-1">
        <h2>{{ $t('intro.section2.title') }}</h2>
        <p class="px-2">{{ $t('intro.section2.paragraph1') }}</p>
        <p class="px-2">{{ $t('intro.section2.paragraph2') }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
  .logo{
    max-width: 100%;
    max-height: 150px;
  }
  .slide-one{
    background-image: url('@/assets/portada.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    padding: 100px 0px;
      p{
        margin-bottom: 1em;
        margin-inline: auto;
        font-size: 1.2em;
        max-width: 700px;
    }
  }
.slide-two{
  padding-top: 20px;
  p{
    font-size: 1em;
  }  
}
</style>