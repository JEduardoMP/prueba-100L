export const passwordVerify = (password, passwordRepeated) => {
  if (password === passwordRepeated) {
    return true;
  }
  return false;
};

export const specialCharacters = (password) => {
  const characterFinder = (pass) => {
    const characters = "!”#$%&/()=?¿^*@[]{};:>_<,.-|`+.";
    const splited = characters.split("");
    const passSplit = pass.split("");
    for (let j = 0; j < passSplit.length; j++) {
      for (let i = 0; i < splited.length; i++) {
        if (passSplit[j].includes(splited[i])) {
          return true;
        }
      }
    }
    return false;
  };
  if (characterFinder(password) === true) {
    return true;
  }

  return false;
};

export const oneNumVal = (password) => {
  const splited = password.split("");
  const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  for (let i = 0; i < splited.length; i++) {
    for (let j = 0; j < numbs.length; j++) {
      if (splited[i].includes(numbs[j])) {
        return true;
      }
    }
  }
  return false;
};

export const minLength = (password) => {
  if (password.length >= 6) {
    return true;
  }
  return false;
};

export const excludePhrase = (password) => {
  if (password.includes("100Ladrillos")) {
    return true;
  }
  return false;
};

export const equalCharacters = (password) => {
  if (password.length >= 6) {
    for (let i = 0; i < password.length; i++) {
      const values = password.slice(i, i + 3);
      const splited = values.split("");
      if (splited[0] === splited[1] && splited[0] === splited[2]) {
        return true;
      }
      if (parseInt(splited[0]).toString() !== "NaN") {
        if (
          parseInt(splited[1]) === parseInt(splited[0]) + 1 &&
          parseInt(splited[2]) === parseInt(splited[0]) + 2
        ) {
          return true;
        }
      }
    }
    return false;
  }
};
