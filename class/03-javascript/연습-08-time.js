let time = 10
// undefined
setInterval (function() {
    if(time >= 0) {
    console.log(time)
    time = time - 1
    }    
},1000)
2
VM921:3 10
VM921:3 9
VM921:3 8
VM921:3 7
VM921:3 6
VM921:3 5
VM921:3 4
VM921:3 3
VM921:3 2
VM921:3 1
VM921: 3 0

//3분 타이머 실습
let time = 180
// undefined

setInterval(function() {
    if(time >= 0) {
        const min = String(Math.floor( time / 60 )).padStart(2, "0")
        const sec = String(time % 60).padStart(2, "0")
        console.log(min + ":" +sec)
        time = time - 1
    }   
},1000)