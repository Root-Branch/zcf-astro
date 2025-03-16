import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { isPreview, isLocal } from "./src/utils/utils";
import netlify from "@astrojs/netlify";

import vue from "@astrojs/vue";

const { STORYBLOK_TOKEN } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

export default defineConfig({
  integrations: [storyblok({
    accessToken: STORYBLOK_TOKEN,
    livePreview: isPreview,
    enableFallbackComponent: isPreview,
    components: {
      page: "storyblok/Page",
      header: "storyblok/Header",
      footer: "storyblok/Footer",
      site_config: "storyblok/SiteConfig",
      hero_banner_section: "storyblok/home-page/HeroBanner",
      mission_statement_section: "storyblok/home-page/MissionStatement",
      dual_card_section: "storyblok/home-page/DualCardSection",
      icon_heading_section: "storyblok/home-page/IconHeadingSection",
      image_banner_section: "storyblok/home-page/ImageBannerSection",
      logo_showcase_section: "storyblok/home-page/LogoShowcaseSection",
      steps_section: "storyblok/home-page/StepsSection",
      benefits_section: "storyblok/home-page/BenefitsSection",
      triple_card_section: "storyblok/home-page/TripleCardSection",
      stats_carousel_section: "storyblok/home-page/StatsCarouselSection",
      card_carousel_section: "storyblok/home-page/CardCarouselSection",
      partner_section: "storyblok/home-page/PartnerSection",
      "hero_banner.section.01": "storyblok/compliance/HeroBannerSection01",
      "text_banner.section.01": "storyblok/compliance/TextBannerSection01",
      "card_feature.section.01": "storyblok/compliance/CardFeatureSection01",
      "card_grid.section.01": "storyblok/compliance/CardGridSection01",
      "list_feature.section.01": "storyblok/compliance/ListFeatureSection01",
      "list_feature.section.02": "storyblok/compliance/ListFeatureSection02",
      "cta_banner.section.01": "storyblok/compliance/CTABannerSection01",
      "cta_banner.section.02": "storyblok/forum/CTABannerSection02",
      "statistics_grid.section.01": "storyblok/forum/StatisticsGridSection01",
      "steps.section.02": "storyblok/forum/StepsSection02",
      "accordion.section.01": "storyblok/forum/AccordionSection01",
      "feature_banner.section.01": "storyblok/forum/FeatureBannerSection01",
      "video.section.01": "storyblok/forum/VideoSection01",
      "testimonial.section.01": "storyblok/home-page/TestimonialSection01",
      "feature_banner.section.02": "storyblok/services/FeatureBannerSection02",
      "steps.section.03": "storyblok/services/StepsSection03",
      "cta_banner.section.03": "storyblok/business-case/CtaBannerSection03",
      "text_banner.section.03": "storyblok/business-case/TextBannerSection03",
      "card_grid.section.02": "storyblok/business-case/CardGridSection02",
      "accordion.section.02": "storyblok/business-case/AccordionSection02",
      "card_grid.section.03": "storyblok/business-case/CardGridSection03",
      "form.section.01": "storyblok/contact/FormSection01",
      "contact.section.01": "storyblok/contact/ContactSection01",
    },
  }), tailwind(), vue()],

  // ...(isLocal && {
  //   vite: {
  //     plugins: [basicSsl()],
  //     server: {
  //       https: true,
  //     },
  //   },
  // }),
  ...(isPreview && {
    adapter: netlify(),
    output: "server",
  }),
});