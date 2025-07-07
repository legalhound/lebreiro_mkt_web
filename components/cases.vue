<template>
  <div class="slide-three" id="cases">
    <h2>{{ $t('cases.title') }}</h2>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div class="col" v-for="(item, index) in casesItems" :key="index">
        <div class="card h-100 position-relative">
          <div class="icon-position" v-html="item.icon"></div>
          <div class="card-body text-center">
            <h5 class="card-title">{{ $t(item.title) }}</h5>
            <p class="card-text">{{ $t(item.text) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const casesItems = [
  {
    icon: '<i class="fas fa-university fa-3x"></i>',
    title: 'cases.items.banking.title',
    text: 'cases.items.banking.text',
  },
  {
    icon: '<i class="fas fa-vial fa-3x"></i>',
    title: 'cases.items.pharma.title',
    text: 'cases.items.pharma.text',
  },
  {
    icon: '<i class="fas fa-scale-balanced fa-3x"></i>',
    title: 'cases.items.legal.title',
    text: 'cases.items.legal.text',
  },
  {
    icon: '<i class="fas fa-car fa-3x"></i>',
    title: 'cases.items.automotive.title',
    text: 'cases.items.automotive.text',
  },
  {
    icon: '<i class="fas fa-microchip fa-3x"></i>',
    title: 'cases.items.tech.title',
    text: 'cases.items.tech.text',
  },
  {
    icon: '<i class="fas fa-globe fa-3x"></i>',
    title: 'cases.items.international.title',
    text: 'cases.items.international.text',
  },
]
</script>
<style scoped>

.slide-three{
  padding: 100px 30px 50px 30px;
  opacity: 0;
  animation: show-up 1s ease forwards;
  animation-timeline: view() ;
  animation-range: entry 0% cover 70%;
  .col{
    margin-top: 100px;
  }
  .card {
    position: relative;
    background-color: #e5e5e5;
    border-radius: 10px;
    border-color: transparent;
  }
  .icon-position {
    position: absolute;
    top: -60px; 
    left: 50%;
    transform: translateX(-50%);
    color: #65cce3; 
  }
  .card-title {
    font-size: 18px;
    font-weight: bold;
  }
  .card-text {
    color: #6f6f6f;
  }
}
</style>