import { delay } from "./other";

export const quickSort = async (values: number[], setter: React.Dispatch<React.SetStateAction<number[]>>, sortDelay: number) => {
    const partition = async (array: number[], start: number, end: number) => {
        const pivot = array[end];
        let pivotIndex = start;

        for (let i = start; i < end; i++) {
            if (array[i] < pivot) {
                [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];

                if (sortDelay) {
                    await delay(sortDelay);
                }

                setter([...array]);

                pivotIndex++;
            }
        }

        [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];

        return pivotIndex;
    }

    const quickSortRecursive = async (array: number[], start: number, end: number) => {
        if (start >= end) {
            return;
        }

        let index = await partition(array, start, end);

        quickSortRecursive(array, start, index - 1);
        quickSortRecursive(array, index + 1, end);
    }

    quickSortRecursive(values, 0, values.length - 1);
}