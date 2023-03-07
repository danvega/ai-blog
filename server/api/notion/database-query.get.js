import { Client } from '@notionhq/client'

export default defineEventHandler(async (event) => {

  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const database = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: 'Status',
      status: {
        equals: 'Done',
      }
    },
    sorts: [
        {
            property: 'Date Created',
            direction: 'descending',
        },
    ],
  });
  const posts = [];

  database.results.forEach((post) => {
    posts.push({
      id: post.id,
      title: post.properties.Name.title[0].plain_text,
      body: '',
      cover: post.properties.Image.files[0]?.file.url,
      slug: post.properties.Slug.rich_text[0].plain_text
    });
  });

  return posts;

})
