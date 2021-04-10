import { useState } from "react";
import styled from "styled-components";

const Dropdown = ({ selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    {
      title: "New York",
      selected: false,
      key: "location"
    },
    {
      title: "Dublin",
      selected: false,
      key: "location"
    },
    {
      title: "California",
      selected: false,
      key: "location"
    }
  ];
  const handleSelect = (index) => {
    setSelected(index);
    setIsOpen(false);
  };
  return (
    <Wrapper
      active={isOpen}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setIsOpen(false);
        }
      }}
    >
      <Header
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        selected={selected}
        tabIndex="0"
      >
        {selected === -1 ? "Collections" : options[selected].title}
        <ExpandTriangle
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.744 6.17159C5.34666 6.61401 4.65334 6.61401 4.256 6.17159L0.436019 1.91818C-0.142142 1.27442 0.314742 0.249999 1.18002 0.249999L8.81999 0.25C9.68526 0.25 10.1421 1.27442 9.56398 1.91818L5.744 6.17159Z"
            fill="#050417"
          />
        </ExpandTriangle>
      </Header>
      <OptionsWrapper active={isOpen}>
        {options.map((option, index) => (
          <Option
            tabIndex="0"
            onClick={() => {
              handleSelect(index);
            }}
          >
            {option.title}
          </Option>
        ))}
      </OptionsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  position: relative;
  display: flex;
  height: 50px;
  width: 400px;
  @media (max-width: 768px) {
    width: 100%;
  }
  border-radius: ${(props) => (props.active ? "4px 4px 0 0" : "4px")};
  border: none;
  box-sizing: border-box;

  ::after {
    content: "";
    position: absolute;
    background-color: #d5d7e5;
    opacity: 0.7;
    border-radius: 0 0 4px 4px;
    left: 10px;
    bottom: -5px;
    width: calc(100% - 20px);
    height: 5px;
  }
`;

const ExpandTriangle = styled.svg`
  margin-left: auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.selected === -1 ? "#d5d7e5" : "#050417")};
  outline: none;
  border-radius: 4px;
  :focus {
    box-shadow: 0 0 0 3px #559bd1;
  }
  cursor: pointer;
`;
const OptionsWrapper = styled.div`
  display: ${(props) => (props.active ? "unset" : "none")};
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 2;
  background: white;
  border-radius: 0 0 4px 4px;
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.1);
`;

const Option = styled.div`
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #050417;
  cursor: pointer;
  border-bottom: 1px solid rgba(213, 215, 229, 0.3);
  outline: none;
  :hover,
  :focus {
    background: rgba(213, 215, 229, 0.3);
  }
  :last-child {
    border-radius: 0 0 4px 4px;
    border-bottom: none;
  }
`;
export default Dropdown;
