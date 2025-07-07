<template>
  <div class="slide-six text-center">
    <h2 class="title" id="architecture">{{ $t('architecture.title') }}</h2>
    <div class="container">
      <div class="row g-4">
        <div 
          class="col-md-6 col-lg-4" 
          v-for="(item, index) in architectureItems" 
          :key="index"
        >
          <div class="p-4 fact-card h-100">
            <div class="fact-icon mb-3" v-html="item.icon"></div>
            <h5 class="fact-header">{{ $t(item.title) }}</h5>
            <p class="fact-text">{{ $t(item.text) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const architectureItems = [
  {
    icon: '<i class="fas fa-cubes"></i>',
    title: 'architecture.items.modularity.title',
    text: 'architecture.items.modularity.text',
  },
  {
    icon: '<i class="fas fa-plug"></i>',
    title: 'architecture.items.integration.title',
    text: 'architecture.items.integration.text',
  },
  {
    icon: '<i class="fas fa-shield-halved"></i>',
    title: 'architecture.items.security.title',
    text: 'architecture.items.security.text',
  },
]
</script>
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