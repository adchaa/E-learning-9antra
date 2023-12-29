import { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import styles from "./Admin.module.css";
import axios from "axios";
import ImagePreview from "../../components/ImagePreview/ImagePreview";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  async function deleteCourse(id) {
    const response = await axios.delete("http://127.0.0.1:3500/course/" + id);
    if (response.status == 200) {
      const newCourses = courses.filter((value) => value._id !== id);
      setCourses(newCourses);
    }
  }
  async function updateCourse(id) {
    console.log(id);
  }
  async function deleteUser(id) {
    const response = await axios.delete("http://127.0.0.1:3500/user/" + id);
    if (response.status == 200) {
      const newUsers = users.filter((value) => value._id !== id);
      setUsers(newUsers);
    }
  }
  async function updateUser(id) {
    console.log(id);
  }
  const usersHeaders = ["firstName", "lastName", "email", "phone"];
  const coursesHeaders = ["name", "price", "image"];
  useEffect(() => {
    axios.get("http://127.0.0.1:3500/user").then((response) => {
      setUsers(response.data);
    });
    axios.get("http://127.0.0.1:3500/course").then((response) => {
      const data = response.data;
      data.forEach((element) => {
        element["image"] = (
          <ImagePreview
            file={element["imageUrl"]}
            url={"http://127.0.0.1:3500/image/" + element["_id"]}
          />
        );
      });
      setCourses(data);
    });
  }, []);
  return (
    <div className={styles.container}>
      <Table
        title="Users"
        updateFn={updateUser}
        deleteFn={deleteUser}
        headers={usersHeaders}
        values={users.length !== 0 ? users : []}
      />
      <Table
        title="Courses"
        updateFn={updateCourse}
        deleteFn={deleteCourse}
        headers={coursesHeaders}
        values={courses.length !== 0 ? courses : []}
      />
    </div>
  );
}
