import styled from "react-emotion";

export default styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${props => props.width || "100px"};
  height: ${props => props.height || "50px"};
  background-color: ${props => props.backgroundColor || "#070707"};
  color: ${props => props.color || "#fff"};
  cursor: pointer;
  padding: 0px 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
