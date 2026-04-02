export const getUserNameByEmail = (email: string) => {
  let from = email.search('@');
  const userName = email.substring(0, from);
  return userName;
};

export const getNameWorkaut = (string: string) => {
  let from = string.search('/');
  const reqString = string.substring(0, from);
  return reqString;
};

export const getString = (string: string) => {
  const reqString = string.split('/').slice(1, 3).join('/');
  return reqString;
};
