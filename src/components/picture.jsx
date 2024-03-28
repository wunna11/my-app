import { useState } from "react";

export default function Picture() {

  const [isActive, setIsActive] = useState(false)
  let backgroundClassName = 'background'
  let pictureClassName = 'picture'
  
  if (isActive) {
    pictureClassName += ' picture--active'
  } else {
    backgroundClassName += ' background--active'  
  }

  const clickBackground = () => {
    setIsActive(false);
  }

  const clickPicture = (e) => {
    e.stopPropagation();
    setIsActive(true)
  }

  return (
    <div
      className={backgroundClassName}
      onClick={clickBackground}
    >
      <img
        className={pictureClassName}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={clickPicture}
      />
    </div>
  );
}
