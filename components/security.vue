<template>
  <div class="slide-four text-center" id="seguridad-cumplimiento">
    <h2>Seguridad y cumplimiento</h2>
    <div class="layout-wrapper">
      <div class="triangle-wrapper">
        <div
          v-for="(label, index) in labels"
          :key="index"
          class="triangle-layer"
          :style="getLayerStyle(index)"
          >
            <i :class="`fas fa-${label.icon}`" />
        </div>
      </div>
      <div class="text-wrapper">
        <div
          v-for="(label, index) in labels"
          :key="index"
          :style="getTextStyle(index)"
          class="label"
        >   
          {{ label.title }} <small class="ms-2 p-0 mt-1"> {{ label.description }}</small>
        </div>
      </div>
    </div>
    <div class="layout-wrapper-2">
      <div class="text-wrapper-2">
        <p
          v-for="(label, index) in labels"
          :key="index"
          class="label-2 text-start"
        >   
        <i :class="`fas fa-${label.icon} me-3 mt-1` " />  {{ label.title }} <small class="ms-2 p-0 mt-1"> {{ label.description }}</small>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>

const labels = [
  {
    icon: 'server',
    title: 'Instalación 100% local',
    description: 'Sin dependencia de la nube.'
  },
  {
    icon: 'shield-halved',
    title: 'Conservación de datos',
    description: 'Durante 5 a 7 años según tipología.'
  },
  {
    icon: 'user-shield',
    title: 'Control de accesos',
    description: 'Con roles y registro de actividad.'
  },
  {
    icon: 'clipboard-check',
    title: 'Sistema auditable',
    description: 'Con trazabilidad completa.'
  },
  {
    icon: 'shield',
    title: 'DORA',
    description: 'Compatible con las exigencias de ciber resiliencia bajo DORA.'
  },
  {
    icon: 'screwdriver-wrench',
    title: 'Actualizaciones del sistema',
    description: 'Supervisadas localmente por el equipo de IT de la entidad.'
  },
  {
    icon: 'user-lock',
    title: 'Privacidad',
    description: 'Entorno cerrado para blindar la confidencialidad de los datos del cliente.'
  }
];

const getLayerStyle = (index) => {
  const total = labels.length
  const h = 100 / total
  const top = index * h

  const x1Left = 50 - ((top) / 100) * 50
  const x1Right = 50 + ((top) / 100) * 50
  const x2Left = 50 - ((top + h) / 100) * 50
  const x2Right = 50 + ((top + h) / 100) * 50

  const clipPath = `polygon(${x1Left}% 0%, ${x1Right}% 0%, ${x2Right}% 100%, ${x2Left}% 100%)`

  return {
    position: 'absolute',
    top: `${top}%`,
    height: `${h}%`,
    width: '100%',
    clipPath,
    backgroundColor: '#65cce3',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '1.4rem',
    borderBottom: '6px solid white'
  }
}

const getTextStyle = (index) => {
  const total = labels.length
  const h = 100 / total
  const top = index * h
  return {
    position: 'absolute',
    top: `${top}%`,
    height: `${h}%`,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '8px'
  }
}
</script>
<style scoped>
.slide-four{
  padding: 100px 0px 50px 0px; 
}
.layout-wrapper {
  justify-content: center;
  gap: 16px;
  align-items: flex-start;
  height: 520px; /* Igual a la altura real del triángulo */
  @media(min-width:1435px){
    display:flex !important;
  }
  @media(max-width:1435px){
    display: none !important;
  }
  .triangle-wrapper {
    position: relative;
    width: 600px;
    aspect-ratio: 1 / 0.866;
    height: 520px; /* Fija altura para sincronizar */
  }
  .text-wrapper {
    position: relative;
    min-width: 800px;
    height: 520px; /* Igual que triángulo para que top % funcione */
  }
  .label {
    font-size: 1.4rem;
    color:#398fa8;
    position: absolute; /* Ya aplicado en JS */
    width: 100%;
    display: flex;
    padding-left: 8px;
    small{
      color : grey;
    }
  }
}
.layout-wrapper-2 {
  justify-content: center;
  gap: 16px;
  align-items: flex-start;
  @media(max-width:1435px) {
      display:flex !important;
  }
  @media(min-width:1435px){
    display: none !important;
  }
  .label-2 {
    font-size: 1.4rem;
    color:#398fa8;
    padding-left: 8px;
    margin: 40px 0px;
    small{
      color : grey;
    }
  }
}
</style>