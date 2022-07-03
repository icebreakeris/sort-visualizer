import { delay } from "./other";

export const insertionSort = async (values: number[], setter: React.Dispatch<React.SetStateAction<number[]>>, sortDelay: number) => {
    for (let i = 1; i < values.length; i++) {
        let current = values[i];

        let j = i - 1;
        while ((j > -1) && (current < values[j])) {
            values[j + 1] = values[j];
            j--;
        }

        values[j + 1] = current;

        if (sortDelay) {
            await delay(sortDelay);
        }

        setter([...values]);
    }
}