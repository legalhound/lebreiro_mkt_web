<template>
  <div class="slide-six text-center" > 
    <h2 class="title" id="architecture">Arquitectura y tecnología</h2>
    <div class="container">
      <div class="row g-4">
        <div class="col-md-6 col-lg-4">
          <div class="p-4 fact-card h-100">
            <div class="fact-icon mb-3"><i class="fas fa-cubes"/></div>
            <h5 class="fact-header">Modularidad y escabilidad</h5>
            <p class="fact-text">
              La modularidad de la plataforma permite adaptarse a las necesidades específicas de cada empresa, ya sea pequeña o grande.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="p-4 fact-card h-100">
            <div class="fact-icon mb-3"><i class="fas fa-plug"/></div>
            <h5 class="fact-header">Integración a travé de APIs</h5>
            <p class="fact-text">
              Las APIs facilitan la conexión con diversas herramientas como CRMs y ERPs, optimizando flujos de trabajo y aumentando la eficiencia.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="p-4 fact-card h-100">
            <div class="fact-icon mb-3"><i class="fas fa-shield-halved"/></div>
            <h5 class="fact-header">Seguridad en el acceso</h5>
            <p class="fact-text">
              El acceso seguro con autenticación multifactor garantiza que solo usuarios autorizados puedan acceder a la información sensible.
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
    padding-top: 100px;
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