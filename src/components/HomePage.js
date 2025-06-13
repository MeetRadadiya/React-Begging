import React from "react";
import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

const person = {
  name: "Katherine Johnson",
};

function Status({ status, isComplete }) {
  if (isComplete) {
    return <li className="status complete">{status}</li>;
  }
  return <li className="status">{status}</li>;
}

function Item({ name, isPacked }) {
  return <li className="item">{isPacked ? name + "✅" : name}</li>;
}

function List() {
  const listItems = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b> <br />
        {" " + person.profession + " "} <br />
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return <ul className="key_list">{listItems}</ul>;
}

const HomePage = () => {
  return (
    <div className="content_wrap">
      <div className="container">
        <div className="section_wrap">
          <h1>Normal Image</h1>
          <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
        </div>
        <div className="section_wrap">
          <h1>Dynamic Content</h1>
          <h3>My Name Is {person.name}</h3>
        </div>
        <div className="section_wrap">
          <h1>Normal list</h1>
          <ul>
            <li>Invent new traffic lights</li>
            <li>Rehearse a movie scene</li>
            <li>Improve the spectrum technology</li>
          </ul>
        </div>
        <div className="section_wrap">
          <h1>Dynamic list</h1>
          <ul>
            <Item isPacked={true} name="Space suit" />
            <Item isPacked={true} name="Helmet with a golden leaf" />
            <Item isPacked={false} name="Photo of Tam" />
          </ul>
        </div>
        <div className="section_wrap">
          <h1>Dynamic Status</h1>
          <ul className="statusWrap">
            <Status isComplete={false} status="In Progress" />
            <Status isComplete={false} status="In Progress" />
            <Status isComplete={true} status="Complete" />
          </ul>
        </div>
        <div className="section_wrap">
          <h1>List Item With Key</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
