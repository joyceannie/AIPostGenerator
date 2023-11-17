# AI Post Generator

This is an application to generate viral LinkedIn posts on thought leadership. The app takes the form input to create a prompt, and generates the post. The post is generated using [openAI](https://openai.com/api/). Initially, the post was created using zero shot learning. Then, few shot learning was tried. In order to provide the examples for few shot learning, data is collected from viral LinkedIn posts from top entrepreneurial voice  Justin Welsh. Later on, a finetuned a model was tried. The final version is using a finetuned model. The application is deployed using [Vercel AI SDK](https://sdk.vercel.ai/docs).

![alt text][logo]

[logo]: https://github.com/joyceannie/AIPostGenerator/blob/main/public/screenshot.png "Screenshot of the application"

## How To Run
In order to run the project, you should have openAI account. Generate a key and update it in a .env file. Then, you can clone the repo and run the application.

```bash
pnpm run dev
```

Goto `http://localhost:3000` to view the page.

## Futrue Works  

* The quality of the output depends on the prompt used. The prompt was edited several times to improve the outputs generated. This can be further improved.

* As of now, we are using a finetuned model which was trained using 30 data points. The model can be improved further by finetuning using more data.

* As of now, only human evaluation is done for the model. A better approach is to use a hybrid evaluation model.   

