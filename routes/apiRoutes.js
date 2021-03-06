const Workout = require("../models/workoutSchema")

module.exports = function (app) {
    app.get('/api/workouts',function(req,res){
        Workout.find({})
        .sort({date: -1})
        .then(data =>{
            res.json(data)
        })
        .catch(err =>{
            res.json(err)
        })
    });

    app.post("/api/workouts",function ({ body },res){
        const WorkoutN = new Workout(body);

        Workout.create({WorkoutN})
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
    });

    app.get("/api/workouts/range",function(req,res){  
        Workout.find({})
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });


    // app.post("/api/workouts/range",function (req,res){    
    //     Workout.create({})
    //     .then(data => res.json(data))
    //     .catch(err => { 
    //         res.json(err)
    //     })
    // });

    app.put("/api/workouts/:id",(req,res)=>{   
        Workout.findByIdAndUpdate(  
        { _id: req.params.id },
         {
             $push:{
                 exercises:{
                     type: req.body.type,
                     name:req.body.name,
                     duration: req.body.duration,
                     distance:req.body.distance,
                     weight: req.body.weight,
                     reps: req.body.reps,
                     sets: req.body.sets,
                 },
             },
             $inc: {totalDuration: req.body.duration},
         }
        )
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    });
}