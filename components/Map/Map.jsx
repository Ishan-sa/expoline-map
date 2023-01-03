import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
import { useMap } from 'react-leaflet/hooks'
import style from '../../styles/Home.module.css'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import { CircleMarker } from 'react-leaflet/CircleMarker'
import { Polyline } from 'react-leaflet/Polyline'

export default function Map() {

    const polyline = [
        [49.2859841, -123.1115341], // 0. waterfront station
        [49.285581150633966, -123.12012245876285], // 1. burrard station
        [49.28276795358473, -123.1164699145821], // 2. granville station
        [49.28010484687972, -123.11012142014103], // 3. stadium chinatown station
        [49.273374980784865, -123.10037145876296], // 4. main street science world station
        [49.262721001091556, -123.06927941643552], // 5. commercial broadway station
        [49.24844626535717, -123.05598167410812], // 6. nanaimo station
        [49.24436337925635, -123.04537402992739], // 7. 29th ave station
        [49.23855530902799, -123.0317256145831], // 8. joyce-colllingwood station
        [49.22991271599505, -123.01265107225555], // 9. patterson station
        [49.22593989446889, -123.00385127225569], // 10. metrotown station
        [49.220193228996386, -122.98845204229738], // 11. royal oak station
        [49.21254265709066, -122.95914504342], // 12. edmonds station
        [49.200068725477024, -122.94922489130668], // 13. 22nd street station
        [49.20159918383558, -122.91263972992837], // 14. new westminster station
        [49.204943945073374, -122.90607708574763], // 15. columbia station
        [49.204575904842045, -122.87402738018886], // 16. scott road station
        [49.1991136014707, -122.85066387225632], // 17. gateway station
        [49.18971392944762, -122.84792071458409], // 18. surrey central station
        [49.1829310367517, -122.84473292807587], // 19. king george station
    ]


    const polyline2 = [
        [49.204943945073374, -122.90607708574763], // 0. columbia station
        [49.224860238697396, -122.88949270294468], // 1. sapperton station
        [49.23268213068468, -122.88456287225554], // 2. Braid station
        [49.24875892482227, -122.89717730665], // 3. Lougheed Town Centre station
        [49.25367827613695, -122.91868207173422], // 4. Production Way - University station
    ]

    const data = [
        {
            "id": 1,
            "name": "Waterfront",
            "lat": 49.2859841,
            "lng": -123.1115341
        },
        {
            "id": 2,
            "name": "Burrard",
            "lat": 49.285581150633966,
            "lng": -123.12012245876285
        },
        {
            "id": 3,
            "name": "Granville",
            "lat": 49.28276795358473,
            "lng": -123.1164699145821
        },
        {
            "id": 4,
            "name": "Stadium-Chinatown",
            "lat": 49.28010484687972,
            "lng": -123.11012142014103
        },
        {
            "id": 5,
            "name": "Main Street-Science World",
            "lat": 49.273374980784865,
            "lng": -123.10037145876296
        },
        {
            "id": 6,
            "name": "Commercial-Broadway",
            "lat": 49.262721001091556,
            "lng": -123.06927941643552
        },
        {
            "id": 7,
            "name": "Nanaimo",
            "lat": 49.24844626535717,
            "lng": -123.05598167410812
        },
        {
            "id": 8,
            "name": "29th Avenue",
            "lat": 49.24436337925635,
            "lng": -123.04537402992739
        },
        {
            "id": 9,
            "name": "Joyce-Collingwood",
            "lat": 49.23855530902799,
            "lng": -123.0317256145831
        },
        {
            "id": 10,
            "name": "Patterson",
            "lat": 49.22991271599505,
            "lng": -123.01265107225555
        },
        {
            "id": 11,
            "name": "Metrotown",
            "lat": 49.22593989446889,
            "lng": -123.00385127225569
        },
        {
            "id": 12,
            "name": "Royal Oak",
            "lat": 49.220193228996386,
            "lng": -122.98845204229738
        },
        {
            "id": 13,
            "name": "Edmonds",
            "lat": 49.21254265709066,
            "lng": -122.95914504342
        },
        {
            "id": 14,
            "name": "22nd Street",
            "lat": 49.200068725477024,
            "lng": -122.94922489130668
        },
        {
            "id": 15,
            "name": "New Westminster",
            "lat": 49.20159918383558,
            "lng": -122.91263972992837
        },
        {
            "id": 16,
            "name": "Columbia",
            "lat": 49.204943945073374,
            "lng": -122.90607708574763
        },
        {
            "id": 17,
            "name": "Scott Road",
            "lat": 49.204575904842045,
            "lng": -122.87402738018886
        },
        {
            "id": 18,
            "name": "Gateway",
            "lat": 49.1991136014707,
            "lng": -122.85066387225632
        },
        {
            "id": 19,
            "name": "Surrey Central",
            "lat": 49.18971392944762,
            "lng": -122.84792071458409
        },
        {
            "id": 20,
            "name": "King George",
            "lat": 49.1829310367517,
            "lng": -122.84473292807587
        },

    ]

    const prodData = [
        {
            "id": 21,
            "name": "Sapperton",
            "lat": 49.224860238697396,
            "lng": -122.88949270294468
        },
        {
            "id": 22,
            "name": "Braid",
            "lat": 49.23268213068468,
            "lng": -122.88456287225554
        },
        {
            "id": 23,
            "name": "Lougheed Town Centre",
            "lat": 49.24875892482227,
            "lng": -122.89717730665
        },
        {
            "id": 24,
            "name": "Production Way-University",
            "lat": 49.25367827613695,
            "lng": -122.91868207173422
        }
    ]

    const startEndPoints = [
        {
            "id": 1,
            "content": "You have reached your destination",
            "location": "King George Station, Surrey, BC",
            "latLng": polyline[19]
        },
        {
            "id": 2,
            "content": "You have reached your destination",
            "location": "Production Way-University Station, Burnaby, BC",
            "latLng": polyline2[4]
        },
        {
            "id": 3,
            "content": "You have reached your destination",
            "location": "Waterfront Station, Vancouver, BC",
            "latLng": polyline[0]
        }
    ]

    const purpleOption = { color: 'purple' };
    const redOption = { color: 'red' };
    return (
        <>
            <MapContainer className={style.map} center={polyline[0]} zoom={14} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {data.map((station) => (
                    <Marker key={station.id} position={[station.lat, station.lng]}>
                        <Popup>
                            {station.name} station <br /> {station.lat}, {station.lng}
                        </Popup>
                    </Marker>
                ))}

                {prodData.map((station) => (
                    <Marker key={station.id} position={[station.lat, station.lng]}>
                        <Popup>
                            {station.name} station <br /> {station.lat}, {station.lng}
                        </Popup>
                    </Marker>
                ))}

                {
                    startEndPoints.map((point) => (
                        <CircleMarker key={point.id} center={point.latLng} pathOptions={redOption} radius={20}>
                            <Popup>{point.content} <br /> {point.location}</Popup>
                        </CircleMarker>
                    ))
                }

                <Polyline pathOptions={purpleOption} positions={polyline} />
                <Polyline pathOptions={purpleOption} positions={polyline2} />
            </MapContainer>
        </>
    )
}