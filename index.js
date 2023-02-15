const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();

const configuration = new Configuration({
    organization: "************************",
    apiKey: "*****************************",
});
const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();
app.use(express.json())
app.use(express.urlencoded ({extended:true}))


app.use(bodyParser.json())
app.use(cors())



mongoose.set('strictQuery', true);

const port = 3080;

/* 
app.post('/',async (req,res)=> {
    const {message} = req.body;
    console.log(message)
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Synonyms of hello",
        max_tokens: 7,
        temperature: 0,
      }); 
   // console.log(response.data.choices[0].text)
    res.json({
        //data: response.data
        data: message, 
    })
});
*/


app.listen(port, ()=> {
    console.log(`Server running on port http://localhost:${port}`);
});

const uri = 'mongodb+srv://***********************************'

async function connect(){
    try{
        await mongoose.connect(uri)
        console.log("Connect to MongoDB")}

        catch(error){
            console.error(error);
        }
}

connect();

