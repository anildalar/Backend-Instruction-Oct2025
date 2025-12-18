const express = require('express')
const app = express()
const port = 3000

// ✅ Enable JSON body parsing
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/aboutus', (req, res) => {
  res.send('About Us Page!')
})

//object.method(aa1,aa2);
app.post('/api/auth/local/register',(req,res)=>{
  //req.query
  console.log('req.query >>>.',req.query);
  //req.params
  console.log('req.params >>>.',req.params);
  console.log('req.body >>>.',req.body);

  console.log(req.body.fname);
  
  res.status(200).send('Hello From Register Route');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
