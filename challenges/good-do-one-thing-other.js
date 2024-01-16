const handleCreateUserRequest = (email, password) => {
  try {
    createUser(email, password);
  }catch(err){
    showErrorMessage(err);
  }
}

const createUser = (email, password) => {
  validateInput(email, password);
  saveUser(email, password);
};

const validateInput = (email, password) => {
  if(!inputIsValid(email, password)) {
    throw new Error('Invalid input!');
  }
}

const inputIsValid = () => {
  return email && email.includes('@') && password && password.trim() === '';
}

const showErrorMessage = (message) => {
  console.log(message); 
}

const saveUser = (email, password) => {
  const user = {
    email,
    password,
  };
  database.insert(user);
};
