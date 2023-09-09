const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

// app.set('views' , path.join(__dirname ,))
const public = path.join(__dirname , '/path')
app.set('view engine' , 'hbs')
app.use(express.static('public'))
app.set('/css' , path.join(__dirname , '/public/css'))
app.set('/script' , path.join(__dirname , '/public/script'))
hbs.registerPartials(__dirname + '/views/partails')


async function gofetch(myurl){
    let dets
    const fet = await fetch(`${myurl}`)
    .then(response => response.json()).then(async(data) => {
    dets = await data
    })
    return dets
}


app.get('/' , async (req , res )=> {
        res.redirect('/jokes') 
})

app.get('/jokes' , async (req , res) => {
    const dets = await gofetch('https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Spooky?type=single')
    res.render('index' , {
        heading:'JOKE',
        type:'jokes',
        content : dets.joke
    })
})

app.get('/quotes' , async (req , res) => {
    const dets = await gofetch('https://api.quotable.io/random')
        res.render('index' , {
            heading:'QUOTES',
            type:'quotes',
            content : dets.content,
            btnText : 'Quote'
        })
})

let num = 0

app.get('/news' , async (req , res) => {
    const dets = await gofetch('https://newsapi.org/v2/everything?q=technology&sortBy=publishedAt&apiKey=262614d1bca940d5a405fed863671f27')
    console.log(dets.articles.length)
    if(num == dets.articles.length){
        num = 0
    }
    num+=1
        res.render('index' , {
            heading:'NEWS',
            type:'news',
            content : dets.articles[num].description,
            btnText : 'news'
        })
})

app.listen(3000 , () => {
    console.log('app listning to port 3000')
})
