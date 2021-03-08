const express = require('express')

const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/blog',
    { useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex:true }
        )

app.set('view engine','ejs')

// excessing the database with data from the articles
app.use(express.urlencoded({ extended:false}))

app.get('/', async(req,res)=>{
    const articles = await Article.find().sort({created_at:'desc'})
    res.render('articles/index',{articles: articles})
})
//this comes down always before others urlencoder
app.use('/articles',articleRouter)
app.listen(3000)