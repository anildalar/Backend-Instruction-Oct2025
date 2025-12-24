const express = require('express')
const crypto = require('crypto');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


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
  res.status(201).send({ "P": "V" })
})

app.get('/aboutus', (req, res) => {
  res.send('About Us Page!')
})

app.get('/anil', (req, res) => {
  res.send('Hello Anil')
})

//object.method(aa1,aa2);
app.post('/api/auth/local/register', async (req, res) => {
  //req.query
  console.log('req.query >>>.', req.query);
  //req.params
  console.log('req.params >>>.', req.params);
  console.log('req.body >>>.', req.body);

  console.log(req.body.fname);
  let fname = req.body.fname;
  let lname = req.body.lname;
  let roles_id = req.body.roles_id; // Associativity Of Operators
  let username = req.body.username;
  let password = req.body.password;
  //

  //let password_hash = crypto.createHash('sha256').update(req.body.password).digest('hex');
  //const password_hash = await bcrypt.hash(password, SALT_ROUNDS);
  const password_hash = crypto.createHash('md5').update(password).digest('hex');
  // L = R    
  //connection
  // A simple SELECT query
  let sql = `INSERT INTO users (fname,lname,roles_id,username,password,createdAt,updatedAt) values ('${fname}','${lname}','1','${username}','${password_hash}',NOW(),NOW())`;
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

//object.method(aa1,aa2);
//This is my login API
app.post('/api/auth/local', (req, res) => {
  console.log(req.body);
  let uname = req.body.identifier;
  let pass = req.body.password;
  console.log(uname);
  let sql1 = `select * from users where username='${uname}'`;
  console.log(sql1);
  // I want to execute this query
  connection.query(sql1, (err, results) => {
    //1. First Check the username
    console.log(results);
    if (results.length == 0) {
      res.status(403).send({ 'msg': "Invalid Credentials1" });
    } else {
      //res.status(200).send({'msg':"Username is correct"});
      //2. Second Check the password
      let password_hash = crypto.createHash('md5').update(pass).digest('hex');
      let sql2 = `select * from users where username='${uname}' and  password='${password_hash}'`;
      console.log(sql2);
      connection.query(sql2, (err, results) => {
        //1. First Check the username
        if (results.length == 0) {
          res.status(403).send({ 'msg': "Invalid Credentials" });
        } else {
          console.log(results);
          console.log(results[0].id);
          //var token = jwt.sign({ "id": results[0].id,"username": uname, }, 'OKLABS');
          var token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 180),
            data: { "id": results[0].id, "username": uname, }
          }, 'secret');
          let response = {
            "jwt": token,
            "user": {
              "id": results[0].id,
              "username": uname,
              "createdAt": results[0].createdAt,
              "updatedAt": results[0].updatedAt
            }
          }
          res.status(200).send(response);
        }
      })
    }

  });

  //console.log(pass);

  //res.send(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
