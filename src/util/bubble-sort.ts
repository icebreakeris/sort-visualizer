import { delay } from "./other";

export const bubbleSort = async (values: number[], setter: React.Dispatch<React.SetStateAction<number[]>>, sortDelay: number) => {
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if (values[j] > values[j + 1]) {
                [values[j], values[j + 1]] = [values[j + 1], values[j]];
            }

            if (sortDelay) {
                await delay(sortDelay);
            }

            setter([...values]);
        }
    }
}