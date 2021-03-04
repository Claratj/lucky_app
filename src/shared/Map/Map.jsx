import React from 'react';
import GoogleMaps from 'simple-react-google-maps'; 

export function Map () {
    return (
        <div>
            <div className="container">
                <GoogleMaps
                apiKey={""}
                style={{height: "50rem", width: "37rem"}}
                center={{
                    lat: 40.43691,
                    lng: -368520
                }}
                />
            </div>

        </div>
    )
}
export  default Map;