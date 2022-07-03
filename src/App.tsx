import { useState } from "react";
import styled from "styled-components";
import { Visualizer } from "./components/Visualizer";

const AppContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const App = (): React.ReactElement => {
    return (
        <AppContainer>
            <Visualizer />
        </AppContainer>
    );
};

export default App;
