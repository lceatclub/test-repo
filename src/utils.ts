function isInt(value: any): boolean {
  let x = parseFloat(value);
  return !isNaN(value) && (x | 0) === x;
}
