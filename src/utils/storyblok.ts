import { useStoryblokApi } from '@storyblok/astro'

export async function getGlobalContent() {
  const storyblokApi = useStoryblokApi()

  const { data } = await storyblokApi.get('cdn/stories/site-config', {
    version: 'draft',
    resolve_relations: 'news_grid.section.01.news_articles',
  })

  return {
    header: data.story.content.header[0],
    footer: data.story.content.footer[0]
  }
}
