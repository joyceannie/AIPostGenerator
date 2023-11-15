# AI Post Generator

This is an app to generate viral LinkedIn posts on thought leadership. The app takes the form input to create a prompt, and generates the post. The post is generated using openAI and the Vercel AI SDK with streaming. Few shot learning is used to generate the post. In order to provide the examples for few shot learning, data is collected from viral LinkedIn posts from top entrepreunerial voices. A better approach is to finetune a model to generate the post.



## How To Run
In order to run the project, you should have openAI account. Generate a key and update it in a .env file. Then, you can clone the repo and run the application.

```bash
pnpm run dev
```

Goto `http://localhost:3000` to view the page.


