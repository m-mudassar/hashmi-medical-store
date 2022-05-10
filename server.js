const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const loginRouter = require('./routes/login/login.router');
const registerRouter = require('./routes/register/register.router');

const app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('login');
});

app.use('/login', loginRouter);
app.use('/register', registerRouter);

app.listen(PORT, ()=>{
  console.log(`Listening on PORT ${PORT} ...`)
}); 

