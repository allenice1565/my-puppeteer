const axios = require('axios')
const { delay } = require('./utils.js')
const RequestPool = require('./request-pool.js')

const pool = new RequestPool(3)

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
const searchCourse = async (name) => {
    const url = 'https://psbc.jiker.com/search?key=' + encodeURIComponent(name)
    return await pool.addRequest(() => axios.get(url))
}
