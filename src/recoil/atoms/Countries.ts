import { atom } from "recoil";

export const countriesAtom = atom<Country[]>({
    key: 'countriesAtom',
    default: [],
});