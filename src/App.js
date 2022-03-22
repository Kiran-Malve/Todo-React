import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

export function App() {
  const [taskValue, setTaskValue] = useState("");
  const [lists, setList] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setTaskValue(e.target.value);
  };
  const addItem = () => {
    if (taskValue !== "") {
      let userInput = {
        id: Math.random(),
        value: taskValue,
      };

      setList((prev) => {
        return [...prev, userInput];
      });
      setTaskValue("");
    }
  };

  console.log("todo list", lists);
  const deleteItem = (itemId) => {
    console.log("item", itemId);
  };

  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3rem",
          fontWeight: "bolder",
        }}
      >
        TODO LIST
      </Row>
      <hr />
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="add item . . . "
              size="lg"
              value={taskValue}
              onChange={handleChange}
              aria-label="add something"
              aria-describedby="basic-addon2"
            />

            <Button variant="dark" size="lg" onClick={() => addItem()}>
              ADD
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <ListGroup>
            {/* map over and print items */}
            {lists.map((item, i) => {
              return (
                <ListGroup.Item
                  variant="dark"
                  action
                  key={i}
                  onClick={() => deleteItem(item.id)}
                >
                  {item.value}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
