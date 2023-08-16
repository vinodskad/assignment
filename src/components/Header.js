import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetUserList } from "../actions/UserAction";

const Header = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const UserList = useSelector((state) => state.UserList);
  useEffect(() => {
   
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        dispatch(GetUserList(json));
      });
       // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (UserList) {
      setUserName(UserList?.users[0]?.name);
    }
  }, [UserList]);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">UserApp</Navbar.Brand>
        <Navbar.Text>{userName}</Navbar.Text>
        <Nav className="me-auto">
          <Nav.Link href="/">User</Nav.Link>
          <Nav.Link href="/posts">Posts</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
