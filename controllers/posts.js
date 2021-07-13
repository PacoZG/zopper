const postsRouter = require("express").Router();

let posts = [];

postsRouter.get(
  "https://jsonplaceholder.typicode.com/posts",
  async (request, response) => {
    response.json(posts);
  }
);

module.exports = postsRouter;
