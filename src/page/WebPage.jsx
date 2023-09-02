import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import { db } from "../config/fireBase";
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, LayerGroup } from 'react-leaflet'
import { createElement } from 'react';

const WebPage = () => {
  const [showModal, setShowModal] = useState("hidden");
  const [showPotholeData, setShowPotholeData] = useState()
  const [showCoordinate, setShowCoordinate] = useState();
  const [detections, setDetections] = useState([]);

  const detectionsDataRef = collection(db, "detections");
  useEffect(() => {
    const getDataDetections = async () => {
      try {
        const data = await getDocs(detectionsDataRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        setDetections(filteredData);
        console.log(detections)

      } catch (err) {
        console.error(err);
      };
    };

    getDataDetections();

  }, []);


  function MyComponent() {
    const map = useMapEvents({
      click: () => {
        setShowModal("hidden");
      },
    });
    return null;
  }

  const center = Math.floor(detections.length / 2);

  return (
    <>
      <Navbar />
      <Modal modalBehavior={showModal} modalClose={() => setShowModal("hidden")} showData={showPotholeData} coordinate={showCoordinate} />
      {detections.map((data, index) => (
        <div key={index}>
          <MapContainer className='absolute w-full -z-10 top-0 right-0 left-0 bottom-0 mt-[84px]' center={[data.longitude, data.latitude]} zoom={20}  >
            <TileLayer eventHandlers={{ click: (e) => { setShowModal("hidden") } }}
              attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
              url='https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=TVTNPGIyfvfalfAu4mN4'
              maxZoom={20}
              minZoom={20}
            />
            <LayerGroup>
              {detections.map((data, index) => (
                <div key={index}>
                  <LayerGroup>
                    <Marker position={[data.longitude, data.latitude]} eventHandlers={{ click: (e) => { setShowModal(""); setShowPotholeData(data.path); setShowCoordinate(`${data.longitude}, ${data.latitude}`) } }}>
                    </Marker>
                  </LayerGroup>
                </div>

              ))}
            </LayerGroup>
            <MyComponent />
          </MapContainer >

        </div>
      ))}

    </>
  );
}

export default WebPage;