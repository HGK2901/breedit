import React, { useState } from "react";

import TinderCard from "react-tinder-card";

const db = [
  {
    name: "Richard Hendricks",
    url: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Erlich Bachman",
    url: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Monica Hall",
    url: "https://images.unsplash.com/photo-1433162653888-a571db5ccccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Jared Dunn",
    url: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Dinesh Chugtai",
    url: "https://plus.unsplash.com/premium_photo-1676914697716-fc77a8867f89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
];

const Simple = () => {
  const characters = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <>
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Damion&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
          rel="stylesheet"
        />
        <h1>React Tinder Card</h1>
        <div className="cardContainer">
          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: "url(" + character.url + ")" }}
                className="card"
              >
                <h3>{character.name}</h3>
              </div>
          <div>
            {lastDirection ? (
              <p>You swiped {lastDirection}</p>
            ) : (
              <p> Swipe </p>
            )}
          </div>
            </TinderCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Simple;
