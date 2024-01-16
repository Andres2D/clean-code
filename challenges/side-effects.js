function connectDatabase() {
  const didConnect = database.connect(); // side effect expected
  if (didConnect) {
    return true;
  } else {
    console.log('Could not connect to database!'); // side effect not expected
    return false;
  }
}

function determineSupportAgent(ticket) { // bad naming
  if (ticket.requestType === 'unknown') {
    return findStandardAgent(); // unexpected side effect
  }
  return findAgentByRequestType(ticket.requestType); // unexpected side effect
}

function isValid(email, password) {
  if (!email.includes('@') || password.length < 7) {
    console.log('Invalid input!'); // unexpected side effect
    return false;
  }
  return true;
}
