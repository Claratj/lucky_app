import React from 'react';
import GoogleMaps from 'simple-react-google-maps'; 

export function Map () {
    return (
        <div>
            <div className="container">
                <GoogleMaps
                apiKey={"AIzaSyC9P5XqvxTuegAWR8vZ2W3IXrda7Mfnss4"}
                style={{height: "400px", width: "300px"}}
                zoom={15}
                center={{
                    lat: 40.436895,
                    lng: -3.685454
                }}
                />
            </div>

        </div>
    )
}
export  default Map;