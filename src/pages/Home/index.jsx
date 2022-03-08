import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map } from '../../components';

import { Wrapper, Container, Logo, Search, CarouselTitle, Carousel } from './styles';

const Home = () => {
    const [inputValue, setInputValue] = useState();
    const [query, setQuery] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);
    const { restaurants } = useSelector((state) => state.restaurants)


    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptativeHeight: true
    };

    function handleKeyPress(e) {
        if(e.key === 'Enter'){
            setQuery(inputValue);
        }
    }

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Restaurant Finder"></Logo>
                    <TextField
                        label='Search restaurants'
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search"/>}
                    >
                        <Input
                            value={inputValue}
                            onKeyPress={handleKeyPress}
                            onChange={(e) => setInputValue(e.target.value)} />
                        </TextField>
                        <CarouselTitle>In your area</CarouselTitle>
                        <Carousel {...settings}>
                            {restaurants.map((restaurant) => {
                                if(restaurant.photos){
                                    return (
                                        <Card 
                                        key={restaurants.place_id}
                                        photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante } 
                                        title={restaurant.name} />
                                    );
                                }
                            })}
                        </Carousel>
                </Search>
                {restaurants.map((restaurant) => <RestaurantCard restaurant={restaurant} />)}
            </Container>
            <Map query={query} />
            {/* <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} /> */}
        </Wrapper>
    );
};

export default Home;