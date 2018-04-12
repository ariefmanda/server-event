var redis = require("redis"),
    client = redis.createClient();
module.exports = (req,res,next)=>{
    client.get("event_cache", function(err, reply) {
        if(err){
            next(err)
        }else if(!reply){
            next()
        }else{
            res.json(JSON.parse(reply))
        }
    });
}