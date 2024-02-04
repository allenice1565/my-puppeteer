module.exports.getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值
}

module.exports.delay = async (time) => {
    await new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}
