<template>
  <div>
    <!-- Progress Image -->
    <div class="flex justify-center mb-16">
      <img
        :src="currentStep.progress_image.filename"
        :alt="currentStep.progress_image.alt"
        class="max-w-[500px] w-full"
      />
    </div>

    <!-- Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16">
      <!-- Left Column - Content -->
      <div class="flex flex-col justify-between h-full">
        <div>
          <p class="ds-h2 text-ds-red-500 mb-4">{{ currentStep.number }}</p>
          <h2 class="ds-h3 mb-6" v-html="currentStep.title"></h2>
          <div
            class="ds-p-2 mb-12 lg:mb-24"
            v-html="currentStep.description"
          ></div>
        </div>

        <!-- Navigation Buttons (Desktop Only) -->
        <div class="mt-[3rem] hidden lg:flex flex-col sm:flex-row gap-4">
          <button
            v-if="currentIndex > 0"
            @click="prevStep"
            type="button"
            class="ds-button px-[15px] py-[10px] md:px-[2rem] md:py-[0.8rem] rounded-full w-full sm:w-auto border-2 border-ds-red-500 text-ds-red-500 hover:bg-ds-red-500/5"
          >
            Previous step: {{ steps[currentIndex - 1].name }}
          </button>

          <button
            v-if="currentIndex < steps.length - 1"
            @click="nextStep"
            type="button"
            class="ds-button px-[15px] py-[10px] md:px-[2rem] md:py-[0.8rem] rounded-full w-full sm:w-auto bg-ds-red-500 text-white hover:opacity-90"
          >
            Next step: {{ steps[currentIndex + 1].name }}
          </button>
        </div>
      </div>

      <!-- Right Column - Accordions -->
      <div class="flex items-start">
        <AccordionVue
          :title="currentStep.accordions[0].title"
          :description="currentStep.accordions[0].description"
          :items="currentStep.accordions[0].items"
        />
      </div>
    </div>

    <!-- Navigation Buttons (Mobile Only) -->
    <div class="flex lg:hidden flex-row gap-4 mt-8">
      <button
        v-if="currentIndex > 0"
        @click="prevStep"
        type="button"
        class="ds-button px-[15px] py-[10px] md:px-[2rem] md:py-[0.8rem] rounded-full w-[30%] sm:w-auto border-2 border-ds-red-500 text-ds-red-500 hover:bg-ds-red-500/5"
      >
        Previous step: {{ steps[currentIndex - 1].name }}
      </button>

      <button
        v-if="currentIndex < steps.length - 1"
        @click="nextStep"
        type="button"
        class="ds-button px-[15px] py-[10px] md:px-[2rem] md:py-[0.8rem] rounded-full w-[30%] sm:w-auto bg-ds-red-500 text-white hover:opacity-90"
      >
        Next step: {{ steps[currentIndex + 1].name }}
      </button>
    </div>
  </div>
</template>

<script>
import AccordionVue from "./AccordionVue.vue";

export default {
  components: {
    AccordionVue,
  },
  props: {
    steps: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    currentStep() {
      return this.steps[this.currentIndex];
    },
  },
  methods: {
    nextStep() {
      if (this.currentIndex < this.steps.length - 1) {
        this.currentIndex++;
      }
    },
    prevStep() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
  },
};
</script>
