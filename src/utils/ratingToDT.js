export const ratingToDT = topRatings => {
  // eslint-disable-next-line
  topRatings = topRatings.map(attr => {
    if (attr[0] === "Linguistic") return [...attr, "LI"];
    if (attr[0] === "Logical_Mathematical") return [...attr, "LO"];
    if (attr[0] === "Spatial") return [...attr, "SP"];
    if (attr[0] === "Bodily_Kinesthetic") return [...attr, "BO"];
    if (attr[0] === "Musical") return [...attr, "MU"];
    if (attr[0] === "Interpersonal") return [...attr, "IE"];
    if (attr[0] === "Intrapersonal") return [...attr, "IA"];
    if (attr[0] === "Naturalist") return [...attr, "NA"];
  });

  const dtComic = {
    attr_1: topRatings[0][2],
    attr_2: topRatings[1][2],
    attr_3: topRatings[2][2]
  };

  return dtComic;
};
