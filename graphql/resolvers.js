const sungbin = {
  name: "Sungbin",
  age: 26,
  gender: "man",
};

const resolvers = {
  Query: {
    person: () => sungbin,
  },
};

export default resolvers;
