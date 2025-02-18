import { RestaurantList } from '@/redux/interface';
import { AdvancedMarker, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
import styled from 'styled-components';

const MarkerHeader = styled.h3`
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 1rem;
    font-weight: bold;
`;

const MarkerAction = styled.p`
    display: block;
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: .875rem;
    margin: 0 0 .5em 0;
    line-height: 1.5rem;
    color: ${(props) => props.theme?.colors?.primary};
    font-weight: bold;
`;

export const Marker = ({position, restaurant, isOpen, onClick, openDetails, onClose} : {
                          position: google.maps.LatLngLiteral,
                          restaurant: RestaurantList,
                          isOpen?: boolean,
                          onClick?: () => void,
                          openDetails?: () => void,
                          onClose?: () => void
                      }) => {
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={onClick}
        position={position}
        title={restaurant.name}
      />
      {isOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={300}
          shouldFocus={true}
          onCloseClick={onClose}
          headerContent={<MarkerHeader>{restaurant.name}</MarkerHeader>}>
            <MarkerAction onClick={openDetails}>View details</MarkerAction>
        </InfoWindow>
      )}
    </>
  );
};