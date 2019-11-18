//importing modules
const express = require('express')
const app = express()
const port = 4000
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

//set up default mongoose connection
const mongoDB = 'mongodb+srv://Admin:admin@cluster0-bhppl.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser:true});

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

    // parse application/x-www-form-urlencoded
   app.use(bodyParser.urlencoded({ extended: false }))

   // parse application/json
   app.use(bodyParser.json())

   const Schema = mongoose.Schema;

   const recipeSchema = new Schema({
       recipename: String,
       recipecategory: String,
       picture: String,
      ingredients: String,
       method: String,
      images: String
   });
   //const RecipeModel = mongoose.model('RecipeModel', recipeSchema);
   const RecipeModel = mongoose.model('recipe', recipeSchema);

  // app.get('/', (req, res) => res.send('Hello World!'))

   //app.get('/recipeStore', (req, res) => res.sendFile(path.join(_dirname +'/index.html')))//what's this for?

  /*app.get('/whatever', (req, res) => {
    res.send('whatever')
  })*/

//express server
/*app.get('/api/test',(req, res)=>{

    /*RecipeModel.find((error,data)=>{
        console.log(data);
        res.json(data);

    const myRecipes =[];

res.status(200).json(
    {
        recipes: myRecipes,
        message: 'Data Sent'
    });
})*/

app.get('/api/recipes',(req, res)=>{
    RecipeModel.find((error, data)=>{
        res.json({recipes:data});
    })

})

//method that reads a recipe by id from database in node server/express
app.get('/api/recipes/:id', (req, res)=> {//Website possibly should be id
    console.log(req.params.id);

    RecipeModel.findById(req.params.id, (error, data)=>{
        res.json(data);
    })
})

//possibly shouldn't be here - check git solution
app.get('/api/recipes/:id', (req, res, next)=> {//Website possibly should be id
    console.log(req.params.id);

    RecipeModel.findById(req.params.id, (error, data)=>{
        res.json(data);
    })
})

app.put('/api/recipes/:id', (req,res)=>{
    console.log("Edit: " +req.params.id);
    console.log(req.body);

    RecipeModel.findByIdAndUpdate(req.params.id,
        req.body,
        {new:true},
        (error, data)=>{
            res.json(data);
        })
})




app.delete('/api/recipes/:id', (req, res)=>{
    console.log(req.params.id);

    RecipeModel.deleteOne({_id: req.params.id},
       (error, data)=>{
            res.json(data);
       })
})
//Express server 
app.post('/api/recipes', (req,res) =>{
    console.log("Post request successful");
    console.log(req.body.recipename);//possibly uppr case
    console.log(req.body.recipecategory);//as above
    console.log(req.body.picture);//as above
    console.log(req.body.ingredients);
    console.log(req.body.method);
    console.log(req.body.images);

    

    RecipeModel.create({
        recipename: req.body.recipename,
        recipecategory: req.body.recipecategory,
        picture: req.body.picture,
        ingredients: req.body.ingredients,
        method: req.body.method,
        image: req.body.images 
    })
    res.json('Post received');
})



app.listen(port, () => console.log('Example app listening on port ${port}!'))

