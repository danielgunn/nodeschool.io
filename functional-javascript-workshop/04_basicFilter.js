module.exports = 
    messages => messages.filter(
        mo => mo.message.length <= 50).map(
            mo => mo.message)