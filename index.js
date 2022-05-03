const express = require("express")
const app = express()

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send("<h1>"+'oi'+"</h1>")
})

app.post('/soma', function (req, res) {
    var body = req.body;
    var resultado = soma(body.a, body.b);
    
    res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
  });

  app.post('/multiplicar', function (req, res) {
    var body = req.body;
    var resultado = multiplicar(body.a, body.b);
    
    res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`);
  });

  app.post('/dividir', function (req, res) {
    var body = req.body;
    var resultado = dividir(body.a, body.b);
    
    res.send(`O resultado da divisão de ${body.a} e ${body.b} é ${resultado}`);
  });

  app.post('/subtracao', function (req, res) {
    var body = req.body;
    var resultado = subtracao(body.a, body.b);
    
    res.send(`O resultado da subtração de ${body.a} e ${body.b} é ${resultado}`);
  });

  function soma(a, b) {
    return a + b;
  }
  
  function multiplicar(a,b){
      return a*b;
  }

  function dividir(a,b){
      return a/b;
  }

  function subtracao(a,b){
      return a-b;
  }


app.listen(5570,function(erro){
    if(erro){
        console.log('erro ao iniciar o servidor')
    }else{
        console.log('servidor iniciado')
    }
})


  



app.get("/primo/:numPrimo",function(req,res){
    var n = req.params.numPrimo
    var cont = 0
    for(var i = 1;i<=n;i++){
        if(n%i==0){
            cont++
        }
    }
    if(cont==2){
        res.send("<h1>o número "+n+" é primo</h1>")
    }else{
        res.send("<h1>o número "+ n+ ' não é primo </h1>')
    }
})


app.get("/numero/:num?",function(req,res){

    var n = req.params.num
    if(n){
        if(n%2==0){
            res.send(" <h1>o número é par</h1> ")
        }else{
            res.send(" <h1>o número é impar</h1> ")
        }
    }else{
        res.send('numero não foi recebido')
    }
})


app.get("/celcius/:temp",function(req,res){
    var t = req.params.temp
    var c = ((t*1.8)+32).toFixed(2)
    res.send("<h1>"+t+" Celsius em Fahrenheit é "+c+"</h1>")
})