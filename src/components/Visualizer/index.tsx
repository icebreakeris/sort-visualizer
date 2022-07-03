import React, { useState } from "react";
import {
    ActionContainer,
    AlgorithmContainer,
    Button,
    Input,
    Select,
    VisualizerBar,
    VisualizerContainer,
    VisualizerContent,
    VisualizerHeader,
} from "./styles";
import _ from "lodash";
import { bubbleSort } from "../../util/bubble-sort";
import { selectionSort } from "../../util/selection-sort";
import { insertionSort } from "../../util/insertion-sort";
import { quickSort } from "../../util/quick-sort";
import { mergeSort } from "../../util/merge-sort";

type AlgorithmType = "bubble-sort" | "selection-sort" | "insertion-sort" | "quick-sort" | "merge-sort";

export const Visualizer = (): React.ReactElement => {
    const [algorithm, setAlgorithm] = useState<AlgorithmType | string>("bubble-sort");
    const [values, setValues] = useState<number[]>([...Array(100).keys()]);
    const [isSorting, setIsSorting] = useState<boolean>(false);
    const [delay, setDelay] = useState<number>(100);

    const randomizeValues = () => {
        setValues(_.shuffle(values));
    };

    const sortValues = async () => {
        if (isSorting) {
            return;
        }

        setIsSorting(true);

        switch (algorithm) {
            case "bubble-sort":
                await bubbleSort(values, setValues, delay);
                break;
            case "selection-sort":
                await selectionSort(values, setValues, delay);
                break;
            case "insertion-sort":
                await insertionSort(values, setValues, delay);
                break;
            case "quick-sort":
                await quickSort(values, setValues, delay);
                break;
            case "merge-sort":
                await mergeSort(values, setValues, delay);
                break;
            default:
                return;
        }

        setIsSorting(false);
    };

    return (
        <VisualizerContainer>
            <VisualizerHeader>
                <AlgorithmContainer>
                    <label htmlFor="algorithms">Algorithm: </label>
                    <Select id="algorithms" onChange={(e) => setAlgorithm(e.target.value)}>
                        <option value="bubble-sort">Bubble Sort</option>
                        <option value="selection-sort">Selection Sort</option>
                        <option value="insertion-sort">Insertion Sort</option>
                        <option value="quick-sort">Quick Sort</option>
                        <option value="merge-sort">Merge Sort</option>
                    </Select>
                </AlgorithmContainer>

                <ActionContainer>
                    <label htmlFor="algorithmDelay">Delay in milliseconds (ms): </label>
                    <Input id="algorithmDelay" value={delay} onChange={(e) => setDelay(Number(e.target.value))} />
                    <Button onClick={randomizeValues} disabled={isSorting}>
                        Shuffle Array
                    </Button>
                    <Button onClick={sortValues} disabled={isSorting}>
                        Sort
                    </Button>
                </ActionContainer>
            </VisualizerHeader>
            <VisualizerContent>
                {values.map((i, j) => {
                    return <VisualizerBar key={j} value={i}></VisualizerBar>;
                })}
            </VisualizerContent>
        </VisualizerContainer>
    );
};
