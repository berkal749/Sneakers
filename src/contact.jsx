import Calls from "./Calls.jsx";
import BigShoes from "./Bigshoes.jsx";
import { MapContainer } from "https://cdn.esm.sh/react-leaflet/MapContainer";
import { TileLayer } from "https://cdn.esm.sh/react-leaflet/TileLayer";
//import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'
import { Map } from "leaflet";
import SimpleMap from "./SimpleMap.jsx";

function Contact() {
  return (
    <>
      <BigShoes />

      <Calls />
      <SimpleMap></SimpleMap>
   
    </>
  );
}
export default Contact;
