const Blog = require('../model/Blogs')
module.exports.getAllBlog = async (req, res) => {
    const data = await Blog.find({});
    // res.json(data)
    return res.status(200).json({
        message: 'success',
        code: 200,
        error: false,
        response: data,
    });

}
module.exports.singleBlog = async (req, res) => {
    const { id } = req.params;
    const data = await Blog.findOne({_id: id});
    
    return res.status(200).json({
        message: 'success',
        code: 200,
        error: false,
        response: data,
    });

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
module.exports.updateBlog = async (req, res, next) => {
    const { id } = req.params;
    const blogInfo = req.body;

    try {
        const blog = await Blog.findById({ _id: id });

        if (blog) {
            const updateBlog = await Blog.findByIdAndUpdate(id, blogInfo);

            if (updateBlog) {
                const updatedBlog = await Blog.findById({ _id: id });
                return res.status(200).json({
                    message: 'success',
                    code: 200,
                    error: false,
                    response: updatedBlog,
                });
            }
        }
    } catch (err) {
        next(err);
    }
};
module.exports.deleteBlog = async (req, res) => {
    res.send('delete route');
}

