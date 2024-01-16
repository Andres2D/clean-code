const createUser = (email, password) => {
  try {
    validateUser(email, password);
    addUser(email, password);
  }catch(err) {
    console.log(err);
  }
}

const validateUser = (email, password) => {
  if (!email || !email.includes('@') || !password || password.trim() === '') {
    console.log('Invalid input!');
    throw new Error('Invalid input');
  }
}

const addUser = (email, password) => {
  const user = {
    email,
    password,
  };
  database.insert(user);
}
