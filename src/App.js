import { Wrapper } from "@googlemaps/react-wrapper";

import Map from "./components/Map";

export default function App() {
    return (
        <Wrapper apiKey={"API_KEY"}>
            <Map/>
        </Wrapper>
    );
}
