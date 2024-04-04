import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Like = () => {
  const [status, setStatus] = useState(false);
  if (status)
    return (
      <FaHeart
        size={30}
        color="#ff6b81"
        cursor={"pointer"}
        onClick={() => setStatus(false)}
      />
    );
  return (
    <FaRegHeart cursor={"pointer"} size={30} onClick={() => setStatus(true)} />
  );
};

export default Like;
