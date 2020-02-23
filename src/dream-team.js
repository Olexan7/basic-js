module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  members = members.filter(n => {
    return typeof n == "string";
  });

  members = members.map(item =>
    item
      .replace(/ /g, "")
      .toUpperCase()
      .charAt(0)
  );

  members = members.sort().join("");
  return members;
};
