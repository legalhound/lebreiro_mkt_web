<template>
  <div class="slide-one text-center" id="inicio">
    <img class="mx-auto mb-3" alt="logo" src="@/assets/lebreiro-logo.png" height="150px" />
    <h1>Plataforma RegTech de vigiancia normativa</h1>
    <p>Solucion integral para la gestión proactiva de obligaciones legales y regulatorias.</p>
  </div>
  <div class="slide-two text-center" id="servicios">
    <div class="row">
      <div class="col-xl-4 col-md-6 col-sm-12 ms-auto p-md-3 p-sm-1">  
        <h2>¿Qué es Lebreiro?</h2>
        <p class="px-2">Lebreiro es una solución RegTech avanzada que actúa como un sistema de vigilancia normativa inteligente. Está diseñada para ayudar a las empresas a gestionar de forma proactiva sus obligaciones legales, fiscales y regulatorias. A través de la monitorización automatizada de múltiples fuentes oficiales, tanto nacionales como europeas, Lebreiro identifica, clasifica y distribuye información normativa relevante en tiempo real, garantizando que los distintos departamentos de la empresa estén siempre al día de los cambios que pueden afectarles.</p>
      </div>
      <div class="col-xl-4 col-md-6 col-sm-12 me-auto p-md-3 p-sm-1">  
        <h2>¿Que hace?</h2>
        <p class="px-2">La plataforma permite consultar documentos legales, añadir anotaciones, compartir contenido entre equipos y recibir alertas segmentadas según perfil o área. Todo desde un entorno seguro, centralizado y personalizable, integrable con herramientas como Teams, correo electrónico o gestores documentales.</p>
        <p class="px-2">Lebreiro no solo informa de los cambios normativos en preparación o en vigor: permite estructurar el cumplimiento. Desde su panel de control, el usuario visualiza los cambios legislativos, su impacto y las acciones tomadas. La trazabilidad del ciclo normativo —desde la publicación hasta su implementación— ofrece un respaldo clave en inspecciones, auditorías o comités de cumplimiento.</p>
      </div> 
    </div>
    <div class="container py-5">
      <h2 class="mb-3">Gestion colaborativa y de perfiles</h2>
      <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-4 g-4 mt-3">
        <div class="col d-flex">
          <div class="topic-card w-100">
            <div>
              <div class="topic-icon"><i class="fas fa-share-nodes"></i></div>
              <div class="topic-title">Compartición de normativas y alertas </div>
              <div class="topic-text">
                Es una plataforma Lebreiro facilita la compartición de normativas y alertas, permiiendo a los usuarios colaborar de manera eficiente, ya sea dentro de la plataforma o a través correo electrónico y Microsoft Teams.
              </div>
            </div>
          </div>
        </div>
        <div class="col d-flex">
          <div class="topic-card w-100">
            <div>
              <div class="topic-icon"><i class="fas fa-note-sticky"></i></div>
              <div class="topic-title">Notas personalizadas en documentos</div>
              <div class="topic-text">
                Los usuarios pueden añadir notas personalizadas a documento y alertas lo que permite una mayor personalización y adaptación a las neccesitades específicas de cada área o proyecto.
              </div>
            </div>
          </div>
        </div>
        <div class="col d-flex">
          <div class="topic-card w-100">
            <div>
              <div class="topic-icon"><i class="fas fa-users-gear"></i></div>
              <div class="topic-title">Creación de grupos por área y departamento</div>
              <div class="topic-text">
                Desde el perfil de administrador, se pueden crear grupos áreas y departamiento, facilitando la distribución de automática de información pertinente a los miembros de cada grupo.
              </div>
            </div>
          </div>
        </div>
        <div class="col d-flex">
          <div class="topic-card w-100">
            <div>
              <div class="topic-icon"><i class="fas fa-clipboard-check"></i></div>
              <div class="topic-title">Trazabilidad de acciones y lecturas</div>
              <div class="topic-text">
                Lebreiro asegura la trazabilidad de lectura, las acciones tomadas y los usuarios implicados, permitiendo un seguimiento claro y efectivo de la gestion normativa.
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
  color:#000;
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