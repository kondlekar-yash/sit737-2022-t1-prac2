var express = require("express")
var bodyParser=require('body-parser')
app = express();
// we set the port programmatically, in case we need to change it later

app.use(bodyParser.urlencoded({
     extended: true
 }));
var port = 7000;
//this is where we are going to getch our html from
var root = '/public'

const log = require("log");
log("Server started");

//tell express to use the static middleware,
app.use(express.static(__dirname + root));
//start the app and listen to the port

app.get('/find', (req,res) =>{
    log("find route called")
    var n1, n2, op;
    console.log(req.params)
    n1 = req.params.n1
    n2 = req.params.n2
    op = req.params.op
    var calc = 0;
    switch(op){
        case "+": calc = n1+n2; break;
        case "-": calc = n1-n2; break;
        case "*": calc = n1*n2; break;
        case "/": calc = n1/n2; break;
        default: break;
    }
    res.send("Answer is: " + calc)
})

app.listen(port);

// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/public'));
// app.get("/test",function(request,response){
//     var param=request.query.username
//     console.log('Get requested by '+param)
//     response.send('Thank you for requesting our Get Service')
// })
// app.post('/test',function(request,response){
//     console.log(request.body)
//     var data=request.body;
//     console.log('Post requested, here is the data :'+data)
//     response.send('Thank you for requesting our Post Service')
// })