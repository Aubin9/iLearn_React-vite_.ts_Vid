import { useState } from "react";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import Like from "./components/Like/Like";
function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <>
      {/* fragment */}
      <ListGroup />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)} text={"Alert"} />
      )}
      <Button color="secondary" onClick={() => setAlertVisible(true)}>
        Click me
      </Button>
      <Like />
    </>
  );
}

export default App;
