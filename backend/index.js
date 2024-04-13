import express from "express"
import dotenv from 'dotenv'
import axios from 'axios'
dotenv.config();
const app= express();
const port= 3000;
const apiKey= process.env.API_KEY;
//allow cors via middleware
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Methods", " GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})
app.get('/getData', async (req,res)=>{
    const location = req.query.place;
    const response = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json`,
        {
          params: {
            key:apiKey ,
            q: location,
            days: 5,
          },
        }
      );
      console.log(response.data)
      res.json(response.data)
})