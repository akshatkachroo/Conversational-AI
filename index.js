const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();

const configuration = new Configuration({
    organization: "org-SIU2866Ri2cIy7ineq84i5Ex",
    apiKey: "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",
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

const uri = 'mongodb+srv://akshat:akshat@cluster0.pajjo26.mongodb.net/?retryWrites=true&w=majority'

async function connect(){
    try{
        await mongoose.connect(uri)
        console.log("Connect to MongoDB")}

        catch(error){
            console.error(error);
        }
}

connect();

