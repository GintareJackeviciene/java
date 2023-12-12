import { v4 as uuidv4 } from 'uuid';

const get = key => {
    const value = localStorage.getItem(key);
    if (null === value) {
        return [];
    }
    return JSON.parse(value);
};
// gaunam masyva.nuskaityti viska

const set = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};
// paimam visa masyva ka irasom paverciam i stringa

export const store = (key, value) => {
    const id = uuidv4();
    value.id = id;
    const items = get(key); //gaunam kas ten irasyta
    items.unshift(value); //reiksme virsuj irasoma
    set(key, items); //visa masyma su metodu set irasom i localStorage
    return id;
}
// paima ka reikia irasyt, sugeneruoja unikalu skaiciu, 
// ideda i tapati objekta,tada nuskaito irasytus irasus ir viska iraso atgal i localstorage
//ir grazina unikalu id
//naujai sukurto iraso uzsaugoji procesas

export const read = (key, id = 0) => {
    const items = get(key); 
    if (id) {
        return items.find(item => item.id === id)
    }
    return items;
}
//grazina visa masyva arba viska arba 1 elementa pagal id


export const destroy = (key, id) => {
    const items = get(key).filter(item => item.id !== id);
    set(key, items);
}
// istrynimas. pasako ka reikia istrinti

export const lsUpdate = (key, id, value) => {
    const items = get(key).map(item => item.id === id ? {...item, ...value, id} : item);
    set(key, items);
}