function tryDataBaseConnection() {
  const didConnect = database.connect();
  if (didConnect) {
    return true;
  } else {
    showMessage('Could not connect to database!');
    return false;
  }
}

function findAgent(ticket) {
  if (ticket.requestType === 'unknown') {
    return findStandardAgent();
  }
  return findAgentByRequestType(ticket.requestType);
}

function isValid(email, password) {
  if (!email.includes('@') || password.length < 7) {
    return false;
  }
  return true;
}

const showMessage = (message) => {
  console.log(message);
}
