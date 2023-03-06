export { };

declare global {

  interface Post {
    id: string;
    title: string;
    author: string;
    publishedOn: string;
    content: Block[];
  }

  interface Block {
    object: string;
    id: string;
    parent: {
      type: string;
      page_id: string;
    }
    created_time: string;
    last_edited_time: string;
    created_by: {
      object: string;
      id: string;
    }
    last_edited_by: {
      object: string;
      id: string;
    }
    has_children: boolean;
    archived: boolean;
    type: string;
    heading_1: heading_1 | null;
    heading_2: heading_2 | null;
    heading_3: heading_3 | null;
    paragraph: paragraph | null;
    image: image | null;
    bulleted_list_item: bulleted_list_item | null;
  }

  interface heading_1 {
    rich_text: rich_text[],
    is_toggleable: boolean,
    color: string
  }

  interface heading_2 {
    rich_text: rich_text[],
    is_toggleable: boolean,
    color: string
  }

  interface heading_3 {
    rich_text: rich_text[],
    is_toggleable: boolean,
    color: string
  }

  interface paragraph {
    rich_text: rich_text[],
    color: string
  }

  interface image {
    caption: [],
    type: string,
    external: {
      url: string
    }
  }

  interface rich_text {
    type: string;
    text: {
      content: string;
      link: string | null;
    },
    annotations: {
      bold: boolean;
      italic: boolean;
      strikethrough: boolean;
      underline: boolean;
      code: boolean;
      color: string;
    };
    plain_text: string;
    href: string | null;
  }

  interface bulleted_list_item {
    rich_text: rich_text[]
  }


  interface NotionPage {
    object: string;
    id: string;
    created_time: string;
    last_edited_time: string;
    created_by: {
      object: string;
      id: string;
    };
    last_edited_by: {
      object: string;
      id: string;
    };
      cover: string | null;
      icon: string | null;
      parent: {
        type: string;
        database_id: string;
      };
      archived: boolean;
      properties: {

      };
      url: string;
    }

}
