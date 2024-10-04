import initKnex from "knex";
import configuration from "../knexfile.js"
import express from "express";

const app=express();
const PORT=process.env.PORT||5050;
const knex=initKnex(configuration);


app.use(express.json());

app.get('/users', async (req, res) => {
  try {
    const users = await knex.select('*').from('users');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users' });
  }
});

app.post('/users', async (req, res) => {
  const { name } = req.body;
  try {
    const [id] = await knex('users').insert({ name });
    res.status(201).json({ id, name });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});