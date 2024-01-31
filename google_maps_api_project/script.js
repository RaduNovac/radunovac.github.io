function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 45.77280948514693, lng: 12.606249350081251},
        zoom: 14,
        mapId: 'c8d9866dca813b89'
    });
    /*
    Nome
    Latitudine, Longitudine
    Image URL
    scaledSize
    */
    const markers = [
        [
            "Yoshi\'s House",
            45.77295285026113,
            12.606402654294563,
            "assets/yoshi_house.svg",
            38,
            31
        ],
        [
            "Strong\'s House",
            45.773991163723636,
            12.605933514723185,
            "assets/castle.svg",
            38,
            31
        ],
        [
            "Ghost House",
            45.771990040946434,
            12.607268724981548,
            "assets/ghosthouse.svg",
            38,
            31
        ],
        [
            "Hill with eyes",
            45.77187045013348,
            12.602802964403686,
            "assets/hill_with_eyes.svg",
            38,
            31
        ],
        [
            "Pipe",
            45.77346252638764,
            12.602577330346543,
            "assets/pipe.svg",
            38,
            31
        ],
        [
            "Pointer",
            45.77412323835133,
            12.599735487120611,
            "assets/pointer.svg",
            38,
            31
        ],
        [
            "Star",
            45.76855838575605,
            12.611870901279568,
            "assets/star.svg",
            38,
            31
        ],
    ];

    for (let i = 0; i < markers.length; i++) {
        const currMarker = markers[i];

        const icon_cur = {
            url: currMarker[3], // url
            scaledSize: new google.maps.Size(currMarker[4], currMarker[5]), // scaled size
        };

        const marker = new google.maps.Marker({
            position: {lat: currMarker[1], lng: currMarker[2]},
            map,
            title: currMarker[0],
            icon: icon_cur,
            animation: google.maps.Animation.DROP
        });
        const infowindow = new google.maps.InfoWindow({
            content: currMarker[0],
        });
        marker.addListener("click", () => {
            infowindow.open({
              anchor: marker,
              map,
            });
        });
    }

    
    
}