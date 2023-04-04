import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { IconInfoSquareRoundedFilled, IconX } from "@tabler/icons-react";

const MovieCard = ({ movie }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-gray-50 border border-sky-200 rounded-md overflow-hidden flex flex-col">
      <img className="thumbnail" src={movie.poster} alt={movie.title} loading="lazy" />
      <div className="p-4 flex-1 flex flex-col">
        <p className="font-bold text-2xl">{movie.title}</p>
        <div className="my-3 flex-1">
          <p className="text-gray-500 text-sm">
            {" "}
            Director - <span className="text-sky-900">{movie.director}</span>
          </p>
          <p className="text-gray-500 text-sm">
            IMDB Rating - <span className="text-sky-900">{movie.imdb_rating}</span>
          </p>
        </div>

        <button
          onClick={handleClickOpen}
          className="flex items-center justify-center gap-2 bg-sky-600 text-white focus:ring-1 focus:ring-offset-sky-100 px-4 py-4 w-full rounded-md text-sm font-medium hover:bg-sky-800 transition-colors"
        >
          <IconInfoSquareRoundedFilled size={18} /> More Details
        </button>

        <Transition appear show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={handleClose}>
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
              <div className="fixed inset-0 bg-gray-50/40 backdrop-blur-md" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="relative w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-4 lg:p-8 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-gray-900">
                      {movie.title}
                    </Dialog.Title>
                    <button
                      className="h-8 w-8 flex justify-center items-center bg-sky-50 hover:bg-sky-200 transition-colors duration-200 rounded-lg absolute right-4 top-4 lg:right-8 lg:top-8"
                      onClick={() => handleClose()}
                    >
                      <IconX size={18} />
                    </button>
                    <div className="mt-6">
                      <div className="lg:flex items-start gap-4">
                        <img src={movie.poster} className="w-52 h-auto rounded-sm mb-10 lg:mb-0 mx-auto lg:mx-0" />
                        <div className="space-y-3">
                          <p className="tetx-sm text-gray-600">{movie.overview}</p>
                          <hr />
                          <p className="text-sm">
                            Released -{" "}
                            <span className="font-medium text-sky-900">
                              {new Intl.DateTimeFormat("en-In", {
                                month: "short",
                                year: "numeric",
                              }).format(new Date(movie.released_on))}
                            </span>
                          </p>
                          <p className="text-sm">
                            Length - <span className="font-medium text-sky-900">{movie.length}</span>
                          </p>
                          <div className="lg:flex items-center gap-2 text-sm space-y-2 lg:space-y-0">
                            <p>Casts -</p>{" "}
                            <div className="flex gap-1 lg:gap-2 flex-wrap">
                              {movie.cast.map((item) => (
                                <span key={item} className="bg-sky-100 border border-sky-700 text-sky-700 text-xs font-medium rounded-full px-2 py-1">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-sm">
                            Director - <span className="font-medium text-sky-900">{movie.director}</span>
                          </p>
                          <p className="text-sm">
                            IMDB Rating - <span className="font-medium text-sky-900">{movie.imdb_rating}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default MovieCard;
