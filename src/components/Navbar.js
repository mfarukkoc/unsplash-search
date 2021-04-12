import { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.svg";
import Dropdown from "./Dropdown";
const Navbar = ({ searchQuery, setSearchQuery, onSearch }) => {
  const handleChange = (e) => {
    setSearchQuery({ ...searchQuery, search: e.target.value });
  };
  const [selected, setSelected] = useState({ index: -1, id: undefined });
  useEffect(() => {
    setSearchQuery({ ...searchQuery, collection: selected });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <FlexWrapper>
      <img src={Logo} alt="Chamelon logo"></img>

      <InputWrap>
        <QueryInput
          onChange={handleChange}
          defaultValue={searchQuery.search}
          placeholder="Query"
          onKeyDown={(e) => {
            if (e.key === "Enter") onSearch();
          }}
        ></QueryInput>
        <Dropdown selected={selected} setSelected={setSelected}></Dropdown>
        <SearchButton onClick={onSearch}>SEARCH</SearchButton>
      </InputWrap>
    </FlexWrapper>
  );
};

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #050417;
  padding: 25px 50px;
  width: calc(100% - 100px);
  position: fixed;
  z-index: 999;
  top: 0;
  @media (max-width: 768px) {
    > :first-child {
      padding-left: 20px;
    }
    align-items: flex-start;
    padding: 25px 10px;
    width: calc(100% - 20px);
  }
`;

const InputWrap = styled.div`
  display: flex;
  margin-left: 86px;
  margin-right: 106px;

  min-width: 0;
  width: 100%;
  justify-content: center;
  gap: 30px;
  @media (max-width: 1024px) {
    margin-left: 30px;
    margin-right: 20px;
  }
  @media (max-width: 768px) {
    gap: 12px;
    flex-direction: column;
  }
`;
const QueryInput = styled.input`
  background-color: #ffffff;
  border-radius: 4px;
  border: none;
  padding: 12px 20px;
  height: 50px;
  width: 400px;
  @media (max-width: 768px) {
    width: 100%;
  }
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 600;
  color: #050417;
  outline: none;
  :focus {
    box-shadow: 0 0 0 3px #559bd1;
  }
  ::placeholder {
    color: #d5d7e5;
    font-weight: 600;
  }
`;

const SearchButton = styled.button`
  width: 246px;
  height: 50px;
  background-color: #2a2b8d;
  border-radius: 25px;
  outline: none;
  border: 0;
  font-weight: 800;
  cursor: pointer;
  transition: background-color 0.3s;
  :hover,
  :focus {
    background-color: #3f4098;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  letter-spacing: 0.1em;
  color: #ffffff;
`;

export default Navbar;
