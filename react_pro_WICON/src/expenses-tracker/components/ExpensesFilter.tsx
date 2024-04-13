// import { categories } from "../../App";
import categories from "../category";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpensesFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
      {/* <option value="Groceries">Groceries</option>
      <option value="Utilities">utilities</option>
      <option value="Entertainment">Entertainment</option> */}
    </select>
  );
};

export default ExpensesFilter;
