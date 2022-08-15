export const unwrap = <T>(val: T | undefined): T => {
  if (val === void 0) {
    throw new Error("Unexpected undefined");
  }
  return val;
};
