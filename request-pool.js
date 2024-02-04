const { delay, getRandomIntInclusive } = require('./utils.js')

module.exports = class RequestPool {
    constructor(poolSize) {
        this.poolSize = poolSize
        this.running = 0
        this.queue = []
    }
    async addRequest(request) {
        await delay(getRandomIntInclusive(0, 1000))
        if (this.running > this.poolSize) {
            await new Promise((resolve) => {
                this.queue.push(resolve)
            })
        }
        this.running++
        const response = await request()
        this.running--
        if (this.queue.length > 0) {
            this.queue.shift()()
        }
        return response
    }
}
