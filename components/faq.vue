<template>
  <div class="slide-seven text-center" id="faq">
    <h2>Frequently Asked Questions</h2>
    <div class="container">
      <p>Respondemos las principales dudas de nuestros clientes potenciales, sobre todo para entornos regulados</p>
      <div class="accordion" id="faqAccordion">
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading1">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
              ¿Necesito conexión a Internet para usar LesterBot?
            </button>
          </h3>
          <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              No. LesterBot opera completamente en local (on-premise). No requiere nube ni envío de datos a terceros.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading2">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
              ¿Es compatible con otros sistemas de grabación o CRM?
            </button>
          </h3>
          <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Sí. Se puede adaptar mediante conectores a CRM internos, gestores documentales o plataformas de call center.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading3">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
              ¿Podemos revisar solo llamadas del equipo comercial?
            </button>
          </h3>
          <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Sí. Puede configurarse por roles, equipos o productos, ajustando qué comunicaciones se monitorizan y archivan.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading4">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
              ¿Quién puede acceder a la información guardada?
            </button>
          </h3>
          <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Solo el personal autorizado por la entidad. Todos los accesos quedan registrados y auditados.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading5">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
              ¿Qué pasa si cambia la normativa?
            </button>
          </h3>
          <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              LesterBot se actualiza periódicamente y permite integrar nuevas exigencias normativas sin cambiar el entorno de trabajo.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading6">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
              ¿Está preparado para los requisitos de ciberresiliencia de DORA?
            </button>
          </h3>
          <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Sí. Su arquitectura on-premise permite cumplir con los requisitos de soberanía, aislamiento y respuesta exigidos por DORA.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading7">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
              ¿Puede el sistema funcionar en un entorno multientidad o multicanal?
            </button>
          </h3>
          <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Sí. LesterBot permite crear entornos segmentados, independientes o jerarquizados para estructuras con múltiples marcas o divisiones.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading8">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
              ¿Qué garantías ofrece ante una inspección de CNMV o revisión judicial?
            </button>
          </h3>
          <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              El sistema permite entregar expedientes completos con marca de tiempo, conservación legal y sin manipulación. Esto reduce riesgo reputacional y jurídico.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading9">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
              ¿El sistema sirve para conservar pruebas en caso de reclamaciones o inspecciones?
            </button>
          </h3>
          <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Sí. LesterBot permite exportar de forma rápida y estructurada la información necesaria para CNMV, auditoría interna o defensa legal.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading10">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
              ¿Puedo limitar el acceso a las grabaciones por rol o por jerarquía interna?
            </button>
          </h3>
          <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Sí. El sistema incorpora control por perfiles y trazabilidad de consulta según estándares jurídicos y auditoría.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>
<style scoped>
.slide-seven{
  padding: 80px 0px 50px 0px;
}
.accordion {
  h3> button{
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color:#65cce3!important;
    font-weight: 600;
  }
  .accordion-body{
    text-align: left !important;
  }
}
.accordion-button:focus{
  box-shadow: none !important;
}
.accordion-button:not(.collapsed){
  background-color: #e5e5e5 !important; 
}
</style>