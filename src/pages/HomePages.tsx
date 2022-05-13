import React from "react";
import { useState, useEffect } from "react";
import MovieType from "../types/MoviesType";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { deleteMovie, disLikeMovie, getMoviesAction, likeMovie } from "../redux/slices/movies";
import { useSelector } from "react-redux";
import { moviesSelector } from "../redux/selector";
import MovieCard from "../components/MovieCard/MovieCard";
import Header from "../components/Layout/Header/Header";
import { toast } from "react-toastify";
import Filter from "../components/Filter/Filter";
import Pagination from "../components/Pagination/Pagination";

const perPages = [4, 9, 12]

const HomePages = () => {
  const [pageSize, setPageSize] = useState<number>(perPages[2] || perPages[0])
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const moviesState = useSelector(moviesSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getMoviesAction());
  }, []);

  useEffect(() => {
    setMovies(moviesState.movies)
  }, [moviesState.movies])

  const handleDelete = (movieId: string) => {
    dispatch(deleteMovie({ id: movieId }));
    toast.success("Movie Deleted")
  }

  const handleFilterChange = (filters: string[]) => {
    if (filters.length > 0) {
      const temp = filters.map(filter => {
        return moviesState.movies.filter(movie => movie.category == filter)
      })
      setMovies(temp.flat())
    }
    else {
      setMovies(moviesState.movies)
    }
    setCurrentPage(1)
  }

  const handlePages = (updatePage: number) => setCurrentPage(updatePage);

  const handlePageSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(parseInt(e.target.value));
    setCurrentPage(1)
  }

  const renderMovies = () => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    const paged = movies.slice(firstPageIndex, lastPageIndex);
    return (
      !!paged && paged.length > 0 &&
      paged.map((movie: MovieType) => {
        return (
          <MovieCard
            handleLike={(like) => dispatch(likeMovie({ id: movie.id, like }))}
            handleDisLike={(disLike) => dispatch(disLikeMovie({ id: movie.id, disLike }))}
            handleDelete={() => handleDelete(movie.id)}
            key={movie.id}
            movie={movie}
          />
        );
      })

    );
  };

  return (
    <div className="flex flex-col justify-between">
      <div>
        <Header />
      </div>
      <div className="m-6 mt-8">
        <div>
          <Filter items={Array.from(new Set(moviesState.movies.map(movie => movie.category)))} handleFilterChange={handleFilterChange} />
          <div className="mt-8">
            Per Page : <select onChange={handlePageSize} value={pageSize} className="ml-2 w-20 bg-white border p-1 rounded">
              {perPages.map(x => {
                return <option key={x} value={x}>{x}</option>
              })}
            </select>
          </div>
        </div>
        {!!movies && movies.length > 0 && <>
          <div className="w-full mt-6 grid 2xs:grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {renderMovies()}
          </div>
          <Pagination
            page={currentPage}
            totalPages={Math.ceil(movies.length / pageSize)}
            handlePagination={handlePages}
          />
        </>}
      </div>
    </div>
  );
};

export default HomePages;
