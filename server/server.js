import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import productRouter from './routes/productroutes.js';
import bodyParser from 'body-parser';


const app = express();
const port = process.env.PORT || 4000
connectDB()

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
  origin: ['http://localhost:3000',"*" ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));



// api endpoints

app.use('/api',productRouter)

app.get('/', (req, res)=>{
  res.send("backend working ")
})


app.listen(port,()=>{
  console.log(`server is run http://localhost:${port}`);
})
