import { Client } from '@notionhq/client'

export default defineEventHandler(async (event) => {

  if(event.node.req.method === 'GET') {
    const pageId = event.context.params.id;
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const page = await notion.pages.retrieve({ page_id: pageId });
    const blocks = await notion.blocks.children.list({ block_id:pageId });
    const post = {};
    post.title = page.properties.Name.title[0].plain_text;
    post.author = page.properties.Assign.people[0].name;
    post.publishedOn = page.properties["Date Created"].date.start;
    post.content = blocks.results;
    return post;
  }

});


