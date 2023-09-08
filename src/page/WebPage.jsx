import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import RefreshButton from '../components/RefreshButton';
import OffCanvas from '../components/OffCanvas';
// import Offcanvas from 'react-bootstrap/Offcanvas';

import { db } from '../config/fireBase';
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, LayerGroup } from 'react-leaflet'


const WebPage = () => {
  const [showModal, setShowModal] = useState("hidden");
  const [showPotholeData, setShowPotholeData] = useState()
  const [showCoordinate, setShowCoordinate] = useState();
  const [detections, setDetections] = useState([]);
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState(null)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const detectionsDataRef = collection(db, "detections");
  useEffect(() => {

    const getDataDetections = async () => {
      try {
        const data = await getDocs(detectionsDataRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setDetections(filteredData);

      } catch (err) {
        console.error(err);
      }
    };

    getDataDetections();

  }, [detections, detectionsDataRef]);


  function MyComponent() {
    useMapEvents({
      click: () => {
        setShowModal("hidden");
      },
    });
    return null;
  }

  function LocationMarker() {
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition([detections[0].longitude, detections[0].latitude])
        map.flyTo([detections[0].longitude, detections[0].latitude], map.getZoom())
      },
    })

  }



  const refresh = () => {
    window.location.reload(true)
  }

  return (
    <>
      <Navbar showCanvas={handleShow} />

      <Modal modalBehavior={showModal} modalClose={() => setShowModal("hidden")} showData={showPotholeData} coordinate={showCoordinate} />
      <RefreshButton refresh={refresh} />
      <OffCanvas show={show} handleClose={handleClose} />



      <MapContainer className='absolute w-full -z-10 top-0 right-0 left-0 bottom-0 mt-[90px]' center={['-1.150016', '116.861760']} zoom={18}  >
        <TileLayer eventHandlers={{ click: () => { setShowModal("hidden") } }}
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url='https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=TVTNPGIyfvfalfAu4mN4'
          maxZoom={18}


        />

        {detections.map((data, index) => (
          <div key={index}>
            <LayerGroup>
              <Marker position={[data.longitude, data.latitude]} eventHandlers={{ click: () => { setShowModal(""); setShowPotholeData(data.path); setShowCoordinate(`${data.longitude}, ${data.latitude}`) } }}>
              </Marker>
            </LayerGroup>
          </div>
        ))}

        <MyComponent />
        <LocationMarker />
      </MapContainer>
    </>
  );
}

export default WebPage;