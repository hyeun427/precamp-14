if(1+1 ===2) {
    console.log("정답입니다")
} else {
    console.log("땡!")
}
VM267:2 정답입니다
// undefined
if(true) {
    console.log("정답입니다")
} else {
    console.log("땡!")
}
// VM337:2 정답입니다
// undefined
if(1+1 ===3) {
    console.log("정답입니다")
} else {
    console.log("땡!")
}
// VM383:4 땡!
// undefined
if(0) {
    console.log("정답입니다")
} else {
    console.log("땡!")
}
// VM405:4 땡!
// undefined
const pw1 = "123"
// undefined
const pw2 = "123"
// undefined
if (pw1 === pw2) {
    alert('비밀번호가 일치합니다.')
} else {
    alert('비밀번호가 다릅니다.')
}
// undefined
const profile = {
    name : "철수",
    age : 12,
    school : "다람쥐초등학교"
}
if (profile.age >= 20) {
    console.log('성인입니다')
} else if (profile.age <=19 && profile.age >= 8) {
    console.log('학생입니다')
} else {
    console.log('어린이입니다')
}
// VM1596:4 학생입니다
if (profile.age >= 20) {
	console.log('성인입니다')
//위 조건에서 20세부터는 성인이므로 두번째 조건에 19세 이하를 작성할 필요가 없음
} else if (profile.age >= 8) {
    console.log('학생입니다')
} else if (profile.age >=0) {
    console.log('어린이입니다')
// 값을 음수로 작성했을 경우를 대비
} else {
    console.log('올바르지 않은 값입니다.')
}
// 학생입니다
