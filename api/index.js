import express from 'express';
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({ apiKey: String(process.env.OPENAI_API_KEY) });

const app = express();

app.use(express.json());

async function generatePrompt(userInput) {
  const completion = await openai.chat.completions.create({
    messages: [{ "role": "system", "content": "You are a helpful assistant. Give back the response in jsx format and use jsx syntax, ie use <br/> tags for \n (new line character). " },
    { "role": "user", "content": userInput }],
    model: "gpt-3.5-turbo",
  });

  return(completion.choices[0]);
}

app.post('/api/post', async (req, res) => {
  const { userInput } = req.body;
  const output = await generatePrompt(userInput);
  res.status(200).json(output);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
