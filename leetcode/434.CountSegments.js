var countSegments = function (s) {
  s = s.replace(/\s+/g, " ").trim();
  return s.length > 0 ? s.split(" ").length : 0;
};
