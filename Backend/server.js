const express=require('express')
const app=new express()
const cors=require('cors')
require('dotenv').config();
const model=require('./Models/modelRoutes');
const routes=require('./Routes/adminRoutes')
const PORT= process.env.PORT||3000;
const connectDB=require('./db')

connectDB()
app.use(cors);
app.use(express.json);
app.use('/panel',routes);

app.listen(PORT,()=>{
    console.log(`port is running on http://localhost:${PORT}`)
})