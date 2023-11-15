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
    model: 'gpt-3.5-turbo',
    stream: true,
    temperature: 1,
    messages: [
      {
        role: 'user',
        content: `Imagine you have a LinkedIn profile with the details specified in ${bio}. Generate a single viral zero to hero LinkedIn post for ${bio} on thought leadership based on the contents of Justin Welsh. 
        You must provide valuable advice, tips, and motivational content. Don't mention the name of Justin Welsh in the post.
        You can use emojis in the post. Here are some examples. You can use the examples as an inspiration, and generate your own content. Include some details from ${bio} into the post. 
        Example1
        Whenever you find yourself slipping, remember everyone who underestimated you.

        When you harness negative feelings and turn them into positive energy, you're going to get significantly further.
        
        The Tom Brady effect, if you will.
        
        So, when you're feeling down in the dumps or struggling to continue moving your business forward, do three things:
        
        1. Reflect on Your 'Why': 
        
        Go back to the reason you started. Your core motivation is your anchor – it can pull you back from the brink and give you a renewed sense of purpose.
        
        2. Seek Out Constructive Feedback: 
        
        Reach out to a mentor, a peer, or your audience. Constructive criticism can be a powerful catalyst for growth.
        
        3. Set a Small, Achievable Goal: 
        
        Sometimes, the big picture can be overwhelming. Break it down. Set a small, achievable goal and give it your all. 
        
        Remember, setbacks are not failures, they're just opportunities to come back stronger. 
        
        Push, grow, and let the doubt fuel your drive to succeed.
           
        Example2
        9 Entrepreneurial Lessons from the Netflix documentary, 'Sly' about Sylvester Stallone.

        1. Pursue your passion relentlessly:
        
        "I am not the richest, smartest, or most talented person in the world, but I succeed because I keep going and going and going."
        
        2. Have a mindset of unbridled optimism:
        
        "I believe any success in life is made by going into an area with a blind, furious optimism."
        
        3. Use rejection as a motivator:
        
        "I take rejection as someone blowing a bugle in my ear to wake me up and get going, rather than a signal to retreat."
        
        4. Adaptability in the Face of Challenge:
        
        "Every time I've failed, people had me out for the count, but I always come back."
        
        5. Build a network of loyal people who love you:
        
        "I learned the real meaning of love. Love is absolute loyalty. People fade, looks fade, but loyalty never fades."
        
        6. Develop a high level of persistence:
        
        "It ain't about how hard you hit. It's about how hard you can get hit and keep moving forward."
        
        7. Be a continuous learner:
        
        "Remember the mind is your best muscle... Big arms can move rocks, but big words can move mountains."
        
        8. Don't let failure dictate your mind:
        
        "Success is usually the culmination of controlling failure."
        
        9. Never stop trying to get better:
        
        "I'm always looking for a new challenge. There are a lot of mountains to climb out there. When I run out of mountains, I'll build a new one."
        
        Have you watched it?
        
        What did you think?

        Example3 
        Every person in this world has to "choose their hard." 
 
        Getting fit is hard. Being out of shape is hard. 
         
        Making money is hard. Not making money is hard. 
         
        Starting a business is hard. Being an employee is hard. 
         
        Some of those "hards" have much higher upside while others have limited downside. 
         
        The true challenge isn't avoiding difficult stuff, but rather chasing the kind of "hard" that aligns with your aspirations and yields the greatest possible reward. 
         
        Ask yourself which "hard" propels you toward the life you envision. 
         
        Choose wisely — your future self will thank you. 
        `,
      },
    ],
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
