const clientsInfo = [{
  firstName: 'ivan',
  lastName: 'ivanov',
  phoneNumber: '8192*42412',
  email: 'ivanIvanov@gmail.com',
},
{
  firstName: 'bivan',
  lastName: 'bivanov',
  phoneNumber: '11924241211111',
  email: 'bivanIvanov@gmail.com',
},
{
  firstName: 'obivan',
  lastName: 'obivanov',
  honeNumber: '219242412',
  email: 'obivanIvanov@gmail.com',
},
{
  lastName: 'sashov',
  phoneNumber: '319242412',
  email: 'sashaSashov@gmail.com',
},
{
  firstName: 'sima',
  phoneNumber: '4192^42412',
  email: 'sima@gmail.com',
},
{
  firstName: 'pavel',
  lastName: 'pavlov',
  phoneNumber: '519242412',
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

function checkClients(arrayClients) {
  const regexp = /\D/g;
  const rightClients = [];
  for (let i = 0; i < arrayClients.length; i += 1) {
    if ((('firstName' || 'lastName') && 'phoneNumber') in arrayClients[i]) {
      rightClients.push(arrayClients[i]);
    }
  }
  for (let i = 0; i < rightClients.length; i += 1) {
    if (!regexp.test(rightClients[i].phoneNumber) || rightClients[i].phoneNumber.length > 11) {
      delete rightClients[i];
    }
  }
  return rightClients.filter((el) => el !== null);
}

console.log(checkClients(clientsInfo));
// checkClients(clientsInfo);
// console.log(checkPhone(clientsInfo));

function final() {

}
