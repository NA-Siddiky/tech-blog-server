const express = require('express');
const { getAllBlog, saveBlog, updateBlog, deleteBlog, singleBlog } = require('../../controller/blogs');


const router = express.Router();

router.get('/',  getAllBlog);
router.get('/:id', singleBlog);
router.post('/',  saveBlog);
router.put('/:id',  updateBlog);
router.delete('/:id',  deleteBlog);

module.exports = router;