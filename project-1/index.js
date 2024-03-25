require('dotenv').config()
const express = require('express')
const axiosInstance = require('./axios-custom');
const winstonInstance = require('./winston-custom');
const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.json({ val: "Hello World!" })
});
async function getResponse() {
  await axiosInstance.get('/');
  winstonInstance.info('API called successfully from project-1 to project-2');
}
getResponse();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});