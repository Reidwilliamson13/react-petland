const pets = [
  {
    id: 1,
    name: "Remmy",
    image:
      "https://assets.aboutamazon.com/dims4/default/5a44799/2147483647/strip/true/crop/2448x1380+0+942/resize/660x372!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fd1%2F41%2F5a46bdbc4d12b8e11ce2fb6f22ff%2F20180105-dogsatwork-013.JPG",
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
