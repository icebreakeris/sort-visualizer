import { delay } from "./other";

export const mergeSort = async (values: number[], setter: React.Dispatch<React.SetStateAction<number[]>>, sortDelay: number) => {
    const merge = async (leftArray: number[], rightArray: number[]) => {
        let arr: number[] = [];

        while (leftArray.length && rightArray.length) {
            arr.push(leftArray[0] > rightArray[0] ? rightArray.shift()! : leftArray.shift()!);
        }

        return [...arr, ...leftArray, ...rightArray];
    }

    const mergeSortRecursive = async (array: number[]): Promise<number[]> => {
        if (array.length < 2) {
            return array;
        }

        const half = Math.floor(array.length / 2);

        const left = array.splice(0, half);

        const merged = await merge(await mergeSortRecursive(left), await mergeSortRecursive(array))

        if (sortDelay) {
            await delay(sortDelay);
        }

        setter([...merged]);

        return merged;
    }

    await mergeSortRecursive(values);
}