import { getMovies, getById, addMovie, deleteMovie } from "./db";

// Resolvers : (root, args, context, info)
// Resolvers : (_,    {id},    _,      _)
const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
