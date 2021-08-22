const express= require ('express');
const router= express.Router();
const Alien=require('../models/alien');
const app= express();
// get all data from mongodb
router.get('/',async(req,res)=>{
try{
    const aliens= await Alien.find()
    res.json(aliens)
    res.send("working")
    
}
catch(err){
res.send('Error : '+err)
}

})

app.use(express.json());


//set data into mongdb
router.post('/',async(req,res)=>{
const alien= new Alien({
    batteryId: req.body.batteryId,
    LocationLAT: req.body.LocationLAT,
    LocationLONG: req.body.LocationLONG,
    NetworkStatus: req.body.NetworkStatus,
    socstatus: req.body.socstatus,
    socper: req.body.socper,
    currentlow: req.body.currentlow,
    currenthigh: req.body.currenthigh,
    voltagelow: req.body.voltagelow,
    voltagehigh: req.body.voltagehigh,
    HcellVLB: req.body.HcellVLB,
    HcellVHB: req.body.HcellVHB,
    LcellVLB: req.body.LcellVLB,
    LcellVHB: req.body.LcellVHB,
    Highcelltemp: req.body.Highcelltemp,
    Lowercelltemp: req.body.Lowercelltemp
    
})

try{
 const a1=await alien.save()
 res.json(a1);
}catch(err){
res.send("error is :"+err)
}


})

module.exports = router