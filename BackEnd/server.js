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
       website: String,
       ingredients: String
      
      // method: String,
      //images: String
      
   });
   
   const RecipeModel = mongoose.model('recipe', recipeSchema);
 

app.get('/api/recipes',(req, res)=>{
    RecipeModel.find((error, data)=>{
        res.json({recipes:data});
    })

})

/*app.get('/api/recipes/search/:name', (req, res)=>{
    console.log(req.params.name);
    RecipeModel.find({category:req.params.name}, (error,data)=>{
        res.json(data);
    })
})*/

app.get('/api/recipes/search/:recipename', (req, res)=>{
    console.log(req.params.recipename);
    //RecipeModel.find({category:req.params.recipename}, (error,data)=>{
    RecipeModel.find({recipename:req.params.recipename}, (error,data)=>{
        res.json(data);
    })
})

app.get('/api/recipes/:id', (req, res, next)=> {//Website possibly should be id
    console.log(req.params.id);

    RecipeModel.findById(req.params.id, (error, data)=>{
        res.json(data);
    })
})

//method that reads a recipe by id from database in node server/express
app.get('/api/recipes/:id', (req, res)=> {
    console.log("Get: " +req.params.id);

    RecipeModel.findById(req.params.id, (error, data)=>{
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



//Express server 
app.post('/api/recipes', (req,res) =>{
    console.log("Post request successful");
    console.log(req.body.recipename);//possibly uppr case
    console.log(req.body.recipecategory);//as above
    console.log(req.body.picture);//as above
    console.log(req.body.website);
    //console.log(req.body.ingredients);
    //console.log(req.body.method);
    //console.log(req.body.images);

    
    RecipeModel.create({
        recipename: req.body.recipename,
        recipecategory: req.body.recipecategory,
        picture: req.body.picture,
        website: req.body.website
        //ingredients: req.body.ingredients
        //method: req.body.method,
        //image: req.body.images 
        
    })
    res.json('Post received');
})

app.listen(port, () => console.log('Recipe Store app listening on port ${port}!'))

