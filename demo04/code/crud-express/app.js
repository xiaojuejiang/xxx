var express=require('express');

var bodyParser=require('body-parser');

var app=express();

app.engine('html',require('express-art-template'));

app.use('/node_modules/',express.static('./node_modules/'));

app.use('/public/',express.static('./public/'));

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.get('/',function(req,res){
	res.render('index.html',{
		fruit:['苹果','梨子',]
	})
})

app.listen(3000,function(){
	console.log('runing 3000 ....')
})