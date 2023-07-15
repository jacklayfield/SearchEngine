import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Search } from "./pages/search";
import { Error } from "./pages/error";
import { ImageDetails } from "./pages/imageDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/imageDetails" element={<ImageDetails />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
