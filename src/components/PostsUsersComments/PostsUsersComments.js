import React, { useState, useEffect } from "react";
import Card from "../UI/Card/Card";
import styles from "./PostsUsersComments.module.css";

const PostsUsersComments = () => {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  
    const handleResize = () => {
        setwindowWidth(window.innerWidth)
    }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
        window.removeEventListener('resize', handleResize)
    }
  }, [])


  return (
    <Card>
      <div className={styles.options}>
    {windowWidth}
      </div>

        
 
    </Card>
  );
};

export default PostsUsersComments;
