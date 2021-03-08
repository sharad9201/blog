const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')
const createDomPurifier = require('dompurify')
const { JSDOM }

const articleSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    markdown:{
        type: String,
        required: true
    },
    created_at:{
        type: Date,
        default: Date.now
    },
    /// changes the url id to unslugies or better than usuall
    slug: {
        type: String,
        required: true,
        unique: true
    }

})
articleSchema.pre('validate',function(next){
    if(this.title){
        this.slug = slugify(this.title, {lower: true, strict: true})
    }
    next()
})

module.exports = mongoose.model('Article',articleSchema)