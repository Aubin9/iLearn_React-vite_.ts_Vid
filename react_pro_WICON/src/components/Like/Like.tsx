import { useState } from "react";

const Like = () => {
  const [status, setStatus] = useState(false);
  if (status)
    return (
      <div color="#ff6b81" onClick={() => setStatus(false)}>
        Like
      </div>
    );
  return <div onClick={() => setStatus(true)}>heart</div>;
};

export default Like;
