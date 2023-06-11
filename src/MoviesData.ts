import { error } from "console";
import MovieType from "./types/MoviesType";

const movies: MovieType[] = [
  {
    id: "1",
    title: "Oceans 8",
    category: "Comedy",
    image: "Ocean8.jpeg",
    likes: 4,
    dislikes: 1,
  },
  {
    id: "2",
    title: "Midnight Sun",
    category: "Comedy",
    image: "MidnightSun.jpeg",
    likes: 2,
    dislikes: 0,
  },
  {
    id: "3",
    title: "Les indestructibles 2",
    category: "Animation",
    image: "LesIndestructibles2.jpeg",
    likes: 3,
    dislikes: 1,
  },
  {
    id: "4",
    title: "Sans un bruit",
    category: "Thriller",
    image: "SansUnBruit.jpg",
    likes: 6,
    dislikes: 6,
  },
  {
    id: "5",
    title: "Creed II",
    category: "Drame",
    image: "creed.jpeg",
    likes: 16,
    dislikes: 2,
  },
  {
    id: "6",
    title: "Pulp Fiction",
    category: "Thriller",
    image: "pulpFiction.jpeg",
    likes: 11,
    dislikes: 3,
  },
  {
    id: "7",
    title: "Pulp Fiction",
    category: "Thriller",
    image: "pulpFiction2.jpeg",
    likes: 12333,
    dislikes: 32,
  },
  {
    id: "8",
    title: "Seven",
    category: "Thriller",
    image: "seven.jpg",
    likes: 2,
    dislikes: 1,
  },
  {
    id: "9",
    title: "Inception",
    category: "Thriller",
    image: "inception.jpeg",
    likes: 2,
    dislikes: 1,
  },
  {
    id: "10",
    title: "Gone Girl",
    category: "Thriller",
    image: "goneGirl.jpg",
    likes: 22,
    dislikes: 12,
  },
];

export default new Promise<MovieType[]>((resolve, reject) =>
  setTimeout(resolve, 100, movies, reject)
);
