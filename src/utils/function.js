export const onlyAllowNumber = (value) => {
  if (value === '' || value === '00') {
    return 0;
  }
  return value.replace(/[^0-9]/g, '').replace(/^0+/, '');
};

export const isPrime = (n) => {
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

export const generatePrime = (num) => {
  const arr = [];
  let i = 2;
  while (arr.length < num) {
    if (isPrime(i)) {
      arr.push(i);
    }
    i = i === 2 ? i + 1 : i + 2;
  }
  return arr.toString();
};

export const generateFibonacci = (n) => {
  let f1 = 0,
    f2 = 1,
    i;

  if (n < 1) {
    return '';
  }
  let res = [0];
  for (i = 1; i < n; i++) {
    res.push(f2);
    let next = f1 + f2;
    f1 = f2;
    f2 = next;
  }
  return res;
};
