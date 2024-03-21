import data from "../data.json";
import { useState } from "react";

function MyProjects() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index < data.projects.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  let projects = data.projects;
  let project = projects[index];

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <ul>
        <li>{project.starterTask}</li>
        <li>{project.objective}</li>
        <li>
          <a href={project.howToURL}>Click Here to learn how!</a>
        </li>
        <li>
          <img src={project.photoURL} alt="Dnd photo" />
        </li>
      </ul>
    </div>
  );
}

export default MyProjects;
