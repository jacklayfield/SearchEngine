import { useLocation, useNavigate } from "react-router-dom";
export const ImageDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Grab any data that should have been passed from previous page
  const imageData = location.state?.data;
  const navigateToSearch = () => {
    // 👇️ navigate to /
    navigate("/");
  };
  return (
    <>
      <button
        onClick={navigateToSearch}
        className="flex mt-24 ml-12 p-2 bg-gray-200 rounded-2xl"
      >
        {"< Back to search"}
      </button>
      <div className="flex flex-col justify-center items-center pb-12">
        <div className="flex justify-center items-center pb-6">
          {" "}
          <h1>By: {imageData ? imageData.user : "Error! No Image Selected"}</h1>
          {imageData?.userImageURL && (
            <img
              className="rounded-full h-32 object-cover pl-3"
              src={imageData?.userImageURL}
              alt="None found"
            />
          )}
        </div>

        <h3>Tags: {imageData ? imageData.tags : "Error! No Image Selected"}</h3>
        <img src={imageData?.largeImageURL} alt="could not display" />
      </div>
    </>
  );
};
