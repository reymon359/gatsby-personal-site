import { create } from 'zustand';
import { getRandomColor } from './index';

type StarColorState = {
    starColor: string;
    setRandomStarColor: () => void;
};

export const useStarColorStore = create<StarColorState>((set) => ({
    starColor: getRandomColor(),
    setRandomStarColor: () => set({ starColor: getRandomColor() }),
}));