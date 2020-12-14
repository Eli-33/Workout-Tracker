const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day:{
            type: Date,
            default: () => new Date()

        },
        exercises:[
          {
            type:{
              type:String,
              trim: true,
              required: 'need workout type'  
            },
            name: {
              type:String,
              trim: true,
              required: 'need workout name'
            },
            duration:{
                type:Number,
                required: 'Enter the workout duration in minutes'
            },
            distance:{
                type: Number
            },
            weight:{
                type:Number,
            },
            reps:{
                type:Number
            },
            sets:{
                type:Number
            },
          }, 
        ],
        totalDuration: {
            type: Number,
            default: 0,
        }
    });
    
const workout = mongoose.model('workoutSchema', WorkoutSchema);

module.exports = workout;
