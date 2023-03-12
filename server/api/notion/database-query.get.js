import { Client } from '@notionhq/client'
import fs from 'fs';
import fetch from 'node-fetch';

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

    // cover: post.properties.Image.files[0]?.file.url,
    const imgName = post.properties.Image.files[0]?.name;

    posts.push({
      id: post.id,
      title: post.properties.Name.title[0].plain_text,
      slug: post.properties.Slug.rich_text[0].plain_text,
      excerpt: post.properties.Excerpt.rich_text[0].plain_text,
      cover: post.properties.Image.files[0]?.name,
    });
    // the cover image expires after 1 hour so we need to download it
    downloadImage(post.properties.Image.files[0]?.file.url, `./public/images/${imgName}`)
  });

  async function downloadImage(url, filepath) {
    fetch(url)
    .then(
      res =>
        new Promise((resolve, reject) => {
          const dest = fs.createWriteStream(filepath);
          res.body.pipe(dest);
          res.body.on("end", () => resolve(filepath.split("/")[3] + ' was downloaded successfully.'));
          dest.on("error", reject);
        })
    )
    .then(x => console.log(x));
  }

  return posts;

});


