import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/v1/user/getUserByUserId/${id}`
        );
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [id]);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
  });

  const { name, address } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name !== "" && address !== "") {
      formData.id = id;
      await axios.put("http://localhost:8080/api/v1/user/updateUser", formData);
    } else {
      console.log("invalid");
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>{user?.name}</Form.Label>
        <Form.Control
          type="text"
          placeholder="Edit user name"
          name="name"
          onChange={onChange}
          value={name}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>{user?.address}</Form.Label>
        <Form.Control
          type="text"
          placeholder="Edit user address"
          onChange={onChange}
          name="address"
          value={address}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={onSubmit}>
        Edit
      </Button>
      <Link to="/" className="btn btn-danger ms-4">
        Cancel
      </Link>
    </Form>
  );
};

export default EditUser;
