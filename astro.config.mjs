// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { storyblok } from '@storyblok/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: 'xMsYkQfQhr5mBRlTWHXQGQtt',
      bridge: true, // enables the Visual Editor connection
      components: {
        hero_section: 'storyblok/HeroSection',
        feature_cards: 'storyblok/FeatureCards',
        card: 'storyblok/Card',
        cta_banner: 'storyblok/CtaBanner',
        site_header: 'storyblok/SiteHeader',
        site_footer: 'storyblok/SiteFooter',
        nav_link: 'storyblok/NavLink',
        footer_column: 'storyblok/FooterColumn',
        page: 'storyblok/Page',
      },
      apiOptions: {
        region: 'eu', // change to 'us' if your Storyblok space was created in the US
      },
    }),
  ],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});
