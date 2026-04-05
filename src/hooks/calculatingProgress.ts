export const calculatingProgress = (progress: number, max: number) => {
  const result = (progress / max) * 100;
  return result;
};
