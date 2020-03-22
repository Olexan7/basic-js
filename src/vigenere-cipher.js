class VigenereCipheringMachine {
  constructor(mode) {
    if (mode == false) this.mode = 1;
    else this.mode = 0;
  }
  encrypt(str, keyWord) {
    if (
      str == undefined ||
      str == null ||
      keyWord == undefined ||
      keyWord == null
    )
      throw new Error();

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    str = str.toUpperCase().split("");
    keyWord = keyWord.toUpperCase().split("");
    let key = this.getKey(str, keyWord);
    let strEnc = [];

    for (let i = 0; i < str.length; i++) {
      if (/[A-Z]/.test(str[i])) {
        let index = (alphabet.indexOf(str[i]) + alphabet.indexOf(key[i])) % 26;
        strEnc[i] = alphabet[index];
      } else {
        strEnc[i] = str[i];
      }
    }

    if (this.mode == 1) return strEnc.reverse().join("");
    return strEnc.join("");
  }

  decrypt(str, keyWord) {
    if (
      str == undefined ||
      str == null ||
      keyWord == undefined ||
      keyWord == null
    )
      throw new Error();

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    str = str.toUpperCase().split("");
    keyWord = keyWord.toUpperCase().split("");
    let key = this.getKey(str, keyWord);
    let strDec = [];
    for (let i = 0; i < str.length; i++) {
      if (/[A-Z]/.test(str[i])) {
        let index =
          (alphabet.indexOf(str[i]) + 26 - alphabet.indexOf(key[i])) % 26;
        strDec[i] = alphabet[index];
      } else {
        strDec[i] = str[i];
      }
    }

    if (this.mode == 1) return strDec.reverse().join("");
    return strDec.join("");
  }

  getKey(str, keyWord) {
    let key = [];
    let c = 0;
    for (let i = 0; i < str.length; i++) {
      if (/[A-Z]/.test(str[i])) {
        key[i] = keyWord[c];
        if (c < keyWord.length - 1) c++;
        else c = 0;
      } else {
        key[i] = str[i];
      }
    }
    return key;
  }
}

module.exports = VigenereCipheringMachine;
