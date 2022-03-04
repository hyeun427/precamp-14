let student = ["서형", "창모", "주희", "진태"] 
// undefined
for(let i = 0; i < student.length; i++){
    console.log(`환영합니다 ${student[i]} 님 안녕하세요?`)
}
// VM3124:2 환영합니다 서형 님 안녕하세요?
// VM3124:2 환영합니다 창모 님 안녕하세요?
// VM3124:2 환영합니다 주희 님 안녕하세요?
// VM3124:2 환영합니다 진태 님 안녕하세요?
// undefined
let persons = [
  {name: '철수', age:18},
  {name: '영희', age:22},
  {name: '도우너', age:5},
  {name: '말포이', age:14},
  {name: '도비', age:3},
]
// undefined
for (let i = 0; i < persons.length; i++){
    if(persons[i].age >= 18){
        console.log(persons[i].name + " 님은 성인입니다.")
    } else {
        console.log(persons[i].name + ' 님은 미성년자입니다.')
    }
}
    
// VM3942:3 철수 님은 성인입니다.
// VM3942:3 영희 님은 성인입니다.
// VM3942:5 도우너 님은 미성년자입니다.
// VM3942:5 말포이 님은 미성년자입니다.
// VM3942:5 도비 님은 미성년자입니다.
// undefined
for (let i = 0; i < persons.length; i++){
    if(persons[i].name === '말포이'){
        console.log("입닥쳐 말포이")
    }
    if(persons[i].age >= 18){
        console.log(persons[i].name + " 님은 성인입니다.")
    } else {
        console.log(persons[i].name + ' 님은 미성년자입니다.')
    }
}
    
// VM4186:6 철수 님은 성인입니다.
// VM4186:6 영희 님은 성인입니다.
// VM4186:8 도우너 님은 미성년자입니다.
// VM4186:3 입닥쳐 말포이
// VM4186:8 말포이 님은 미성년자입니다.
// VM4186:8 도비 님은 미성년자입니다.