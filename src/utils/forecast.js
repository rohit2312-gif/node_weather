const request=require("request");


const forecast=(latitude,longitude,callback)=>{
    const url1="http://api.weatherstack.com/current?access_key=d7c23cdf5bdef958b596c719b017f5b2&query="+latitude+","+longitude;
            request({url:url1,json:true},(err,response)=>{
                    if(err){

                        callback("ERROR",undefined)

                    }
                    else{
                        callback(undefined,response.body
                        );
                    }

            })

}

module.exports=forecast









