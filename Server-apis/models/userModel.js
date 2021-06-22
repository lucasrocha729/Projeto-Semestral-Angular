const mongoose = require('mongoose');
const userSchema = require ('./schemas/userSchema');
module.exports = mongoose.model('user', userSchema);

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