var mongoose = require('mongoose');
//Set up default mongoose connection
const userscheme=new mongoose.Schema(
{
      cedula: {
         type: String
      },
      nombre: {
          type: String
      },
      clave: {
          type: String
      }
}

)
module.exports= mongoose.model('juans', userscheme)