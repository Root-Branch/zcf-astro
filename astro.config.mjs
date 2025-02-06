import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { isPreview, isLocal } from "./src/utils/utils";
import netlify from "@astrojs/netlify";

const { STORYBLOK_TOKEN } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: STORYBLOK_TOKEN,
      livePreview: isPreview,
      enableFallbackComponent: isPreview,
      components: {
        page: "storyblok/Page",
        header: "storyblok/Header",
        footer: "storyblok/Footer",
        hero_banner_section: "storyblok/HeroBanner",
        mission_statement_section: "storyblok/MissionStatement",
        dual_card_section: "storyblok/DualCardSection",
        icon_heading_section: "storyblok/IconHeadingSection",
        image_banner_section: "storyblok/ImageBannerSection",
        logo_showcase_section: "storyblok/LogoShowcaseSection",
        steps_section: "storyblok/StepsSection",
        benefits_section: "storyblok/BenefitsSection",
        triple_card_section: "storyblok/TripleCardSection",
        stats_carousel_section: "storyblok/StatsCarouselSection",
        card_carousel_section: "storyblok/CardCarouselSection",
        partner_section: "storyblok/PartnerSection",
        site_config: "storyblok/SiteConfig",
        "hero_banner.section.01": "storyblok/compliance/HeroBannerSection01",
        "text_banner.section.01": "storyblok/compliance/TextBannerSection01",
        "card_feature.section.01": "storyblok/compliance/CardFeatureSection01",
        "card_grid.section.01": "storyblok/compliance/CardGridSection01",
        "list_feature.section.01": "storyblok/compliance/ListFeatureSection01",
        "list_feature.section.02": "storyblok/compliance/ListFeatureSection02",
        "cta_banner.section.01": "storyblok/compliance/CTABannerSection01",
      },
    }),
    tailwind(),
  ],

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
