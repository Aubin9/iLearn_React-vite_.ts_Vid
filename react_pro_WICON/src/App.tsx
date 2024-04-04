import { useState } from "react";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import Like from "./components/Like/Like";
import ExpandableText from "./components/ExpandableText/expandableText";
function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });
  const handleClick0 = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });
  const handleClick1 = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
    // pizza.toppings.push("Cheese");
  };

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });
  const handleClick2 = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

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
      <ExpandableText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
        impedit adipisci optio unde officia, expedita facere atque fugiat alias
        odit enim hic omnis aperiam recusandae nam voluptas quasi totam ipsam?
        Eos quo assumenda quod rem ipsam enim reiciendis iusto natus praesentium
        obcaecati, atque nulla odio. Nostrum, aut minima. Culpa ducimus deserunt
        harum iste iure similique doloremque, repudiandae nemo a placeat? Velit
        alias harum libero culpa rem nemo error distinctio necessitatibus
        cupiditate illum nobis dolores in repellendus excepturi suscipit ut
        repellat autem quas, saepe commodi, praesentium ex ratione minus modi.
        Et debitis veniam dicta, nulla sapiente vero eveniet est quia
        dignissimos.
      </ExpandableText>
    </>
  );
}

export default App;
