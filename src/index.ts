const names = "wonpyo",
age = 28,
gender = "male"

const sayHi = (name: string, age: number, gender: string):string => {
    return `Hello ${name}, your age is ${age} and gender is ${gender}`
}

const result = sayHi(names, age, gender)

console.log(result)

export {}