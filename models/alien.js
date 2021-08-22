const mongoose = require('mongoose')



const alienSchema = new mongoose.Schema({
    // name:{
    //     type:String,
    //     require:true
    // },
    // tech:{
    //     type:String,
    //     require:true
    // },
    // sub:{
    //     type:Boolean,
    //     require:true,
    //     default:false
    // }
    batteryId:{
        type:Boolean,
        require:true,
        default:false
    },
    LocationLAT:{
        type:Boolean,
        require:true,
        default:false
    },
    LocationLONG:{
        type:Boolean,
        require:true,
        default:false
    },
    NetworkStatus:{
        type:Boolean,
        require:true,
        default:false
    },
    socstatus:{
        type:Boolean,
        require:true,
        default:false
    },
    socper:{
        type:Boolean,
        require:true,
        default:false
    },
    currentlow:{
        type:Boolean,
        require:true,
        default:false
    },
    currenthigh:{
        type:Boolean,
        require:true,
        default:false
    },
    voltagelow:{
        type:Boolean,
        require:true,
        default:false
    },
    voltagehigh:{
        type:Boolean,
        require:true,
        default:false
    },
    HcellVLB:{
        type:Boolean,
        require:true,
        default:false
    },
    HcellVHB:{
        type:Boolean,
        require:true,
        default:false
    },
    LcellVLB:{
        type:Boolean,
        require:true,
        default:false
    },
    LcellVHB:{
        type:Boolean,
        require:true,
        default:false
    },
    Highcelltemp:{
        type:Boolean,
        require:true,
        default:false
    },
    Lowercelltemp:{
        type:Boolean,
        require:true,
        default:false
    },
})

module.exports=mongoose.model('Alien',alienSchema);