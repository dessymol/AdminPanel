const express=require('express');
const router=express.Router();
const admin=require('../Models/modelRoutes')


router.get('/',async(req,res)=>{
     try{
        const data=await admin.find();
        res.json(data)
     }
     catch(err){
          res.status(500).json({message:"something went wrong",data})
     }

});

router.post('/add',async(req,res)=>{
    try{
       const admin=new admin(req.body);
       await admin.save();
       res.status(201).json({message:"feedback added",admin})
    }
    catch(err){
        res.status(500).json({message:"Something went wrong",error})
    }
    
});

router.put('/update/:id',async(req,res)=>{
      try{
         const id=req.params;
         const newadmin=await admin.findByIdAndUpdate(id,req.body,{new:true});
         res.status(201).json({message:"Feedback updated successfully",newadmin})
      }
       catch (error) {
        res.status(500).json({message:"Error  ",error});
     }
});

router.delete('/delete/:id',async(req,res)=>{
     try {
        const id=req.params;
        await data.findByIdAndDelete(id);
        res.json({message:"feedback deleted successfully",admin});
     } catch (error) {
        res.status(500).json({message:"Error deleting ",error});
     }
});


module.exports=router;