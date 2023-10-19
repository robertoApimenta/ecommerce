import { prismaClient } from "@/lib/prisma";
import React from "react";
import CategoryItem from "./category-item";

export default async function Categories() {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}