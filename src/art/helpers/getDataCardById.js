
import  {artList} from '../data/cards';


export const getPictureByCategory = (category) => {
    const  validArt = ['C01', 'C02'];

    if (!validArt.includes(category)){
        throw new Error(`${category} is not a valid category`);

    }

    return artList.filter(artList => artList.category === category);
}
