import { Wrapper } from "@googlemaps/react-wrapper";

import Map from "./components/Map";

export default function App() {
    return (
        <Wrapper apiKey={"AIzaSyB80GrKaYLCKW69z62QJAUC2_FgR2IFDe8"}>
            <Map/>
        </Wrapper>
    );
}
