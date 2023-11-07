import  {artList} from '../data/cards';

export const getProductById = (id) => {
    return artList.find(artList => artList.id === id);
}

// implementar Promise