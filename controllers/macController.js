exports.getPassword = function (req, res) {
  var mac = req.params.mac;
  mac = mac.toUpperCase();
  if (mac.match(/^([A-F0-9]{12})$/)) {
    const digits = mac.split("");
    const letterMap = [];
    letterMap["A"] = "2";
    letterMap["B"] = "22";
    letterMap["C"] = "222";
    letterMap["D"] = "3";
    letterMap["E"] = "33";
    letterMap["F"] = "333";
    var password;

    digits.forEach((digit, i) => {
      if (i === 0) {
        password = "Enter password as follows\n\r";
        password = password + "1->Aa\n\r";
        password = password + digits[0];
      } else if (digits[i].match(/[0-9]/) && digits[i - 1].match(/[0-9]/)) {
        password = password + digits[i];
      } else if (digits[i - 1].match(/[0-9]/) && digits[i].match(/[A-F]/)) {
        password = password + "\n\r\n\rA->a1\n\r" + letterMap[digits[i]];
      } else if (digits[i - 1].match(/[A-F]/) && digits[i].match(/[0-9]/)) {
        password = password + "\n\r\n\r1->Aa\n\r" + digits[i];
      } else if (digits[i - 1].match(/[A-F]/) && digits[i].match(/[A-F]/)) {
        password = password + "\n\r" + letterMap[digits[i]];
      }
    });
    return res.json({ password: password });
  } else {
    return res.status(404).json({ status: "bad MAC address" });
  }
};
