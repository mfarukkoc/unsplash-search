import styled from "styled-components";

const ErrorAlert = ({ title, message }) => {
  return (
    <Wrapper>
      {title || "Error"}
      {message ? <Description>{message}</Description> : ""}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: auto;
  background: rgba(255, 74, 74, 0.1);
  border-radius: 4px;
  padding: 22px 30px;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #ff4a4a;
`;
const Description = styled.div`
  padding-top: 3px;
  font-weight: 500;
`;
export default ErrorAlert;
