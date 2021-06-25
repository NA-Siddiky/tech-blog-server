const Blog = require('../model/Blogs')
module.exports.getAllBlog = async (req, res) => {
    res.send('all blog route');
}
module.exports.saveBlog = async (req, res) => {
    try {
        const savedBlog = await Blog.create(req.body);
        return res.status(200).json({
            message: 'success',
            code: 200,
            error: false,
            response: savedBlog,
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports.updateBlog = async (req, res) => {
    res.send('update route');
}
module.exports.deleteBlog = async (req, res) => {
    res.send('delete route');
}

