export const getUserNameByEmail = (email: string) => {
  let from = email.search('@');
  const userName = email.substring(0, from);
  return userName;
};
