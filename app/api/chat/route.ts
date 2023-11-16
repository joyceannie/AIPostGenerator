import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// Set the runtime to edge for best performance
export const runtime = 'edge';

export async function POST(req: Request) {
  const { bio } = await req.json();

  // Ask OpenAI for a streaming completion given the prompt
  const response = await openai.createChatCompletion({
    model: 'ft:gpt-3.5-turbo-0613:personal::8LRsihbM',
    stream: true,
    temperature: 1,
    messages: [
      {
        role: 'user',
        content: `Create a viral post on thought leadership for a user. You can use emojis in the post. 
        Include tips, tricks, or other resources that you think might help. 
        The generated post should have at least 100 words.
        You should end your post by a sentence asking to follow a linkedin profile. The linkedin profile should be displayed in the form of a hypertext.
        linkedin profile: """
        ${bio}
        """
        `,
      },
    ],
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
