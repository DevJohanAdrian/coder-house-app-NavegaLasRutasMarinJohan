import { artList } from "../data/cards";

export const getProductByName = (name = '') => {
    name = name.toLocaleLowerCase().trim();
    if (name.length === 0) return [];

    return artList.filter(art => art.title.toLocaleLowerCase().includes(name))
}