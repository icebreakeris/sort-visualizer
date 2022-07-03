import styled from "styled-components";

interface VisualizerBarProps {
    value: number;
}

export const Button = styled.button`
    padding: 10px;
`;

export const VisualizerContainer = styled.div`
    border: 2px solid black;
    height: 80%;
    width: 80%;
    display: flex;
    flex-direction: column;
`;
export const VisualizerHeader = styled.div`
    padding: 20px;
    display: flex;
    gap: 10px;
`;
export const VisualizerContent = styled.div`
    height: 100%;
    display: flex;
`;
export const VisualizerBar = styled.div<VisualizerBarProps>`
    height: ${(props) => props.value}%;
    width: 100%;
    border: 1px solid black;
`;

export const AlgorithmContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const ActionContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: auto;
`;

export const Input = styled.input`
    height: 100%;
    padding: 10px;
`;

export const Select = styled.select`
    height: 100%;
    padding: 10px;
`;
