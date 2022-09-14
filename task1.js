const clientsInfo = [
  {
    firstName: 'ivan',
    lastName: 'ivanov',
    phoneNumber: '-819242412',
    email: 'ivanIvanov@gmail.com',
  },
  {
    firstName: 'Vitaliy',
    lastName: 'Braun',
    phoneNumber: '1234567891011',
    email: 'bivanIvanov@gmail.com',
  },
  {
    firstName: 'obivan',
    lastName: 'obivanov',
    phoneNumber: '-219242412',
    email: 'obivanIvanov@gmail.com',
  },
  {
    firstName: 'sashov',
    phoneNumber: '-319242412',
    email: 'sashaSashov@gmail.com',
  },
  {
    firstName: 'ivan',
    lastName: 'ivanov',
    phoneNumber: '+319242412',
    email: 'ivanIvanov@gmail.com',
  },
];

const clientsOrder = [
  {
    name: 'Ivan Ivanov',
    order: 3452,
  },
  {
    name: 'Vitaliy Braun',
    order: 8201,
  },
  {
    name: 'Obivan Obivanov',
    order: 7621,
  },
  {
    name: 'Sashov',
    order: 82734,
  },
  {
    name: 'Ivan Ivanov',
    order: 6791,
  },
];

const result = [{
  name: 'String',
  phoneNumber: 'Number',
  order: 'Number',
}];

function checkClientsName(arrayClients) {
  const rightClients = [];
  for (let i = 0; i < arrayClients.length; i += 1) {
    if ((('firstName' || 'lastName') && 'phoneNumber') in arrayClients[i]) {
      rightClients.push(arrayClients[i]);
    }
  }
  return rightClients;
}

function checkClientsPhone(arrayClients) {
  const regexp = /\D/g;
  const rightClients = [];
  for (let i = 0; i < arrayClients.length; i += 1) {
    if (regexp.test(arrayClients[i].phoneNumber) || arrayClients[i].phoneNumber.length < 11) {
      rightClients.push(arrayClients[i]);
    }
  }
  return rightClients
    .map((el) => ({ ...el, phoneNumber: Number(el.phoneNumber.slice(1)) }));
}

function final(clients, orders) {
  const res = [];
  for (let i = 0; i < clients.length; i += 1) {
    res[i] = {};
    res[i].name = orders[i].name;
    res[i].phoneNumber = clients[i].phoneNumber;
    res[i].order = orders[i].order;
  }
  return res;
}

console.log(final(checkClientsPhone(checkClientsName(clientsInfo)), clientsOrder));
