import React, { useState } from "react";
import MovieType from "../../types/MoviesType";
import { ThumbsUp, ThumbsDown } from "react-feather";
import cn from "classnames"
import Button from "../Button/Button";

interface MovieCardProps {
  movie: MovieType;
  handleLike: (like: boolean) => void;
  handleDisLike: (disLike: boolean) => void;
  handleDelete: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, handleLike, handleDisLike, handleDelete }) => {
  const [action, setAction] = useState<{ name?: "like" | "disLike" }>();

  const onLikeClick = () => {
    if (!!action && action.name == "like") {
      handleLike(false)
      setAction(undefined)
    }
    else if (!!action && action.name == "disLike") {
      handleDisLike(false)
      handleLike(true);
      setAction({ name: "like" })
    }
    else {
      setAction({ name: "like" });
      handleLike(true)
    }
  }

  const onDisLikeClick = () => {
    if (!!action && action.name == "disLike") {
      handleDisLike(false)
      setAction(undefined)
    }
    else if (!!action && action.name == "like") {
      handleLike(false)
      handleDisLike(true);
      setAction({ name: "disLike" })
    }
    else {
      handleDisLike(true)
      setAction({ name: "disLike" });
    }
  }

  const onDeleteClick = () => {
    handleDelete()
  }

  return (
    <div>
      <div className="flex flex-col overflow-hidden items-center bg-white rounded-lg border shadow-md p-4">
        <div className="flex flex-col h-full leading-normal w-full gap-3">
          <img
            className="w-full h-[18rem] rounded-md ease-in-out duration-300 scale-100 md:h-[20rem] hover:scale-105"
            src={require(`../../assets/images/${movie.image}`)}
            alt=""
          ></img>

          <h5 className="font-bold text-xl tracking-tight text-gray-900 truncate">
            {movie.title}
          </h5>

          <div className="text-xs text-gray-700 dark:text-gray-400">
            <span>
              <span className="font-bold">Category : </span>
              <span className="font-medium">{movie.category}</span>
            </span>
          </div>

          <div className="flex flex-col justify-between text-xs mt-6">
            <div className="flex justify-between">
              <div
                onClick={onLikeClick}
                className={cn(
                  "flex justify-between items-center cursor-pointer",
                  !!action && action.name == "like" && "text-blue-400"
                )}
              >
                <span className="mr-1">
                  <ThumbsUp className="w-6 h-6" />
                </span>
                <span className="text-lg">{movie.likes}</span>
              </div>
              <div
                onClick={onDisLikeClick}
                className={cn(
                  "flex justify-between items-center cursor-pointer",
                  !!action && action.name == "disLike" && "text-red-400"
                )}
              >
                <span className="text-lg mr-1">{movie.dislikes}</span>
                <span>
                  <ThumbsDown className="w-6 h-6" />
                </span>
              </div>
            </div>
          </div>

          <div className="mt-2" onClick={onDeleteClick}>
            <Button
              title="Delete"
              customClassName="p-2 bg-red-400 w-full text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
