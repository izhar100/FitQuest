// import { useState } from "react";
import Carousel from "./Crousel/Carousel";
import Populare from "./PopularExersice/Populare";

const Workout = () => {
  // const [sta, setSta] = useState("");
  const data = [
    {
      title: "Cycling",
      image:
        "https://img.freepik.com/free-photo/young-women-taking-part-spinning-class_23-2149332067.jpg",
    },
    {
      title: "Walking",
      image:
        "https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558_1280.jpg",
    },
    {
      title: "Running",
      image:
        "https://image.boxrox.com/2021/11/how-to-breathe-when-running-scaled-e1637135219880.jpg",
    },
    {
      title: "Stretching",
      image:
        "https://img.freepik.com/free-photo/black-female-athlete-warming-up-before-ports-training-doing-stretching-exercises-park_637285-4483.jpg",
    },
    {
      title: "Push-Ups",
      image:
        "https://media.istockphoto.com/id/465115650/photo/doing-push-ups.jpg?s=612x612&w=0&k=20&c=H_bJ1LAqBUe6NT9IV_s3rHOvPX5NAcXv9gWL0_O6X1U=",
    },
    {
      title: "Lifting",
      image:
        "https://www.foodforfitness.co.uk/wp-content/uploads/2018/10/beginner-gym-7-e1540261874614.jpg",
    },
    {
      title: "Treadmill",
      image:
        "https://www.eatthis.com/wp-content/uploads/sites/4/2022/05/fit-man-treadmill-workout.jpg?quality=82&strip=1",
    },
  ];
  return (
    <div>
      <Carousel />
      <div style={{ width: "80%", margin: "auto" }}>
        <h1>Popular Exercises</h1>
        <div
          className="popular"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "1.5rem",
          }}>
          {data.map((it) => {
            return <Populare key={it.title} {...it} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Workout;
