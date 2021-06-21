const mongoose = require('mongoose');
const clientSchema = require ('./schemas/clientSchema');
module.exports = mongoose.model('client', clientSchema);

// [
//     {
//       "login": "bvasquez",
//       "id": 1,
//       "name": "Bruno",
//       "lastName": "Vasquez",
//       "nomeMeio": "Mattos",
//       "pagamento": {
//         "name": "Bruno",
//         "lastName": "Vasquez",
//         "email": "bruno@bigu.com",
//         "phone": "(41) 99999-9999",
//         "city": "Curitiba",
//         "state": "PR",
//         "zip": "81830201",
//         "adress": "R. ondas, 510"
//       }
//     }
//   ]