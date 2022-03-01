
alert("client side js is loaded"),


 fetcher=(address,callback)=>{
     
    fetch('http://localhost:3000/weather?address='+address).then((response)=>{

    response.json().then((data)=>{
                         callback(data)

    })

})
 }
 

const weatherForm= document.querySelector('form')
const search=document.querySelector('input')
const outpu1=document.querySelector('#message-one')
const outpu2=document.querySelector('#message-two')

weatherForm.addEventListener('submit',(e)=> {


    e.preventDefault()
        outpu1.textContent='Loading'
    const location=search.value
console.log(location)
// const data=fetcher(location,(data)=>{

//     if(!data)
//  console.log('error 404')
//     else
//  console.log(data)
// })
fetch('http://localhost:3000/weather?address='+location).then((response)=>{

    response.json().then((data)=>{
                         if(data.error)
                         outpu1.textContent="Error try again"
                         //console.log("ERROR")
                         else{
                             outpu1.textContent=data.forecast,
                             outpu2.textContent=data.address
                         }
                         //console.log(data)

    })

})
//console.log(data)
})