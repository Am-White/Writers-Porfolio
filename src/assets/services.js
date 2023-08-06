import { projects } from "./Data";

export function getCategory() {
  const categoryList = projects;
  return categoryList;
}

export function filterCategory(categoryType) {
  let filtredCategory = getCategory().filter(type => type.category === categoryType);
  return filtredCategory;
}