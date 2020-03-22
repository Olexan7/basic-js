const chainMaker = {
  chainArray: [],

  getLength() {
    return this.chainArray.length;
  },

  addLink(value) {
    this.chainArray.push("( " + String(value) + " )");
    return this;
  },

  removeLink(position) {
    if (
      position <= 0 ||
      position > this.chainArray.length ||
      typeof position != "number"
    ) {
      this.chainArray = [];
      throw new Error();
    }

    this.chainArray.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainArray.reverse();
    return this;
  },

  finishChain() {
    let chainString = this.chainArray.join("~~");
    this.chainArray = [];
    return chainString;
  }
};

module.exports = chainMaker;
