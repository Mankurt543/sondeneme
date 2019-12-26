let mongoose=require("mongoose")
mongoose.Promise=require("bluebird")
var mongodb="mongodb+srv://memet:Mankurt543aa@sondeneme-2ieho.mongodb.net/test?retryWrites=true&w=majority"
mongoose.set('useCreateIndex', true)
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

module.exports=mongoose.connect(mongodb,function(err,db){
    if(err) throw err
    else{
        console.log(mongodb +"bağlandı")
      
       
    }} 
    )

