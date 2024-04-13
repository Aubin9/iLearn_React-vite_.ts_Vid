import React, { useEffect, useState } from "react";

interface Props {
  category: string;
}

const ProductLists = ({ category }: Props) => {
  const [products, setProducts] = useState<string[]>([]);
  useEffect(() => {
    console.log("Fetching products in ", category);
    setProducts(["CLoting", "Household"]);
  }, [category]);
  return <div>ProductLists</div>;
};

export default ProductLists;
