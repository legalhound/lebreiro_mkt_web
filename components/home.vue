<template>
  <div class="slide-one text-center" id="inicio">
    <img class="mx-auto mb-3" alt="logo" src="@/assets/lebreiro-logo.png" height="150px" />
    <h1>Plataforma RegTech de vigiancia normativa</h1>
    <p>Solucion integral para la gestión proactiva de obligaciones legales y regulatorias.</p>
  </div>
  <div class="slide-two text-center">
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
}
</style>