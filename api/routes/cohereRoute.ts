import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Request, Response, Router } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

const router = Router();
const key: string = process.env.KEY as string;

interface ContentData {
  content: string;
  length: number;
  tone: string;
  keywords: string;
  audience: string;
  language: string;
}

async function generateContent(data: ContentData): Promise<AxiosResponse | null> {
  const { content, length, tone, keywords, audience, language } = data;
  const prompt: string = `Generate a ${content} of ${length} words with a ${tone} tone for a ${audience} audience. 
  Include the following keywords: ${keywords}. 
  The content should be in ${language}.`;

  const options: AxiosRequestConfig = {
    method: 'POST',
    url: 'https://api.cohere.ai/v1/generate',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `Bearer ${key}`,
    },
    data: {
      truncate: 'END',
      return_likelihoods: 'NONE',
      prompt: prompt,
    },
  };

  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}

router.post('/generateContent', async (req: Request, res: Response) => {
  const data: ContentData = req.body;
  const generatedContent = await generateContent(data);

  if (generatedContent) {
    res.send(generatedContent.data);
  } else {
    res.status(500).send('Failed to generate content');
  }
});

export default router;
