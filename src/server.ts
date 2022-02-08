import 'reflect-metadata';
import express from 'express';

const app = express();
const PORT = 3000 || process.env.PORT

app.listen(PORT, () => {
  console.log(`\n \nServer is running in ${PORT} 🚀`)
})