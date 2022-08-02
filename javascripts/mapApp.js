
function initMap() {
    // Map location to center around.
    var location = {
        center: { lat: 35.1995, lng: -80.8143 },
        zoom: 12
    }

    // New map to append inside the map id.
    map = new google.maps.Map(document.getElementById("map"), location);


    //Add Marker Function
    function addMarker(props) {
        // Marker constructor using "google.maps.Marker"
        const marker = new google.maps.Marker({
            position: props.location,
            map: map
        });

        // If the passed in props have "content" value, run this loop to display the city name
        if (props.content) {

            const detail = new google.maps.InfoWindow({
                content: props.content
            })

            // Mouseover effect when hovered over the marker. (displays address).
            marker.addListener('mouseover', () => {
                detail.open({
                    anchor: marker,
                    map: map
                })
            });
        }

    }


    // Since there are multiple locations and possible franchise, put locations in array.
    const name = "Lindsey's Nails";

    const charlotte = { lat: 35.2271, lng: -80.8431 };
    const charlotte2 = { lat: 35.1484, lng: -80.8309 };

    let allMarkers = [
        {
            location: charlotte,
            content: `<div class="location-details">
                <h3 class="name">${name}</h3>
                <p>301 N Tryon St</p>
                <p>Charlotte, NC 28202</p>
                </div>`
        },

        {
            location: charlotte2,
            content: `<div class="location-details">
            <h3 class="name">${name}</h3>
            <p>4400 Sharon Rd</p>
            <p>Charlotte, NC 28211</p>
            </div>`
        }

    ]

    // loop through all of the marker and append it to addMarker Function.
    allMarkers.forEach(markers => {
        addMarker(markers);
    })

}



window.initMap = initMap;