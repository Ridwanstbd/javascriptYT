// const arraySaya = ['🥝','🥥','🍌','🍋','🍏','🍒']
// const newArraySaya = arraySaya.slice()

// newArraySaya[0]= '🌻'

// console.log(arraySaya)
// console.log(newArraySaya)
// -----------------------------------------
// const ArraySaya = ['🌻',"ridwan",90,['eat','food'], {
//     tomato:function(){
//         console.log("ini tomato")
//     }}]

// console.log(ArraySaya[3][1])
// ArraySaya[4].tomato()
// -----------------------------------------
// const arraySaya = ['🍒','🍊','🥥']
// const arrayKamu = ['👻','👹','👄']

// const mergeArray = arraySaya.concat(arrayKamu)
// console.log(mergeArray)
// for (list of mergeArray) console.log(list)
// for (list in mergeArray) console.log(list)
// mergeArray.map((value,index)=> console.log(value,index))
// -----------------------------------------
const datas = [
    {
        name: "ridwan",
        stack: "java",
        age: 23
    },
    {
        name: "alexander",
        stack: "golang",
        age: 21
    },
    {
        name: "thommy",
        stack: "flutter",
        age: 26
    },
    {
        name: "Hassan",
        stack: "kotlin",
        age: 27
    }
]
datas.map((value,index) => {
    console.log(value.name,value.stack)
})
datas.sort((a,b) => a.age - b.age).map((values) => console.log(values))
datas.filter((x) => x.age < 25).map((values) => console.log(values))