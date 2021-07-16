import React, { useState, useEffect } from "react";
import { Drawer, Skeleton  } from "antd";
import useFetchData from "./Service";

// const url =`https://jsonplaceholder.typicode.com/posts`

const CareerDetails = ({ player, visible, onClose }) => {
    
  const dumbyData = {
    name: "Lord Gerald",
    team: "Lord ikoojo",
    age: "25 years of age",
    born: "17, june",
    batting: "Right Hand and Left leg",
    bowling: "i don't giev a fuck",
  };
  const [details, setDetails] = useState(dumbyData);
  const { name, team, age, batting, bowling } = details;
  const [loading, output ,persons] = useFetchData('./ '+ player.replace('','_') +'.json');
  useEffect(() => {
    console.log("render");
    return () => console.log("stop render");
  }, []);

  useEffect(() => {
    console.log("mounts");
    return () => {
      console.log("unmounts");
    };
  }, []);
  // React lifeCycle methods you can of useEffect hooks as
  // ComponentDidMount, ComponentDidUpdate, and ComponentWillUnmount

  useEffect(() => {
    async function fetchData() {
      await fetch("./" + player.replace("", "_") + ".json")
        .then((res) => res.json())
        .then((data) => setDetails(details))
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);

  return (
    <Drawer
      destroyOnClose
      title={player}
      visible={visible}
      width={640}
      onClose={onClose}
    >
      <Skeleton active avatar loading={loading} paragraph={{ rows: 5 }}>
        <div className="body">
          <div style={{ padding: 10 }}>
            <p>Name - {name}</p>
            <p>Team - {team}</p>
            <p>Age - {age}</p>
            {/* <p>Born - {born}</p> */}
            <p>Batting - {batting}</p>
            <p>Bowling - {bowling}</p>
          </div>
          <div className="text-center">
            <h2>List of Post</h2>
            {persons.map((item) => (
              <div key={item.id}>
                {item.title} - {item.body}
              </div>
            ))}
          </div>
        </div>
      </Skeleton>
    </Drawer>
  );
};

export default CareerDetails;
