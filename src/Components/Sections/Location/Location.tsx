import styles from './Location.module.scss';
import { FC, SyntheticEvent, useContext, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import Button from 'Components/Button/Button';
import phone from 'Assets/images/map/phone.svg';
import { fillTemplate } from 'Utils/fillTemplate';
import { locationSection } from 'Data/translation/locationSection';
import { TranslateContext } from 'App/context/translateContext';

const Location: FC = () => {
  const position: LatLngTuple = [50.98027551612962, 28.660009782290466];
  const { language } = useContext(TranslateContext);
  const [menuModal, setMenuModal] = useState(false);
  const [note, setNote] = useState(false);

  const formHandler = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameElement = e.target[0] as HTMLInputElement;
    const phoneElement = e.target[1] as HTMLInputElement;

    nameElement.value = '';
    phoneElement.value = '';
    setNote(true);
    setTimeout(() => {
      setNote(false);
    }, 2000);
  };

  const sectionHandler = (e: SyntheticEvent) => {
    const sectionElement = e.target as HTMLDivElement;
    if (
      sectionElement.classList.length !== 0 &&
      sectionElement.classList[0].includes('leaflet')
    )
      setMenuModal(false);
  };

  return (
    <section className={styles.Location} onClick={sectionHandler}>
      <MapContainer
        center={[50.95150409733651, 28.649230546540824]}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: '500px', width: '100%', zIndex: '2' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>{locationSection[language]['popUp']}</Popup>
        </Marker>
      </MapContainer>
      {!menuModal ? (
        <div className={styles.Phone}>
          <span>{locationSection[language]['phoneCall']}</span>
          <img src={phone} alt="phone" onClick={() => setMenuModal(true)} />
        </div>
      ) : (
        <div className={styles.Contact}>
          <h3>{locationSection[language]['phoneContact']}</h3>
          <span className={styles.Close} onClick={() => setMenuModal(false)}>
            X
          </span>
          <h4>{locationSection[language]['phoneRequest']}</h4>
          <form action="" onSubmit={formHandler}>
            <input
              type="text"
              name="name"
              placeholder={locationSection[language]['formInputName']}
              required
              pattern="[a-z,A-Z,а-яієїґ,А-ЯҐЄІЇ]+"
              minLength={3}
              maxLength={16}
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[\+]380[\(][1-9]{2}[\)][0-9]{3}[\-][0-9]{2}[\-][0-9]{2}"
              required
              placeholder="0983175281"
              minLength={13}
              maxLength={13}
              onKeyDown={fillTemplate}
            />
            <Button
              text={locationSection[language]['formButton']}
              type="submit"
            />
          </form>
          {note && (
            <span className={styles.Note}>
              {locationSection[language]['formNote']}
            </span>
          )}
        </div>
      )}
    </section>
  );
};
export default Location;
