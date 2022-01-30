function talkBefore(seconds, say) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(say)
        }, seconds * 1000)
    })
}

talkBefore(3, 'Show')
    .then(say => say.concat('?!?'))
    .then(otherSay => console.log(otherSay))
    .catch(e => console.log(e))