import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Cards.module.css";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

export default function Cards() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:3500/course").then((response) => {
      setCourses(response.data);
    });
    console.log(courses);
  }, []);
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Discover Our Courses</h1>
        <PrimaryBtn text="View More" />
      </div>
      <div className={styles.cards}>
        {courses.map((course) => (
          <Card course={course} />
        ))}
      </div>
    </div>
  );
}

function Card(props) {
  const { course } = props;
  return (
    <div className={styles.card}>
      <img src={"http://127.0.0.1:3500/image/" + course.imageUrl} />
      <p className={styles.cardTitle}>{course.name}</p>
      <p className={styles.cardPrice}>{course.price + "DT/ Month"}</p>
    </div>
  );
}
