import MenuPage from "@/components/template/MenuPage";
import React from "react";

const Menu = ({ data }) => {
  return <MenuPage data={data} />;
};

export default Menu;

export async function getStaticProps() {
  const res = await fetch("http://localhost:8000/data");
  const data = await res.json();

  return {
    props: { data },
    revalidate: 10, //seconds
  };
}
