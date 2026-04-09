export const calculatingProgress = (progress: number, max: number) => {
  if (progress > max) {
    return 100;
  } else {
    const result = (progress / max) * 100;
    return Math.round(result);
  }
};
