const http = require('http')
const fs = require('fs');
const { send } = require('process');
function run(a,b){
    const blue = a.replace("Enter Joke Here!!",b.joke);
    console.log(blue)
    return blue;
}
const page = fs.readFileSync('./index.html' , 'UTF-8')

const server = http.createServer((req , res) => {
    if(req.url == '/'){
        (async function(){
            const data = await fetch('https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Spooky?type=single')
            .then(response => response.json())
            .then(dataa => {
                const newdata = run(page,dataa);
                res.end(newdata);
            });
        })()
        res.end(page)
    }
})


server.listen(3000 , '127.0.0.1' , (err) => {
    console.log('server running on port 3000')
})