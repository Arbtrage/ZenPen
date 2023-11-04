import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Request, Response, Router } from 'express';
import * as dotenv from 'dotenv'
dotenv.config()

const router = Router();
const key = process.env.KEY as string;

async function generateContent(): Promise<AxiosResponse | null> {

  const prompt = `"Generate a [Content Type] of [Word Count or Length] words with a [Tone and Style] for a [Audience] audience. 
  Include the following keywords: [Keywords]. 
  The content should be in [Language]. 
  Please use the following SEO settings - meta title: [Meta Title], meta description: [Meta Description]. 
  The structure should follow the [Content Structure] template. 
  Feel free to include images and media files. 
  [Advanced Settings] are available for fine-tuning the content generation algorithm. 
  After generating the content, please provide a 
  live preview and allow for [Revision and Editing] before finalizing. 
  Once satisfied, deliver the content in [Content Delivery] format."`

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
      prompt: 'Please explain to me how LLMs work',
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
  console.log(key)
  const data = await generateContent();
  if (data) {
    res.send(data.data);
  } else {
    res.status(500).send('Failed to generate content');
  }
});

export default router;
