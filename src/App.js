import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import unsplashService from "./unsplashService";
import Spinner from "./components/Spinner";
import ErrorAlert from "./components/ErrorAlert";
function App() {
  const [searchQuery, setSearchQuery] = useState({
    search: "Istanbul",
    collection: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);

  const onSearch = async () => {
    setError("");
    setLoading(true);
    const response = await unsplashService.search({
      query: searchQuery.search,
      collection: searchQuery.collection?.id,
      page: currentPage
    });
    setLoading(false);
    if (response.error) {
      setError(response.message);
    } else {
      setTotalPages(response.total_pages);
      if (currentPage > response.total_pages) {
        setCurrentPage(response.total_pages);
      }
      setSearchResults(response?.results);
    }
  };
  const handlePageChange = async (change) => {
    setCurrentPage(currentPage + change);

    await onSearch();
  };
  useEffect(() => {
    onSearch();
  }, []);

  return (
    <div>
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={onSearch}
      ></Navbar>
      <ContentWrap>
        {error ? (
          <ErrorAlert message={error}></ErrorAlert>
        ) : loading ? (
          <Center>
            <Spinner></Spinner>
          </Center>
        ) : (
          <>
            <CustomMasonry
              breakpointCols={{
                default: 3,
                768: 2
              }}
            >
              {searchResults.map((image) => (
                <ImageWrap key={image.id}>
                  <Image
                    alt={image.alt_description}
                    src={image.urls.small}
                    onClick={() => window.open(image.links.html, "_blank")}
                    tabIndex="0"
                  ></Image>
                </ImageWrap>
              ))}
            </CustomMasonry>
            {searchResults.length > 0 ? (
              <Center>
                <PaginationButton
                  disabled={currentPage <= 1}
                  onClick={() => {
                    handlePageChange(-1);
                  }}
                >
                  Previous
                </PaginationButton>
                <PaginationButton
                  disabled={currentPage >= totalPages}
                  onClick={() => {
                    handlePageChange(1);
                  }}
                >
                  Next
                </PaginationButton>
              </Center>
            ) : (
              ""
            )}
          </>
        )}
      </ContentWrap>
    </div>
  );
}
const ContentWrap = styled.div`
  margin: 170px auto 0 auto;
  width: 70%;
  @media (max-width: 768px) {
    width: 90%;
    margin-top: 244px;
  }
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
`;
const CustomMasonry = styled(Masonry)`
  display: flex;
  gap: 20px;
`;

const ImageWrap = styled.div`
  margin-bottom: 20px;
  overflow: hidden;
  display: flex;
  :focus-within {
    box-shadow: 0 0 0 5px #559bd1;
  }
`;
const Image = styled.img`
  width: 100%;
  cursor: pointer;
  transition: 0.5s;
  outline: none;
  :hover {
    transform: scale(1.1);
  }
`;

const PaginationButton = styled.button`
  padding: 12px 17px;
  margin: 70px 10px 70px 10px;
  width: 93px;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) =>
    props.disabled ? "rgba(42,43,141,0.4)" : "rgba(42,43,141,1)"};
  border: 1px solid
    ${(props) =>
      props.disabled ? "rgba(213,215,229,0.4)" : "rgba(213,215,229,1)"};
  border-radius: 2px;
  box-sizing: border-box;
  background: #fff;
  outline: none;
  :focus,
  :hover:not([disabled]) {
    border: 1px solid #bfc1ce;
  }
  :not([disabled]) {
    cursor: pointer;
  }
`;
export default App;
