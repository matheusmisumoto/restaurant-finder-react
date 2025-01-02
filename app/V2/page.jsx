'use client'

import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Map, Disclaimer, Loader, RestaurantCard } from '/components';

import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { OutlinedInput } from '@mui/material';

import { Menu, Tastin, Search, Container, SectionTitle, Carousel, Expand, ModalTitle, ModalContent, SearchForm, LogoContainer } from './styles';


export default function V2(props) {
    const [ options, setOptions ] = useState({expanded: false});
    const { restaurants } = useSelector((state) => state.restaurants)

    const handleToggleOptions = () => {
        setOptions((prevState) => ({
            ...prevState,
            expanded: !prevState.expanded
        }));
    }

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

    return (
        <>
            <Map />
            <Menu style={{ height: options.expanded ? '90vh' : '220px' }}>
              <LogoContainer>
                <Tastin />
              </LogoContainer>
              <SearchForm variant="outlined">
                <InputLabel htmlFor="search">Search Restaurants</InputLabel>
                <OutlinedInput
                  id="search"
                  type="text"
                  endAdornment={
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  }
                  label="Search Restaurants"
                />
              </SearchForm>
              { options.expanded && (
                <>
                  <Disclaimer />
                  <Container>
                  {
                    restaurants.length > 0 ? (
                      restaurants.map((restaurant, index) => {
                        if(index < 10) {
                          return (
                            <RestaurantCard
                                restaurant={restaurant} 
                                key={index}
                            />
                          )
                        }
                      })
                    ) : (
                        <Loader />
                    )
                  }
                  </Container>
                </>
              )
            }
              <Expand onClick={handleToggleOptions}>{options.expanded ? 'Close' : 'Open'}</Expand>
            </Menu>
        </>
    );
};