import dotenv from 'dotenv'
import { Telegraf, Markup } from 'telegraf'
import { message } from 'telegraf/filters'

dotenv.config()

const webAppUrl = 'https://vk.com/'

const bot = new Telegraf(process.env.API_KEY_BOT)

bot.command('start', ctx => {
  ctx.reply(
    'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
    Markup.keyboard([Markup.button.webApp('Отправить сообщение', `${webAppUrl}/feedback`)]),
  )
})

bot.launch()

export { bot }
