
alert("Padhle aafa teri maa ki choot"),


 fetcher=(address,callback)=>{
     
    fetch('http://localhost:3000/weather?address='+address).then((response)=>{

    response.json().then((data)=>{
                         callback(data)

    })

})
 }
 

const weatherForm= document.querySelector('form')
const search=document.querySelector('input')
const output1=document.querySelector('#message-one')
const output2=document.querySelector('#message-two')
const output3=document.querySelector("#message-three");
weatherForm.addEventListener('submit',(e)=> {


    e.preventDefault()
        output1.textContent='Loading...'
    const location=search.value
console.log(location)
// const data=fetcher(location,(data)=>{

//     if(!data)
//  console.log('error 404')
//     else
//  console.log(data)
// })
fetch('/weather?address='+location).then((response)=>{

    response.json().then((data)=>{
                         if(data.error)
                         output1.textContent="Error try again",
                         output2.textContent=''
                         //console.log("ERROR")
                         else{

                            console.log(data.time);
                            output1.textContent=data.forecast,
                             output2.textContent=data.address,
                            output3.textContent=data.time
                            
                         }
                         //console.log(data)

    })

})
//console.log(data)
})