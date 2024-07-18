const express=require('express')

const app=express();

app.use('/',(req,res)=>{
    res.send('Get request done')
})

app.listen(3000,() => {
    console.log('Server is running on port 3000');
});