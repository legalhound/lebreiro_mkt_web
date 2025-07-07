<template>
  <div class="magnament" id="magnament">
    <div class="container">
      <h2 class="mb-3">{{ $t('magnament.title') }}</h2>
      <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-4 g-4 mt-3">
        <div v-for="(item, index) in items" :key="index" class="col d-flex">
          <div class="topic-card w-100">
            <div>
              <div class="topic-icon">
                <i :class="item.icon"></i>
              </div>
              <div class="topic-title">{{ item.title }}</div>
              <div class="topic-text">{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

const { t } = useI18n()

const items = [
  {
    icon: 'fas fa-share-nodes',
    title: t('magnament.items[0].title'),
    text: t('magnament.items[0].text')
  },
  {
    icon: 'fas fa-note-sticky',
    title: t('magnament.items[1].title'),
    text: t('magnament.items[1].text')
  },
  {
    icon: 'fas fa-users-gear',
    title: t('magnament.items[2].title'),
    text: t('magnament.items[2].text')
  },
  {
    icon: 'fas fa-clipboard-check',
    title: t('magnament.items[3].title'),
    text: t('magnament.items[3].text')
  }
]
</script>
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