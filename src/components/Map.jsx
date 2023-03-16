import { useEffect, useRef, useState } from "react";

const MAP_CENTER = {
    lat: 58.37978741353785,
    lng: 12.324641371404875
};

export default function Map() {
    const [ map, setMap ] = useState(null);
    const mapRef = useRef();

    useEffect(() => {
        setMap(new window.google.maps.Map(mapRef.current, {
            center: MAP_CENTER,

            zoom: 12
        }));
    }, []);

    useEffect(() => {
        if(map) {
            map.addListener("click", (event) => {
                const input = prompt("Enter some text");
    
                const infoWindow = new window.google.maps.InfoWindow({
                    content: `<p>${input}</p>`
                });
    
                const marker = new window.google.maps.Marker({
                    map,
                    position: event.latLng
                });
    
                marker.addListener("click", () => {
                    infoWindow.open({
                        map,
                        anchor: marker
                    });
                });
            });
        }
    }, [ map ]);

    return (<div ref={mapRef} id="map" style={{ height: "100%" }}/>);
};
