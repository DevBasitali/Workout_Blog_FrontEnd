import React, { useEffect, useState } from "react";

const Home = () => {

  const [workouts, setWorkouts] = useState(null);
  //const [workouts, setWorkouts] = useState (null)

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch("https://localhost:3000/api/workout");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json)
      }
    };
    fetchWorkout();
  }, []);

  return (
    <>
      <div className="home">
        <div className="workout">
          
        </div>
      </div>
    </>
  );
};

export default Home;
