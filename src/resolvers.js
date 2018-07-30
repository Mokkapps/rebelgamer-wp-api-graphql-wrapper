import fetch from 'node-fetch';

const WP_BASE_URL = 'https://www.rebelgamer.de/wp-json/wp/v2/';

// Resolvers define the technique for fetching the types in the schema
export const resolvers = {
  Query: {
    posts: async () => {
      const res = await fetch(`${WP_BASE_URL}posts?page=1&per_page=5`);
      const posts = await res.json();

      const queryPosts = [];
      for (const post of posts) {
        const [author, featuredMedia] = await Promise.all([
          fetch(`${WP_BASE_URL}users/${post.author}`),
          fetch(`${WP_BASE_URL}media/${post.featured_media}`),
        ]);

        queryPosts.push({
          id: post.id,
          title: post.title.rendered,
          date: post.date,
          content: post.content.rendered,
          author: author.name,
          imageUrl: featuredMedia.link
        })
      }

      return queryPosts;
    }
  },
};