<template>
  <div class="slide-three" id="cases">
    <h2>Casos de uso destacados</h2>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4">
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-university fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Sector bancario y financiero</h5>
            <p class="card-text">Monitorización de normativa publicada en el BOE y DOUE, incluyendo directrices de supervisores como la CNMV y Banco de España. </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-vial fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Industria farmaceútica</h5>
            <p class="card-text">Seguimiento normativo sobre ensayos clínicos y aspectos fiscales relacionados con la investigación y el desarrollo.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-scale-balanced fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Despachos legales y consultoras</h5>
            <p class="card-text">Uso de un radar jurídico para alertar sobre cambios en normativa y jurisprudencia, mejorando la anticipación y fidelización de clientes.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-car fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Sector automoción</h5>
            <p class="card-text">Control de normativa relacionada con ayudas y control de flotas, asegurando el cumplimiento en diferentes departamentos.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-microchip fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Empresas tecnológicas y de ciberseguridad</h5>
            <p class="card-text">Rastreo y cambio en RDPD y AI Act, enviando alertas específicas a departamentos como DPO y IT.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-globe fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Grupos internacionales</h5>
            <p class="card-text">Recepción de alertas segmentadas por país, adaptándose a normativas locales y fiscales internacionales.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
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