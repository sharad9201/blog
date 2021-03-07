const express = require('express')
const Article = require('./../models/articles')
const router = express.Router()

router.get('/new', async(req, res) => {
  res.render('articles/new')
})

router.post('/', async (req,res)=>{
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown:req.body.markdown
    })
    await article.save()
})
module.exports = router
