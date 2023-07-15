import { useState, useEffect } from "react";
import { ImageGrid } from "../components/imageGrid";
import Paginate from "react-paginate";
import axios from "axios";
export const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [images, setImages] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [safeSearch, setSafeSearch] = useState(false);
  const [maxResults, setMaxResults] = useState(false);

  const imgPerPage = 15;

  useEffect(() => {
    if (searchText.length > 0) {
      /* IMPORTANT: In order to successfully make this api call you will 
      have to define your own .env file with your own unique "REACT_APP_API_KEY" */
      axios
        .get(
          `https://pixabay.com/api/?key=${
            process.env.REACT_APP_API_KEY
          }&q=${searchText}&image_type=photo&per_page=${
            maxResults ? 200 : 30
          }&safesearch=${safeSearch}`
        )
        .then((res) => {
          setImages(res.data.hits);
          setPageCount(Math.ceil(res.data.hits.length / imgPerPage));
        })
        .catch((err) => console.error(err));
    }
  }, [searchText, maxResults, safeSearch]);

  // Slicing array to include specific page images
  const startOfPage = currPage * imgPerPage;
  const currPageImages = images.slice(startOfPage, startOfPage + imgPerPage);

  const handleSearchUpdate = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    // Automatically bring user back to page 1 when a query is edited
    setCurrPage(0);
  };

  const handlePageChange = (selectedPage) => {
    setCurrPage(selectedPage.selected);
  };

  console.log(images);
  return (
    <div className="flex flex-col justify-center items-center pt-24 pb-12">
      <input
        className="h-16 w-96 pr-6 pl-6 bg-gray-200 rounded-2xl z-0 focus:shadow focus:outline-none"
        type="text"
        placeholder="Enter query here!"
        onChange={handleSearchUpdate}
      />

      <div className="flex justify-center items-center pt-6">
        <div className="p-3">
          <label>
            <input
              type="checkbox"
              checked={safeSearch}
              onChange={() => {
                setSafeSearch(!safeSearch);
                setCurrPage(0);
              }}
            />{" "}
            Safe Search
          </label>
        </div>
        <div className="p-3">
          <label>
            <input
              type="checkbox"
              checked={maxResults}
              onChange={() => {
                setMaxResults(!maxResults);
                setCurrPage(0);
              }}
            />{" "}
            Show Max Results
          </label>
        </div>
      </div>

      {searchText.length > 0 && images.length > 0 ? (
        <>
          <ImageGrid imageData={currPageImages} />
          <Paginate
            pageCount={pageCount}
            onPageChange={handlePageChange}
            forcePage={currPage}
            containerClassName={"pagination"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </>
      ) : (
        <h1 className="p-5">No Results. Enter a query above.</h1>
      )}
    </div>
  );
};
