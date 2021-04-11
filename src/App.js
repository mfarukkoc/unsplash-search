import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Masonry from "react-masonry-css";

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
      <CustomMasonry
        breakpointCols={{
          default: 3,
          768: 2
        }}
      >
        <ImageWrap>
          <Image
            alt="ist"
            src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1"
          ></Image>
        </ImageWrap>
        <ImageWrap>
          <Image
            src="https://images.unsplash.com/photo-1527838832700-5059252407fa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aXN0YW5idWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1"
            alt="IST"
          />
        </ImageWrap>
        <ImageWrap>
          <Image
            src="https://images.unsplash.com/photo-1527838832700-5059252407fa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aXN0YW5idWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1"
            alt="IST"
          />
        </ImageWrap>
        <ImageWrap>
          <Image
            src="https://images.unsplash.com/photo-1527838832700-5059252407fa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aXN0YW5idWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1"
            alt="IST"
          />
        </ImageWrap>
        <ImageWrap>
          <Image
            alt="ist"
            src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1"
          ></Image>
        </ImageWrap>
        <ImageWrap>
          <Image
            src="https://images.unsplash.com/photo-1527838832700-5059252407fa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aXN0YW5idWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1"
            alt="IST"
          />
        </ImageWrap>
      </CustomMasonry>
      <ContentWrap>
        <FakeDiv>
          <Image
            alt="ist"
            src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1"
          ></Image>
        </FakeDiv>
        <FakeDiv>
          <Image
            src="https://images.unsplash.com/photo-1527838832700-5059252407fa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aXN0YW5idWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1"
            alt="IST"
          />
        </FakeDiv>
        <FakeDiv>
          <Image
            src="https://images.unsplash.com/photo-1527838832700-5059252407fa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aXN0YW5idWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1"
            alt="IST"
          />
        </FakeDiv>
        <FakeDiv>
          <Image
            alt="ist"
            src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1"
          ></Image>
        </FakeDiv>
        <FakeDiv>
          <Image
            alt="ist"
            src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1"
          ></Image>
        </FakeDiv>
        <FakeDiv>
          <Image
            src="https://images.unsplash.com/photo-1527838832700-5059252407fa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aXN0YW5idWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1"
            alt="IST"
          />
        </FakeDiv>
        <FakeDiv>
          <Image
            src="https://images.unsplash.com/photo-1527838832700-5059252407fa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aXN0YW5idWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1"
            alt="IST"
          />
        </FakeDiv>
        <FakeDiv>
          <Image
            alt="ist"
            src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1"
          ></Image>
        </FakeDiv>
      </ContentWrap>
    </div>
  );
}

const CustomMasonry = styled(Masonry)`
  margin: 170px auto 0 auto;
  width: 70%;

  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    width: 90%;
    margin-top: 244px;
  }
`;

const ContentWrap = styled.div`
  display: none;
  margin: 170px auto 0 auto;
  width: 70%;
  background: red;
  margin-top: 170px;
  min-height: 100%;
  overflow: auto;
  flex-flow: column wrap;
  @media (max-width: 768px) {
    margin-top: 244px;
    width: 90%;
  }
`;
const FakeDiv = styled.div`
  width: 100%;

  background: #ec985a;
  margin-bottom: 20px;
`;
const ImageWrap = styled.div`
  margin-bottom: 20px;
`;
const Image = styled.img`
  width: 100%;
`;
export default App;
