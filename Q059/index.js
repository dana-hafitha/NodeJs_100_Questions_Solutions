const app = express();

app.use(cookieParser('myKey'));

app.get('/set-cookie', (req, res) => {
  res.cookie('sid', '1211234', { signed: true, httpOnly: true, maxAge: 3600000 });
  res.send('Signed cookie set!');
});

app.get('/get-cookie', (req, res) => {
  const sid = req.signedCookies.sid;
  res.send(`Signed cookie sid = ${sid}`);
});

app.listen(4000, ()=> {
  console.log("Server listening on port 4000");
});