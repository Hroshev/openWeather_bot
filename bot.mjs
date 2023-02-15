import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

bot.on(['/start', '/hellp'], async (msg) => {
    await msg.reply.photo('https://www.freeiconspng.com/uploads/black-cat-png-13.png')
    await msg.reply.text('Добро пожаловать, отправьте свою геопозицию для получения информации о погоде')
});

bot.on('text', msg => msg.reply.text(msg.text))

export default bot
