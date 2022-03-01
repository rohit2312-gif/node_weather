const request=require("request")

const geocode=(address,callback)=>{

    const url2="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1Ijoicm9oaXQyMzEyIiwiYSI6ImNremZwNXRnNjB0amEyd25yN2dxamcyNGYifQ.FmVfaZ7LPn7Pr5T1ss9oiQ&limit=1";
    
    request({url:url2,json:true},(err,response)=>{
    
    
        if(err)
        callback("ERROR 404",undefined)
        if(response.body.features.length==0)
        callback("Try another city",undefined);
        else
        {
    
            
                callback(undefined,{
                    latitude: response.body.features[0].center[0],
                    longitude: response.body.features[0].center[1],
                    location: response.body.features[0].place_name
                
                });
        }
    })
    
    }
    module.exports=geocode