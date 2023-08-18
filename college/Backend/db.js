

const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://rashid02:Mohd%40%239258@cluster0.okhb2uy.mongodb.net/vegetableMarket?retryWrites=true&w=majority";

const mongoDB=async()=>{
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if(err)console.log("---" ,err)
        else{
        console.log("connected to mongo");
        const fetched_data=await mongoose.connection.db.collection("Internship");
        fetched_data.find({}).toArray(async function(err,data){

            const Data2 = await mongoose.connection.db.collection("Data2");
            Data2.find({}).toArray( function(err,catData){
                if(err) console.log(err);
                else{
                       global.Internship = data;
                       global.Data2 = catData;
                    }
            })
        //   if(err) console.log(err);
        //   else{
        //     global.Internship = data;
        //   }
        })
    }
    });
}

module.exports=mongoDB;

