const puppeteer = require('puppeteer')
const { delay } = require('./utils')

const courseName = [
    'Java 基础与应用',
    'Java 语言基础和进阶',
    'Java 原理剖析',
    'Spring 入门',
    'Java 并发编程 78 讲',
    'PostgreSQL 数据库入门基础',
    'Spring Cloud 原理与实战',
    '微软必应Web前端实现详解',
    'HTML5 从入门到进阶',
    'CSS/CSS3 基础',
    'JavaScript基础',
    '全栈Web前端静态页面精讲',
    'ES6-ES8入门到进阶实战',
    'Vue.js 前端框架详解',
    'React 开发基础',
    '黑盒软件测试从入门到精通',
    'Python 快速入门',
    'Selenium3 自动化测试详解',
    '自动化测试工具之Postman',
    'MySQL 基础',
    'JMeter性能测试入门',
    '23讲掌握网络安全与渗透',
    '信息安全系列 BurpSuite',
    'SQL 注入',
    '黑客网络应用（网络侵入应用）',
    'Web安全',
]

const init = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
    })
    // 操作...
    const page = await browser.newPage()
    await page.setViewport({
        width: 1920,
        height: 878,
    })
    await page.setExtraHTTPHeaders({
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36',
    })
    await page.goto('https://psbc.jiker.com/login')
    await delay(1000)
    await login()
    // await browser.close()
}

init()

async function login(page) {
    await page.evaluate(() => {
        const account = document.querySelector(
            'input[placeholder="请输入工号"]'
        )
        const pwd = document.querySelector('input[placeholder="请输入密码"]')
        const submit = document.querySelector('button.login')
        account.value = ''
        account.dispatchEvent(new Event('input'))
        pwd.value = ''
        pwd.dispatchEvent(new Event('input'))
        submit.click()
    })
    await delay(2000)
}
