export const getUserNameByEmail = (email: string) => {
  let from = email.search('@');
  const userName = email.substring(0, from);
  return userName;
};

export const getNameWorkaut = (string: string) => {
  if (string.includes('/')) {
    let from = string.search('/');
    console.log(from);
    const reqString = string.substring(0, from);
    return reqString;
  } else {
    return string;
  }
};

export const getString = (string: string) => {
  if (string.includes('/')) {
    const reqString = string.split('/').slice(1, 3).join('/');
    return reqString;
  } else {
    return;
  }
};
