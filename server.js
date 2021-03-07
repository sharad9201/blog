const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/blog',
    { useNewUrlParser: true,useUnifiedTopology: true }
        )

app.set('view engine','ejs')

// excessing the database with data from the articles
app.use(express.urlencoded({ extended:false}))

app.get('/',(req,res)=>{
    const articles = [{
        title: 'Test Article',
        created_at: new Date(),
        description: 'text description'
    },
    {
        title: 'Test Article2',
        created_at: new Date(),
        description: 'text description'
    }]

    res.render('articles/index',{articles: articles})
})
//this comes down always before others urlencoder
app.use('/articles',articleRouter)
app.listen(3000)