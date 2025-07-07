<template>
  <div class="slide-eight text-center" id="contact">
    <h2>{{ $t('contact.title') }}</h2>
    <p>{{ $t('contact.description') }}</p>
    <div class="row background-blue">
      <form @submit.prevent="sendMail">
        <div class="row">
          <div class="col-12">
            <div class="form mx-auto mt-3 pb-0">
              <div class="row">
                <div class="col-md-6 text-start">
                  <input
                    type="text"
                    v-model="form.name"
                    class="form-control w-100 mt-2"
                    :placeholder="$t('contact.form.name')"
                    required
                  />
                </div>
                <div class="col-md-6 text-end">
                  <input
                    type="text"
                    v-model="form.firstName"
                    class="form-control w-100 mt-2"
                    :placeholder="$t('contact.form.firstName')"
                    required
                  />
                </div>
                <div class="col-12">
                  <input
                    type="text"
                    v-model="form.email"
                    class="form-control w-100 mt-2"
                    :placeholder="$t('contact.form.email')"
                    required
                  />
                </div>
                <div class="col-md-6 text-start">
                  <input
                    type="text"
                    v-model="form.position"
                    class="form-control w-100 mt-2"
                    :placeholder="$t('contact.form.position')"
                  />
                </div>
                <div class="col-md-6 text-end">
                  <input
                    type="text"
                    v-model="form.company"
                    class="form-control w-100 mt-2"
                    :placeholder="$t('contact.form.company')"
                    required
                  />
                </div>
                <div class="col-md-6 text-end">
                  <input
                    type="text"
                    v-model="form.phone"
                    class="form-control w-100 mt-2"
                    :placeholder="$t('contact.form.phone')"
                  />
                </div>
                <div class="col-md-6 text-start">
                  <input
                    type="text"
                    v-model="form.location"
                    class="form-control w-100 mt-2"
                    :placeholder="$t('contact.form.location')"
                  />
                </div>
                <div class="col-12">
                  <textarea
                    class="mt-2"
                    name="comments"
                    rows="4"
                    cols="30"
                    v-model="form.comments"
                    :placeholder="$t('contact.form.comments')"
                  ></textarea>
                </div>
              </div>
              <button type="submit" class="btn btn-primary mt-3 mb-1">
                {{ $t('contact.form.submit') }}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="col-12 text-center">
      <p><small>{{ $t('contact.form.privacyNote') }}</small></p>
    </div>
  </div>
</template>
<script setup>

import { ref } from 'vue'
const { t } = useI18n();
const form = ref({
  name: '',
  firstName: '',
  email: '',
  position: '',
  company: '',
  location: '',
  phone: '',
  comments: ''
})
const isSubmitted = ref(false);

const { send } = useMail()

const sendMail = async () => {
console.log(useMail());
  try {
    const messageText = `
      Nuevo mensaje recibido desde el formulario de contacto de Lebreiro:
      Nombre: ${form.value.firstName} ${form.value.name}
      Email: ${form.value.email}
      Cargo: ${form.value.position}
      Empresa: ${form.value.company}
      Ubicación: ${form.value.location}
      Telefono: ${form.value.phone}
      Comentarios:
      ${form.value.comments}
          `.trim()
    await send({
      subject: `Nuevo mensaje de ${form.value.name} ${form.value.firstName} [Lebreiro]`,
      from:'no-reply@crisalidalabs.com',
      text: messageText,
    })
    alert(t('contact.send'))
      isSubmitted.value = true  
  } catch (error) {
      console.error(error)
    alert(t('contact.error'))
  }
}
</script>
<style>
.slide-eight{
  padding: 50px 0px 100px 0px;
}
.form{
  margin: 20px;
  padding: 20px;
  max-width: 1000px;
} 
.form-control{
  height: 52px;
  width: 100%;
  border-color:#398fa8 !important;
  border-radius: none;
  outline: none !important;
  box-shadow: none !important;
}
textarea{
  border-radius: 7px !important;
  padding: 10px;
  border-color:#398fa8 !important;
  width: 100%;
  outline: none !important;
  box-shadow: none !important;
}
.background-blue{
  background-color:#398fa8 !important;
}
.btn-primary{
background-color: #65cce35a!important;
  color: white;
  border: none !important;
  transition: all 0.3s ease;
  box-shadow:
    0 10px 15px rgba(2, 101, 129, 0.823),   /* sombra principal hacia abajo */
    0 4px 6px rgba(2, 101, 129, 0.823);     /* sombra secundaria más difusa */
}
.btn-primary:hover {
  background-color:#65cce34a  !important;
  transform: translateY(-3px);
}
</style>