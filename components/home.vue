<template>
  <div class="slide-one text-center" id="inicio">
    <img class="mx-auto mb-3" alt="logo" src="@/assets/lebreiro-logo.png" height="150px" />
    <h1>Plataforma RegTech de vigiancia normativa</h1>
    <p>Solucion integral para la gestión proactiva de obligaciones legales y regulatorias.</p>
  </div>
  <div class="slide-two text-center" id="servicios">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12 ms-auto p-md-3 p-sm-1">  
        <h2>Control absoluto</h2>
        <p class="px-3">LesterBot es una solución tecnológica avanzada diseñada para entidades de banca privada, asesoramiento financiero y gestión patrimonial que requieren un control absoluto sobre sus comunicaciones y su trazabilidad completa conforme a las normativas más exigentes.</p>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 me-auto p-md-3 p-sm-1">  
        <h2>Máxima confidencialidad</h2>
        <p class="px-3">Desplegado íntegramente en entornos on-premise, LesterBot ofrece máxima confidencialidad, cumplimiento automatizado y soberanía tecnológica en una única herramienta integral.</p>
      </div> 
    </div>
    <div class="container py-5">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col d-flex">
          <div class="topic-card w-100">
            <div>
              <div class="topic-icon"><i class="fas fa-cubes"></i></div>
              <div class="topic-title">Plataforma Modular</div>
              <div class="topic-text">
                Es una plataforma modular para la transcripción, búsqueda y archivo de comunicaciones clave dentro de la propia entidad y de la entidad con sus clientes—cumpliendo con MiFID II, DORA, GDPR y la LVMSI.
              </div>
            </div>
          </div>
        </div>
        <div class="col d-flex">
          <div class="topic-card w-100">
            <div>
              <div class="topic-icon"><i class="fas fa-network-wired"></i></div>
              <div class="topic-title">Arquitectura Local</div>
              <div class="topic-text">
                A través de una arquitectura local, permite a la entidad registrar conversaciones telefónicas, por correo electrónico y por correo web, e indexarlas, conservarlas y recuperarlas para aportarlas   con precisión y rapidez a auditorías e inspecciones, utilizarlas como pruebas en procedimientos judiciales. La entidad ve reforzada su política de cumplimiento sin ceder el control externo de sus datos.
              </div>
            </div>
          </div>
        </div>
        <div class="col d-flex">
          <div class="topic-card w-100">
            <div>
              <div class="topic-icon"><i class="fas fa-puzzle-piece"></i></div>
              <div class="topic-title">Diseño Adaptable</div>
              <div class="topic-text">
                Su diseño adaptable permite integraciones personalizadas a los flujos documentales y reglas internas de la entidad, y su ajuste para los distintos tipos de clientes propios de los servicios de banca privada.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
  .slide-one{
    padding-top: 100px;
      p{
        margin-bottom: 1em;
        margin-inline: auto;
        font-size: 1.2em;
        max-width: 700px;
    }
    .portada{
      opacity: 0.9;
    }
  }
.slide-two{
  padding-top: 50px;
  p{
    font-size: 1em;
  }  
.topic-container{
  background-color: #65cce3;
  height:400px;
  border-radius: 7%;
  padding: 1.5em 2em;
  view-timeline-name: --topic;
  view-timeline-axis: block;
  animation-name: topic-up;
  animation-timeline: --topic;
  animation-range: entry 0% cover 30%;
}
.topic-card {
  background-color:  #65cce3;
  border-radius: 15px;
  padding: 30px 20px;
  text-align: center;
  transition: transform 0.3s ease;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  view-timeline-name: --topic;
  view-timeline-axis: flex;
  animation-name: topic-up;
  animation-timeline: --topic;
  animation-range: entry 0% cover 30%;
}
.topic-icon {
  font-size: 30px;
  margin-bottom: 15px;
  color:#398fa8;
}
.topic-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}
.topic-text {
  font-size: 14px;
}
}
</style>