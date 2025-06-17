<template>
<div class="slide-five text-center" id="por-que-lester">
    <h2> ¿Por qué elegir LesterBot?</h2>
    <div class="container">
      <div class=" feature-row">
        <div class="feature-text">
          <i class="fas fa-eye-slash feature-icon"></i>
          <h5>Discreción y trazabilidad</h5>
          <p>En banca privada, no son opcionales.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="feature-text">
          <i class="fas fa-unlink feature-icon"></i>
          <h5>Independencia</h5>
          <p>No dependes de terceros para demostrar cumplimiento.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="feature-text">
          <i class="fas fa-bolt feature-icon"></i>
          <h5>Ventaja operativa</h5>
          <p>Convierte una obligación normativa en una ventaja operativa.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="feature-text">
          <i class="fas fa-shield-alt feature-icon"></i>
          <h5>Protección integral</h5>
          <p>Protege a la entidad, al cliente y al asesor.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="feature-text">
          <i class="fas fa-layer-group feature-icon"></i>
          <h5>Integración completa</h5>
          <p>Integra tecnología, legalidad y control en una sola plataforma.</p>
        </div>
      </div>
      <div class="feature-row">
        <div class="col feature-text">
          <i class="fas fa-balance-scale feature-icon"></i>
          <h5>Diseño regulatorio</h5>
          <p>Diseñado pensando como lo haría un regulador, pero trabaja para ti.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.slide-five{  
  padding: 100px 0px 50px 0px;  
  .feature-section {
      background-color: #f2f3f7;
      padding: 60px 20px;
      border-radius: 12px;
    }
    .feature-title {
      color: #398fa8;
      font-weight: 600;
      text-align: center;
      margin-bottom: 40px;
    }
    .feature-row {
      margin: 30px 0px;
      opacity: 0;
      animation: show-up 1s ease forwards;
      animation-timeline: view() ;
      animation-range: entry 0% cover 70%;
    }
    .feature-icon {
      font-size: 1.5rem;
      color: #398fa8;
      text-align: center;
    }
    .feature-text h5 {
      margin: 0;
      font-weight: 600;
      color: #398fa8;
    }
    .feature-text p {
      margin: 0;
      color: #555;
    }
}
</style>