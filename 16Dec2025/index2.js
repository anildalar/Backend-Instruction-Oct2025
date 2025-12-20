const express = require('express')
const crypto = require('crypto');
const bcrypt = require('bcrypt');


const app = express()
const port = 3000
const SALT_ROUNDS = 10;

const mysql = require('mysql2');

const connection = mysql.createConnection(
  'mysql://root:@localhost:3306/justdial_db2'
);

connection.addListener('error', (err) => {
  console.log(err);
});


// ✅ Enable JSON body parsing
app.use(express.json());

app.get('/', (req, res) => {
  res.status(201).send({ "P":"V" })
})

app.get('/aboutus', (req, res) => {
  res.send('About Us Page!')
})

//object.method(aa1,aa2);
app.post('/api/auth/local/register',async (req,res)=>{
  //req.query
  console.log('req.query >>>.',req.query);
  //req.params
  console.log('req.params >>>.',req.params);
  console.log('req.body >>>.',req.body);

  console.log(req.body.fname);
  let fname = req.body.fname;
  let lname = req.body.lname;
  let roles_id = req.body.roles_id; // Associativity Of Operators
  let username = req.body.username;
  let password = req.body.password;
  //

  //let password_hash = crypto.createHash('sha256').update(req.body.password).digest('hex');
  const password_hash = await bcrypt.hash(password, SALT_ROUNDS);
  // L = R    
  //connection
  // A simple SELECT query
  let sql = `INSERT INTO users (fname,lname,roles_id,username,password) values ('${fname}','${lname}','1','${username}','${password_hash}')`;
  console.log(sql);
  connection.query(
    sql,
    function (err, results) {
      res.status(201).send(results);
      //console.log(results); // results contains rows returned by server
      //console.log(fields); // fields contains extra meta data about results, if available
    }
  );


  
  
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
