import { delay } from "./other";

export const selectionSort = async (values: number[], setter: React.Dispatch<React.SetStateAction<number[]>>, sortDelay: number) => {
    for (let i = 0; i < values.length; i++) {
        let lowest = i;

        for (let j = i + 1; j < values.length; j++) {
            if (values[j] < values[lowest]) {
                lowest = j;
            }
        }

        if (lowest !== i) {
            [values[i], values[lowest]] = [values[lowest], values[i]];
        }

        if (sortDelay) {
            await delay(sortDelay);
        }

        setter([...values]);
    }
}