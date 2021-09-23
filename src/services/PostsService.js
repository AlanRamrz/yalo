const PostsService = module.exports;
const BlueBird = require('bluebird');
const PostsClient = require('../clients/PostsClient');

let posts = [];
let users = [];

(async () => {
  posts = await PostsClient.getPosts();
  users = await PostsClient.getUsers();
})();

PostsService.getPosts = async (start, size) => {
  try {
    const filteredPosts = posts.slice(start, size + start);

    const res = await BlueBird.map(
      filteredPosts,
      async (post) => {
        const user = users.find((it) => it.id === post.userId);
        const comments = await PostsClient.getComments(post.id);

        return { ...post, user, comments };
      },
      { concurrency: 5 },
    );

    return res;
  } catch (error) {
    console.log(error);

    throw error;
  }
};
