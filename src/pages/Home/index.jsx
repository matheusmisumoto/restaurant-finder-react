import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { Card, RestaurantCard, Modal, Map, Loader, Skeleton, Disclaimer } from '../../components';

import { Wrapper, Container, Tastin, Search, CarouselTitle, Carousel, ModalTitle, ModalContent, SearchForm } from './styles';


const Home = (props) => {
    const [ inputValue , setInputValue ] = useState();
    const [ query, setQuery ] = useState(null);
    const [ placeId, setPlaceId ]= useState(null);
    const [ modalOpened, setModalOpened ] = useState(false);
    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants)

    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        arrows: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptativeHeight: true,
        variableWidth: true
    };

    function handleKeyPress(e) {
        if(e.key === 'Enter'){
            setQuery(inputValue);
        }
    }

    function handleOpenModal(placeId) {
        setPlaceId(placeId);
        setModalOpened(true);
    }

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Tastin />
                    <SearchForm
                        label='Search restaurants'
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search"/>}
                        floatingLabelClassName='formLabel'
                        notchedOutlineClassName='formBorder'
                    >
                        <Input
                            value={inputValue}
                            onKeyPress={handleKeyPress}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </SearchForm>
                    <Disclaimer />
                    {restaurants.length > 0 ? (
                        <>
                            <CarouselTitle>In your area</CarouselTitle>
                            <Carousel {...settings}>
                                {
                                restaurants.filter(restaurant => restaurant.photos).map((restaurant) => (
                                            <Card 
                                            key={restaurant.place_id}
                                            photo={restaurant.photos[0].getUrl()} 
                                            title={restaurant.name}
                                            />
                                ))}
                            </Carousel>
                        </>
                    ) : (
                        <Loader />
                    )}
                </Search>
                {restaurants.map((restaurant, index) => (
                    <RestaurantCard
                        restaurant={restaurant} 
                        key={index}
                        onClick={() => handleOpenModal(restaurant.place_id)}
                    />
                ))}
            </Container>
            <Map query={query} placeId={placeId} />
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
                {restaurantSelected ? (
                    <>
                        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                        <ModalContent>{restaurantSelected?.opening_hours ? 
                            restaurantSelected?.opening_hours?.open_now ? 'Open' : 'Closed'
                            :
                            ''
                        }</ModalContent>
                        <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                        <ModalContent>{restaurantSelected?.formatted_phone_number ? (<a href={'tel:'+restaurantSelected.international_phone_number}>{restaurantSelected.formatted_phone_number}</a>) : '' }</ModalContent>
                    </>
                ) : (
                    <>
                        <Skeleton width="10px" height="2rem" margin="0 0 1rem 0" />
                        <Skeleton width="10px" height="1.025rem" margin="0 0 1rem 0" />
                        <Skeleton width="10px" height="1.025rem" margin="0 0 1rem 0" />
                        <Skeleton width="10px" height="1.025rem" margin="0 0 1rem 0" />
                    </>
                )}
            </Modal>
        </Wrapper>
    );
};

export default Home;