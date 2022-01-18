const pets = [
  {
    id: 1,
    name: "Remmy",
    image:
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/23124207/Old-English-Sheepdog-running-in-the-park.jpg",
    favSnacks: ["Peanut Butter", "Sweet Potato"],
    isAdopted: false,
  },
  {
    id: 2,
    name: "Trek",
    image:
      "https://emborapets.com/wp-content/uploads/2020/08/Why-Does-My-Springer-Spaniel-Smell-So-Bad_.jpg",
    favSnacks: ["Lambchops", "Bacon"],
    isAdopted: true,
  },
  {
    id: 3,
    name: "Yeta",
    favSnacks: ["Grass", "Chickenbits"],
    isAdopted: true,
  },
];

const getNextId = (
  (id) => () =>
    ++id
)(3);

export { pets, getNextId };
