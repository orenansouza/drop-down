import React, { useState, useRef, useEffect } from "react";

import { Container, Button, List, Text } from "./styles";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  function clickOutsideButton(event) {
    if (ref.current && !ref.current.contains(event.target) && isOpen) {
      setIsOpen(false);
    }
  }

  function keyDownOutsite(event) {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  }
  function setOpenList(event) {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    document.addEventListener("click", clickOutsideButton);
    document.addEventListener("keydown", keyDownOutsite);
    return () => {
      document.removeEventListener("click", clickOutsideButton);
      document.removeEventListener("keydown", keyDownOutsite);
    };
  });

  return (
    <Container>
      <header>
        <div>
          <Button type="button" value="Dropdown" onClick={setOpenList} />
          <List ref={ref} isOpen={isOpen}>
            <Text>Teste 01</Text>
            <Text>Teste 02</Text>
            <Text>Teste 03</Text>
          </List>
        </div>
      </header>
    </Container>
  );
}

export default App;
