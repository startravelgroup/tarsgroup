import React from 'react';
import '../style/mapPolution.css';

const MapPolution = (props) => {
    
   

    return(
    <div className = "map-polution animated fadeIn delay-09s" onClick={props.expande}>
        <div className="img-map"></div>
        <iframe
            
            title = "mapPolution" 
            src={`https://www.datastro.eu/explore/embed/dataset/imageserver/map/?disjunctive.limitingmag&disjunctive.cloudcover&disjunctive.constellation&disjunctive.country&sort=utdate&location=13,${props.latitude},${props.longitude}&basemap=mapbox.lights&dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJjb2x1bW4iLCJmdW5jIjoiQ09VTlQiLCJ5QXhpcyI6ImlkIiwic2NpZW50aWZpY0Rpc3BsYXkiOnRydWUsImNvbG9yIjoiIzY2YzJhNSJ9XSwieEF4aXMiOiJjb3VudHJ5IiwibWF4cG9pbnRzIjoxMDAsInRpbWVzY2FsZSI6IiIsInNvcnQiOiJzZXJpZTEtMSIsImNvbmZpZyI6eyJkYXRhc2V0IjoiaW1hZ2VzZXJ2ZXIiLCJvcHRpb25zIjp7ImRpc2p1bmN0aXZlLmxpbWl0aW5nbWFnIjp0cnVlLCJkaXNqdW5jdGl2ZS5jbG91ZGNvdmVyIjp0cnVlLCJkaXNqdW5jdGl2ZS5jb25zdGVsbGF0aW9uIjp0cnVlLCJkaXNqdW5jdGl2ZS5jb3VudHJ5Ijp0cnVlfX19XSwidGltZXNjYWxlIjoiIiwiZGlzcGxheUxlZ2VuZCI6dHJ1ZSwiYWxpZ25Nb250aCI6dHJ1ZX0%3D&static=false&datasetcard=false&scrollWheelZoom=true`}
            frameborder="0">
        </iframe>
    </div>
    );
}

export default MapPolution;