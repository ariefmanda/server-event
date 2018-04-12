const eventModel = require('../models/event')
var redis = require("redis"),
    client = redis.createClient();
module.exports = {
    findAll: async (req, res, next) => {
        try {
            var events = await eventModel.find({UserId:req.decoded._id})
            client.set("event_cache", JSON.stringify(events));
            res.json(events)
        } catch (err) {
            next(err)
        }
    },
    create: async (req, res, next) => {
        try {
            var events = await eventModel.create({
                UserId: req.decoded._id,
                time: req.body.time,
                date: req.body.date,
                location: req.body.location,
                description: req.body.description
            })
            client.del('event_cache')
            res.json(events)
        } catch (err) {
            next(err)
        }
    },
    update: async (req, res, next) => {
        try {
            var events = await eventModel.findOneAndUpdate({
                _id:req.params.id,
                UserId: req.decoded._id
            },{
                time: req.body.time,
                date: req.body.date,
                location: req.body.location,
                description: req.body.description
            })
            client.del('event_cache')
            res.json(events)
        } catch (err) {
            next(err)
        }
    },
    destroy: async (req, res, next) => {
        try {
            var events = await eventModel.findOneAndRemove({
                _id:req.params.id,
                UserId: req.decoded._id
            })
            client.del('event_cache')
            res.json(events)
        } catch (err) {
            next(err)
        }
    }
}