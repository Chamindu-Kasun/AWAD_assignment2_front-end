import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AddUser = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    address: "",
  });

  const { id, name, address } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (id !== "" && name !== "" && address !== "") {
      console.log(id);
      await axios.post("http://localhost:8080/api/v1/user/saveUser", formData);
    } else {
      console.log("invalid");
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Id</Form.Label>
        <Form.Control
          type="number"
          name="id"
          placeholder="Enter user id"
          onChange={onChange}
          value={id}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter user name"
          onChange={onChange}
          value={name}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          placeholder="Enter user address"
          onChange={onChange}
          value={address}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={onSubmit}>
        Submit
      </Button>
      <Link to="/" className="btn btn-danger ms-4">
        Cancel
      </Link>
    </Form>
  );
};

export default AddUser;
