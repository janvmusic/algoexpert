function validIPAddresses(string) {
  let validIps = [];

  for (let i = 1; i < 4; i++) {
    let first = "";
    let second = "";
    let third = "";
    let fourth = "";

    first = string.substring(0, i);
    if (!validIpNumber(first)) {
      continue;
    }

    for (let j = i + 1; j < i + 4; j++) {
      second = string.substring(i, j);
      if (!validIpNumber(second)) {
        continue;
      }

      for (let k = j + 1; k < j + 4; k++) {
        third = string.substring(j, k);
        if (!validIpNumber(third)) {
          continue;
        }

        fourth = string.substring(k, string.length);
        if (validIpNumber(fourth)) {
          console.log(fourth, k, string.length);

          let ip = `${first}.${second}.${third}.${fourth}`;
          validIps.push(ip);
        }
      }
    }
  }

  return validIps;
}

function validIpNumber(number) {
  const invalidLength = number.length < 1 || number.length > 3;
  const leadingZeros = /^0[0-9]/.test(number);
  const invalidIp = Number(number) > 255;

  if (invalidLength || leadingZeros || invalidIp) {
    return false;
  }

  return true;
}

// Do not edit the line below.
exports.validIPAddresses = validIPAddresses;
