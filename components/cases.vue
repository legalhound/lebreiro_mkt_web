<template>
  <div class="slide-three" id="funcionalidad-clave">
    <h2>Casos de uso destacados</h2>
    <div class="row row-cols-1 row-cols-lg-4 row-cols-xl-5  g-4">
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-microphone fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Transcripción automática</h5>
            <p class="card-text">Transcripción automática multilingüe de llamadas telefónicas a texto. </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-list fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Indexación de comunicaciones</h5>
            <p class="card-text">Indexación de correos electrónicos, Teams, WhatsApp y más. Directorio inteligente de contactos y detección de llamadas externas.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-search fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Búsqueda semántica</h5>
            <p class="card-text">Búsqueda semántica basada en IA: por intención, no solo por palabra. Interfaz para consulta rápida en inspecciones y comités internos.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-hdd fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Copias de seguridad</h5>
            <p class="card-text">Copias de seguridad automáticas bajo control total del cliente garantizando la máxima seguridad de los datos.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-bell fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Alertas configurables</h5>
            <p class="card-text">Alertas configurables por riesgo, producto o término regulado que facilitan la supervisión normativa en tiempo real.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-calendar-alt fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Agrupación cronológica</h5>
            <p class="card-text">Agrupación cronológica por expediente (cliente, asesor, canal). Adaptabilidad al lenguaje y operativa propia de la entidad.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-file-export fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Exportación en formatos compatibles</h5>
            <p class="card-text">Genera un expediente STOR compatible con CNMV.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas  fa-address-book fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Directorio inteligente</h5>
            <p class="card-text">Directorio inteligente de contactos y detección de llamadas externas.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-display fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Interfaz</h5>
            <p class="card-text">Interfaz para consulta rápida en inspecciones y comités internos.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 position-relative">
          <i class="fas fa-cogs fa-3x icon-position"></i>
          <div class="card-body text-center">
            <h5 class="card-title">Adaptabilidad</h5>
            <p class="card-text">Adaptabilidad al lenguaje y operativa propia de la entidad.</p>
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