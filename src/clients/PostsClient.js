const PostsClient = module.exports;
const axios = require('axios').default;

const BASE_URL = 'https://jsonplaceholder.typicode.com';

PostsClient.getPosts = async () => {
  const url = `${BASE_URL}/posts`;
  const { data } = await axios.get(url);

  return data;
};

PostsClient.getUsers = async () => {
  const url = `${BASE_URL}/users`;
  const { data } = await axios.get(url);

  return data;
};

PostsClient.getComments = async (postId) => {
  const url = `${BASE_URL}/posts/${postId}/comments`;
  const { data } = await axios.get(url);

  return data;
};
