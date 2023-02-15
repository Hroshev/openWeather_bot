import TeleBot from "telebot";
import axios from "axios";

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

bot.on('text', async (msg) => {
    await msg.text.startsWith('/') ? null : await msg.reply.text(`Я не понимаю что ты мне написал! \n@${msg.from.username}: ${msg.text}\n\nОтправь свою геопозицию`)
});

//Command start and help
bot.on(['/start', '/help'], async (msg) => {
    await msg.reply.text('👋')
    await msg.reply.text(`Привет, ${msg.from.first_name}`)
    await msg.reply.text('Отправьте свою геопозицию для получение информации о погоде⛅')
});

//Location
bot.on('location', async (msg) => {
    const openWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${msg.location.latitude}&lon=${msg.location.longitude}&appid=${process.env.API_WETHER}&lang=ru&units=metric`;
    const response = await axios.get(openWeather);
    await msg.reply.text(
        `Погода в городе ${response.data.name}☔ 
        \nТемпература: ${Math.round(response.data.main.temp)}°
        \nЗа окном:  ${response.data.weather[0].description}
        \nВетер: ${response.data.wind.speed} м/c, СВ
        \nВлажность: ${response.data.main.humidity}%
        `)
});

//Send sticker
bot.on('sticker', async (msg) => await msg.reply.text('👍'));

export default bot