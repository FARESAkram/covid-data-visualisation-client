import { atom } from "recoil";

export const countryAtom = atom<Country>({
    key: 'countryAtom',
    default: {
        date: '',
        pays: '',
        infectes: 0,
        deces: 0,
        guerisons: 0,
        tauxDeces: 0,
        tauxGuerison: 0,
        tauxInfecte: 0,
    },
});