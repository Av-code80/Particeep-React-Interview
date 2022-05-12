import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";
import MovieType from "../../types/MoviesType";
import moviesPromise from "../../MoviesData";

interface initialStateType {
  movies: MovieType[];
  loading?: boolean;
  error?: SerializedError;
}

const initialState: initialStateType = {
  movies: [],
  loading: false,
  error: undefined,
};

export const getMoviesAction = createAsyncThunk<MovieType[]>(
  "Get-Movies",
  async (): Promise<MovieType[]> => {
    try {
      const response = await moviesPromise;
      return response;
    } catch (error: any) {
      throw new Error(error);
    }
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    likeMovie: (state, action) => {
      const { id, like } = action.payload;
      const index = state.movies.findIndex((movie) => movie.id == id);
      if (index >= 0) {
        like ? state.movies[index].likes++ : state.movies[index].likes--;
      }
      return state;
    },
    disLikeMovie: (state, action) => {
      const { id, disLike } = action.payload;
      const index = state.movies.findIndex((movie) => movie.id == id);
      if (index >= 0) {
        disLike
          ? state.movies[index].dislikes++
          : state.movies[index].dislikes--;
      }
      return state;
    },
    deleteMovie: (state, action) => {
      const { id } = action.payload;
      const index = state.movies.findIndex((movie) => movie.id == id);
      if (index >= 0) state.movies.splice(index, 1);
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMoviesAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getMoviesAction.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(getMoviesAction.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});

export const { likeMovie, disLikeMovie, deleteMovie } = moviesSlice.actions;
