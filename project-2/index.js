require('dotenv').config()
const express = require('express')
const axios = require('axios');
const bunyan = require('./bunyan-custom');
const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.json({ val: 'Hello World!' });
});
async function defaultCall() {
  try {
    const res = await axios.get(process.env.BASE_URL)
    console.log('called');
    bunyan.info(`API called successfully,  from service: project-2 to service: project-1 `);
  } catch (err) {
    console.log(err);
  }
}
defaultCall();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});