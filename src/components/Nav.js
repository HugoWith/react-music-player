import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  // const openLibraryHandler = () => {
  //   setLibraryStatus(!libraryStatus);
  // };

  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => {
        setLibraryStatus(!libraryStatus)
      }}>
        Library
        <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
      </button>
    </nav>
  );
};

export default Nav;
