import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import { isPreview } from "./src/utils/utils";
import netlify from "@astrojs/netlify";
import tailwindcss from "tailwindcss";
import tailwindcssNesting from "tailwindcss/nesting";
import autoprefixer from "autoprefixer";
import vue from "@astrojs/vue";
import cssnano from "cssnano";
import compress from "astro-compress";

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
        "feature_banner.section.02":
          "storyblok/services/FeatureBannerSection02",
        "steps.section.03": "storyblok/services/StepsSection03",
        "cta_banner.section.03": "storyblok/business-case/CtaBannerSection03",
        "text_banner.section.03": "storyblok/business-case/TextBannerSection03",
        "card_grid.section.02": "storyblok/business-case/CardGridSection02",
        "accordion.section.02": "storyblok/business-case/AccordionSection02",
        "card_grid.section.03": "storyblok/business-case/CardGridSection03",
        "form.section.01": "storyblok/contact/FormSection01",
        "contact.section.01": "storyblok/contact/ContactSection01",
        "icon_feature_list.section.01":
          "storyblok/free-resources/IconFeatureListSection01",
        "info_download_section.01":
          "storyblok/free-resources/InfoDownloadSection01",
        "cta_banner.section.04": "storyblok/case-studies/CtaBannerSection04",
        "card_grid.section.04": "storyblok/case-studies/CardGridSection04",
        "hero_banner.section.02":
          "storyblok/case-studies-detail/HeroBannerSection02",
        "stat_metrics.section.01":
          "storyblok/case-studies-detail/StatMetricsSection01",
        "case_study_section.01":
          "storyblok/case-studies-detail/CaseStudySection01",
        "quote_banner.section.01":
          "storyblok/case-studies-detail/QuoteBannerSection01",
        "feature_grid.section.01":
          "storyblok/case-studies-detail/FeatureGridSection01",
        "content_split.section.01":
          "storyblok/case-studies-detail/ContentSplitSection01",
        "content_split.section.02":
          "storyblok/marketplace/ContentSplitSection02",
        "text_banner.section.04":
          "storyblok/marketplace/TextBannerSection04",
        "content_split.section.03":
          "storyblok/marketplace/ContentSplitSection03",
        "form.section.02": "storyblok/marketplace/FormSection02",
        "hero_banner.section.03": "storyblok/about-us/HeroBannerSection03",
        "content_split.section.04": "storyblok/about-us/ContentSplitSection04",
        "story.section.01": "storyblok/about-us/StorySection01",
        "overlap_cards.section.01": "storyblok/about-us/OverlapCardsSection01",
        "team_grid.section.01": "storyblok/about-us/TeamGridSection01",
        "partner.section.02": "storyblok/about-us/PartnerSection02",
      },
    }),
    vue(),
    compress(),
  ],
  build: {
    inlineStylesheets: "never",
  },
  vite: {
    css: {
      postcss: {
        plugins: [
          tailwindcssNesting(),
          tailwindcss({
            config: "./tailwind.config.cjs",
          }),
          autoprefixer(),
          cssnano({
            preset: "default",
          }),
        ],
      },
    },
  },
  ...(isPreview && {
    adapter: netlify(),
    output: "server",
  }),
});
