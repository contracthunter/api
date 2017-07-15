const express = require('express');
const mongoose = require('mongoose');
// const jwt = require('express-jwt');
// const rsaValidation = require('auth0-api-jwt-rsa-validation');
const routes = require('./routes');
// const Address = require('./address/address.js');
// const Person = require('./person/person.js');
// const Contractor = require('./contractor/contractor.js');

// Connect to MongoDB and create/use database called todoAppTest
mongoose.connect('mongodb://localhost/todoAppTest');

const app = express();
const port = process.env.PORT || 8080;

app.use('/', routes);

// const jwtCheck = jwt({
//     secret: rsaValidation(),
//     algorithms: ['RS256'],
//     issuer: 'https://contracthunter.eu.auth0.com/',
//     audience: 'contract-hunter-api',
// });

// const unauthorizedError = (err, req, res, next) => {
//   if (err.name === 'UnauthorizedError') {
//     res.status(401).json({message:'Missing or invalid token'});
//   }
// };

// const guard = (req, res, next) => {
//     switch (req.path) {
//         case '/contractors' : {
//             const permissions = 'general';
//             if (req.user.scope.includes(permissions)) {
//                 next();
//                 break;
//             }
//         }
//         default: {
//             res.send(403, { message: 'Forbidden' });
//         }
//     }
// };

// app.use(jwtCheck);
// app.use(unauthorizedError);
// app.use(guard);

// Clean up Existing Data
// Person.remove({}, () => {
//    console.log('Person Model Removed')
// });
// Address.remove({}, () => {
//    console.log('Address Model Removed')
// });
// Contractor.remove({}, () => {
//    console.log('Address Model Removed')
// });

// Create Person 1
// const jaiPerson = new Person({
//     name: {
//         first: 'Jai',
//         last: 'O\'Hanlon'
//     },
//     email: 'jai.ohanlon@fjcreative.uk',
//     phone: '07791 708468',
//     address: myAddress._id
// });
// jaiPerson.save();

// const johnPerson = new Person({
//     name: {
//         first: 'John',
//         last: 'Foyster'
//     },
//     email: 'john.foyster@fjcreative.uk',
//     phone: '07791 708468',
//     address: myAddress._id
// });
// johnPerson.save();

// Create New Contractors
// const jaiContractor = new Contractor({
//     available: true,
//     availableFrom: new Date(),
//     dayRate: 550,
//     person: jaiPerson._id,
//     skills: []
// });
// jaiContractor.save();

// const johnContractor = new Contractor({
//     available: true,
//     availableFrom: new Date(),
//     dayRate: 550,
//     person: johnPerson._id,
//     skills: []
// });
// johnContractor.save();

// app.get('/addresses', (req, res) => {
//     Address.find()
//         .exec((error, person) => {
//             res.json(person);
//         });
// });

// app.get('/people', (req, res) => {
//     Person.find()
//         .populate('address')
//         .exec((error, person) => {
//             res.json(person);
//         });
// });

// app.get('/contractors', (req, res) => {
//     Contractor.find()
//         .populate({
//             path: 'person',
//             populate: {
//                 path: 'address'
//             }
//         })
//         .exec((error, contractor) => {
//             res.json(contractor);
//         });
// });


console.log(`Listening on http://localhost:${port}`);
app.listen(port);
