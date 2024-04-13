import { useEffect, useRef, useState } from "react";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import Like from "./components/Like/Like";
import ExpandableText from "./components/ExpandableText/expandableText";
import Form from "./components/Form/Form";
import ExpenseList from "./expenses-tracker/components/ExpenseList";
import ExpensesFilter from "./expenses-tracker/components/ExpensesFilter";
import ExpenseForm from "./expenses-tracker/components/ExpenseForm";

import categories from "./expenses-tracker/category";
import ProductLists from "./expenses-tracker/components/ProductLists";
// export const categories = ["Groceries", "Utilities", "Entertainment"] as const;
function App() {
  const ref = useRef<HTMLInputElement>(null);

  // after render
  useEffect(() => {
    // Side effect
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "Aubin";
  });
  const [alertVisible, setAlertVisible] = useState(false);

  const [category, setCategory] = useState("");
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "John",
  //   },
  // });
  // const handleClick0 = () => {
  //   setGame({ ...game, player: { ...game.player, name: "Bob" } });
  // };

  // const [pizza, setPizza] = useState({
  //   name: "Spicy Pepperoni",
  //   toppings: ["Mushroom"],
  // });
  // const handleClick1 = () => {
  //   setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  //   // pizza.toppings.push("Cheese");
  // };

  // const [cart, setCart] = useState({
  //   discount: 0.1,
  //   items: [
  //     { id: 1, title: "Product 1", quantity: 1 },
  //     { id: 2, title: "Product 2", quantity: 1 },
  //   ],
  // });
  // const handleClick2 = () => {
  //   setCart({
  //     ...cart,
  //     items: cart.items.map((item) =>
  //       item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
  //     ),
  //   });
  // };

  const [expenses, setExpenses] = useState([
    { id: 1, description: "desc", amount: 10, category: "Utilities" },
    { id: 2, description: "desc2", amount: 10, category: "Utilities" },
    { id: 3, description: "desc3", amount: 10, category: "Groceries" },
    { id: 4, description: "desc4", amount: 10, category: "Entertainment" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
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
      <Form />
      <div className="mb-3">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <ExpensesFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
      <div>
        <input ref={ref} type="text" className="form-control" />
      </div>
      <div>
        <select
          name=""
          id=""
          className="form-select"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value=""></option>
          <option value="Clothing">Clothing</option>
          <option value="Household">Household</option>
        </select>
        <ProductLists category={category} />
      </div>
    </>
  );
}

export default App;
