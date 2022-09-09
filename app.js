const clientsInfo = [{
  firstName: 'ivan',
  lastName: 'ivanov',
  phoneNumber: 819242412,
  email: 'ivanIvanov@gmail.com',
},
{
  firstName: 'bivan',
  lastName: 'bivanov',
  phoneNumber: 119242412,
  email: 'bivanIvanov@gmail.com',
},
{
  firstName: 'obivan',
  lastName: 'obivanov',
  honeNumber: 219242412,
  email: 'obivanIvanov@gmail.com',
},
{
  lastName: 'sashov',
  phoneNumber: 319242412,
  email: 'sashaSashov@gmail.com',
},
{
  firstName: 'sima',
  phoneNumber: 419242412,
  email: 'sima@gmail.com',
},
{
  firstName: 'pavel',
  lastName: 'pavlov',
  phoneNumber: 519242412,
  email: 'pavelPavlov@gmail.com',
}];

const clientsOrder = [
  {
    name: 'Ivan Ivanov',
    order: 3452,
  },
  {
    name: 'Vitaliy Braun',
    order: 421,
  },
];

const result = [{
  name: 'String',
  phoneNumber: 'Number',
  order: 'Number',
}];

// clientsInfo.forEach((el) => {
//   console.log(el.hasOwnProperty('firstName' || 'lastName'));
//   console.log(el.hasOwnProperty('phoneNumber'));
// });

// clientsInfo.forEach((el) => {
//   console.log(('firstName' || 'lastName') in el);
// });

// { arrayClients.filter((el) => (('firstName' || 'lastName') && 'phoneNumber') in el); }

function checkClients(arrayClients) {
  const rightClients = [];
  for (let i = 0; i < arrayClients.length; i += 1) {
    if ((('firstName' || 'lastName') && 'phoneNumber') in arrayClients[i]) {
      rightClients.push(arrayClients[i]);
    }
  }
  return rightClients;
}

console.log(checkClients(clientsInfo));
