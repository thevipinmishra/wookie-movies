import { IconSearch } from "@tabler/icons-react";

const Nav = ({ searchValue, setSearchValue }) => {
  return (
    <div className="py-10 lg:py-4 bg-sky-100 border-b border-sky-300">
      <div className="container">
        <div className="text-center space-y-8 lg:space-y-0 lg:text-left lg:flex items-center justify-between">
          <h4 className="font-bold text-4xl lg:text-2xl">Wookie Movies</h4>

          <div className="relative max-w-xs lg:max-w-sm mx-auto lg:mx-0">
            <div className="absolute top-0 bottom-0 w-10  flex justify-center items-center">
              <IconSearch size={20} className="text-sky-600" />
            </div>
            <input
              value={searchValue}
              onChange={setSearchValue}
              placeholder="Search a Movie..."
              className="w-full ps-10 pe-3 py-2 rounded-md focus:outline-0 transition-colors border focus:border-sky-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
