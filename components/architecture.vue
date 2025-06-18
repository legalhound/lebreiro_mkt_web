<template>
  <div class="slide-six text-center" > 
    <h2 class="title" id="on-premises">Arquitectura y tecnología</h2>
    <div class="container">
      <div class="row g-4">
        <div class="col-md-6 col-lg-4">
          <div class="p-4 fact-card h-100">
            <div class="fact-icon mb-3"><i class="fas fa-shield-halved"/></div>
            <h5 class="fact-header">Seguridad máxima</h5>
            <p class="fact-text">
              No hay terceros con acceso, ni siquiera el fabricante del software.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="p-4 fact-card h-100">
            <div class="fact-icon mb-3"><i class="fas fa-file-shield"/></div>
            <h5 class="fact-header">Cumplimiento reforzado</h5>
            <p class="fact-text">
              Se alinea con los principios de privacidad por diseño y por defecto del RGPD.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="p-4 fact-card h-100">
            <div class="fact-icon mb-3"><i class="fas fa-sliders"/></div>
            <h5 class="fact-header">Control absoluto</h5>
            <p class="fact-text">
              El cliente decide cuándo se actualiza el sistema, qué se monitoriza y cómo se configura.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.slide-six{
  background-color: #e5e5e5; 
  padding-bottom: 100px;
  .title{
    padding-top: 70px;
  }
  .fact-card {
    background-color: white;
    border: 1px solid #dee2e6;
    border-radius: 0.5rem;
    transition: transform 0.2s ease;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    view-timeline-name: --topic;
    view-timeline-axis: block;
    animation-name: topic-up;
    animation-timeline: --topic;
    animation-range: entry 0% cover 30%;
  }
  .fact-icon {
    font-size: 2rem;
    color: #65cce3;
  }
  .fact-header {
    font-weight: 600;
    color: #398fa8;
  }
  .fact-text {
    color: #555;
  }
}
</style>