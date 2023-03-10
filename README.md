## Telegram Bot for Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FPonomareVlad%2FTeleVercelBot&env=TELEGRAM_BOT_TOKEN&envDescription=Telegram%20Bot%20Token%20from%20%40BotFather&project-name=telegram-bot&repo-name=telegram-bot)

### Run locally

Install ngrock via the command line or at https://ngrok.com/

```bash
$ unzip /path/to/ngrok.zip
```

Check that ngrok is installed

```bash
$ ngrok -v
```

Set your authtoken via the command line

```bash
$ ngrok authtoken <you-token>
```

Run localhost in the VSCode terminal 

```bash
npm run dev
```

Run ngrok in the terminal after starting localhost

```bash
$ ngrok http 3000
```

Now you can make some changes in [bot.mjs](bot.mjs)

[Documentation for TeleBot](https://github.com/mullwar/telebot)

### Template structure:

- [api/telegram.mjs](api/telegram.mjs) — Endpoint function for WebHooks
- [api/setWebhook.mjs](api/setWebhook.mjs) — Function for setting WebHook URL

###### P.S. Don't forget to remove or restrict [api/setWebhook.mjs](api/setWebhook.mjs) function before going to production
