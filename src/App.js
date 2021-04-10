import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [searchQuery, setSearchQuery] = useState({
    search: "",
    collection: ""
  });
  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <div>
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      ></Navbar>
    </div>
  );
}

export default App;
