<template>
  <div class="magnament" id="magnament">
    <div class="container" >
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
<style scoped>
.magnament{
  padding: 100px 30px !important;
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
  background-color:  #65cce3e3;
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
  color:	#4B4B4B !important;
}
.topic-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color:	#4B4B4B !important; 
}
.topic-text {
  font-size: 14px;
}


</style>