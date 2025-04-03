<template>
  <div class="lg:mt-[10rem] accordion-section">
    <h3 class="ds-h3 mb-8" v-html="title"></h3>
    <div class="ds-p-2 mb-10" v-html="description"></div>
    
    <div class="accordion-container">
      <div 
        v-for="(item, index) in items" 
        :key="index"
        class="accordion-item"
        :class="{ 'border-t': true, 'border-b': index === items.length - 1, 'border-ds-black': true }"
      >
        <button 
          class="accordion-button w-full flex items-center justify-between py-4 text-left"
          :aria-expanded="openIndex === index"
          @click="toggleAccordion(index)"
        >
          <div class="flex items-center">
            <span v-if="item.number" class="ds-p-1 mr-2 !font-semibold">{{item.number}}.</span>
            <span class="ds-p-1 !font-semibold">{{item.title}}</span>
          </div>
          <span class="accordion-icon ds-p-1">{{ openIndex === index ? '−' : '+' }}</span>
        </button>
        
        <div 
          class="accordion-content overflow-hidden transition-all duration-300"
          :style="{ maxHeight: openIndex === index ? 'max-content' : '0px' }"
        >
          <div class="pb-6 pr-8">
            <p class="ds-p-2">{{ item.description }}</p>
            <div class="ds-p-2 render-rich-text" v-html="item.richTextDescription"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    richTextDescription: String,
    items: Array
  },
  data() {
    return {
      openIndex: 0
    };
  },
  watch: {
    items: {
      handler() {
        this.openIndex = 0;
      },
      immediate: true
    }
  },
  methods: {
    toggleAccordion(index) {
      this.openIndex = this.openIndex === index ? -1 : index;
    }
  }
}
</script> 