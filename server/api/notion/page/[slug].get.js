import { Client } from '@notionhq/client'

export default defineEventHandler(async (event) => {

    const slug = event.context.params.slug;
    const notion = new Client({ auth: process.env.NOTION_API_KEY });

    // const page = await notion.pages.retrieve({ slug: slug });
    const search = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: slug
        }
      },
    });
    const page = search.results[0];
    const blocks = await notion.blocks.children.list({ block_id: page.id });

    const post = {};
    post.title = page.properties.Name.title[0].plain_text;
    post.author = page.properties.Assign.people[0].name;
    post.publishedOn = page.properties["Date Created"].date.start;
    post.content = blocks.results;
    return post;

});


