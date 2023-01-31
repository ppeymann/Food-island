import CategoriesPage from "@/components/template/CategoriesPage";
import React from "react";

const Categories = ({ data }) => {
  return <CategoriesPage data={data} />;
};

export default Categories;
export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  const filter = data.filter((item) => {
    const diff = item.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty
    );
    const timeRes = item.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const [timeDetail] = cookingTime.split(" ");
      if (time === "less" && timeDetail && +timeDetail <= 30) {
        return detail;
      } else if (time === "more" && +timeDetail >= 30) {
        return detail;
      }
    });
    if (time && difficulty && timeRes.length && diff.length) {
      return item;
    } else if (!time && difficulty && diff.length) {
      return item;
    } else if (time && !difficulty && timeRes.length) {
      return item;
    }
  });
  return {
    props: {
      data: filter,
    },
  };
}
