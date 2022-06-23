import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import axios from "axios";

const UserList = (props) => {
  const { users } = props;

  const onDelete = async (user) => {
    console.log(user);
    await axios.delete("http://localhost:8080/api/v1/user/deleteUser", {
      data: user,
    });
  };

  return (
    <ListGroup className="mt-4">
      {users.map((user, index) => (
        <ListGroupItem className="d-flex" key={index}>
          <strong>{user.name}</strong>
          <strong className="ms-auto">{user.address}</strong>
          <div className="ms-auto">
            <Link className="btn btn-warning me-2" to={`/editUser/${user.id}`}>
              Edit
            </Link>
            <Button
              className="btn btn-danger"
              onClick={() => {
                onDelete(user);
              }}
            >
              Delete
            </Button>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default UserList;
