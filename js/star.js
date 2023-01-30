function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const starCount = 100
let result = ""
for(let i = 0; i < starCount; i++){
    result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px #fff,`
}
console.log(result.substring(0, result.length - 1))
