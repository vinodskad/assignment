import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const User = () => {
  const users = useSelector((state) => state.UserList);
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    
    if (users) {
      setUserList(users);
    }
    // eslint-disable-next-line
  }, [users]);

  return (
    <Container className="mt-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {userList?.users?.map((item, i) => (
            <tr key={i + 1}>
              <td>{item?.id}</td>
              <td>{item?.name}</td>
              <td>{item?.email}</td>
              <td>{item?.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default User;
