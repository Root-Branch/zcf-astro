<template>
  <div class="lg:mt-[10rem] accordion-section">
    <h3 class="ds-h3 mb-8" v-html="title"></h3>
    <div class="ds-p-2 mb-10" v-html="description"></div>

    <div class="accordion-container">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="accordion-item"
        :class="{
          'border-t': true,
          'border-b': index === items.length - 1,
          'border-ds-black': true,
        }"
      >
        <button
          class="accordion-button w-full flex items-center justify-between py-4 text-left"
          :aria-expanded="openIndex === index"
          @click="toggleAccordion(index)"
        >
          <div class="flex items-center">
            <span v-if="item.number" class="ds-p-1 mr-2 !font-semibold"
              >{{ item.number }}.</span
            >
            <span class="ds-p-1 !font-semibold">{{ item.title }}</span>
          </div>
          <span class="accordion-icon ds-p-1">{{
            openIndex === index ? "−" : "+"
          }}</span>
        </button>

        <div
          class="accordion-content overflow-hidden transition-all duration-200"
          :style="{ maxHeight: getMaxHeight(index) }"
          ref="accordionContents"
        >
          <div class="pb-6 pr-8">
            <p class="ds-p-2">{{ item.description }}</p>
            <div
              class="ds-p-2 accordion-rich-text"
              v-html="item.richTextDescription"
            ></div>
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
    items: Array,
  },
  data() {
    return {
      openIndex: 0,
      contentHeights: [],
    };
  },
  computed: {
    itemCount() {
      return this.items?.length || 0;
    }
  },
  methods: {
    toggleAccordion(index) {
      this.openIndex = this.openIndex === index ? -1 : index;
      this.$nextTick(() => {
        this.measureContentHeights();
      });
    },
    getMaxHeight(index) {
      if (this.openIndex === index) {
        return `${this.contentHeights[index] || 200}px`;
      }
      return '0px';
    },
    measureContentHeights() {
      this.$nextTick(() => {
        if (!this.$refs.accordionContents) return;
        
        this.contentHeights = Array(this.itemCount).fill(0);
        
        this.$refs.accordionContents.forEach((content, index) => {
          if (content && content.children && content.children[0]) {
            this.contentHeights[index] = content.children[0].offsetHeight;
          } else {
            this.contentHeights[index] = 200;
          }
        });
      });
    }
  },
  watch: {
    items: {
      handler() {
        this.openIndex = 0;
        this.$nextTick(() => {
          this.measureContentHeights();
          setTimeout(() => this.measureContentHeights(), 100);
        });
      },
      immediate: true,
    },
  },
  mounted() {
    this.measureContentHeights();
    
    setTimeout(() => {
      this.measureContentHeights();
    }, 50);
    
    window.addEventListener("resize", this.measureContentHeights);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.measureContentHeights);
  },
};
</script>

<style>
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: max-height;
}

.accordion-button {
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

.accordion-rich-text ul {
  list-style: disc !important;
  padding-left: 1.5rem !important;
}

.accordion-rich-text ul li {
  list-style-type: disc !important;
  padding-bottom: 0.2rem !important;
}
</style>
