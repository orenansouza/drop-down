import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282c34;
`;

export const Button = styled.input`
  width: 500px;
  height: 100px;
`;

export const List = styled.ul`
  list-style-type: none;
  position: absolute;
  display: ${(props) => (props.isOpen ? "column" : "none")};
  width: 497px;
  margin: 0;
  padding: 0;
  border: 1px solid grey;
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Text = styled.li`
  color: #fff;
  font-size: 60px;
`;
