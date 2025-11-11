import { use } from "react";
import { useState } from "react";

export default function LikeButton() {
    const styles = {
    backgroundImage:
      "url('https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfdw1lxkBC_-37X-TCpA5visFOMyXg9aU3dY0ntXZ1omBC-Glz8UzvQQFJOM8bWHgSDJbobbTktw-D75MxREGtF7iOaddClfFFcA.jpg?r=a11')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "400px",
    height: "400px",
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
  };
  let redcolor = {
        color:"red",
        fontSize: 100
  }
  let [islike, setIslike] = useState(false);
  let [count , setCount] = useState(0)

  let toggleButton = () => {
    setIslike(!islike);
    setCount(count+1)
  };

  return (
    <div>
        
      <h1  style={styles} onClick={toggleButton}>
        {count}
        {islike ? (
          <i className="fa-solid fa-heart" style={redcolor}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </h1>
    </div>
  );
}
