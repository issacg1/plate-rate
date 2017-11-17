const postController = {};

postController.index = (req, res) => {
    res.render('posts/post-index', {
        posts: res.locals.posts
    })
};

module.exports = postController;