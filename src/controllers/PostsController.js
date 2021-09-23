const PostsController = module.exports;
const PostsService = require('../services/PostsService');

const BaseError = require('../utils/BaseError');

PostsController.getPosts = async (req, res, next) => {
  try {
    let { start, size } = req.query;
    if (!start || !size) {
      throw new BaseError('Missing start or size query params', 'InvalidParams', 404);
    }

    start = Number(start);
    size = Number(size);
    if (Number.isNaN(start) || Number.isNaN(size)) {
      throw new BaseError('start and size must be numbers', 'InvalidParams', 404);
    }

    const data = await PostsService.getPosts(start, size);

    return res.send(data);
  } catch (error) {
    return next(error);
  }
};
