import React, { useState } from 'react';
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map } from '../../components';

import { Wrapper, Container, Logo, Search, CarouselTitle, Carousel } from './styles';

const Home = () => {
    const [inputValue, setInputValue] = useState();
    const [modalOpened, setModalOpened] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptativeHeight: true
    };

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
                            onChange={(e) => setInputValue(e.target.value)} />
                        </TextField>
                        <CarouselTitle>In your area</CarouselTitle>
                        <Carousel {...settings}>
                            <Card photo={restaurante} title="Restaurant #1" />
                            <Card photo={restaurante} title="Restaurant #2" />
                            <Card photo={restaurante} title="Restaurant #3" />
                            <Card photo={restaurante} title="Restaurant #4" />
                            <Card photo={restaurante} title="Restaurant #5" />
                            <Card photo={restaurante} title="Restaurant #6" />
                        </Carousel>
                </Search>
                <RestaurantCard />
            </Container>
            <Map />
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
        </Wrapper>
    );
};

export default Home;