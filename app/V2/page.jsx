'use client'

import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Map, Disclaimer, Card, RestaurantCard } from '/components';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { OutlinedInput } from '@mui/material';

import { Menu, Tastin, Search, Container, SectionTitle, Carousel, Expand, ModalTitle, ModalContent, SearchForm, LogoContainer } from './styles';


export default function V2(props) {
    const [ options, setOptions ] = useState({expanded: false});

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

    const restaurants = [
        {
          place_id: '1',
          name: 'Bom Beef Burgers',
          formatted_address: 'Av. Dr. Pedro Lessa, 2533',
          photos: [
            {
              getUrl: () => 'https://example.com/photo1.jpg'
            }
          ]
        },
        {
          place_id: '2',
          name: 'Restaurant Two',
          formatted_address: 'Address Two',
          photos: [
            {
              getUrl: () => 'https://example.com/photo2.jpg'
            }
          ]
        },
        {
          place_id: '3',
          name: 'Restaurant Three',
          formatted_address: 'Address Three',
          photos: [
            {
              getUrl: () => 'https://example.com/photo3.jpg'
            }
          ]
        },
        {
          place_id: '4',
          name: 'Restaurant Four',
          formatted_address: 'Address Four',
          photos: [
            {
              getUrl: () => 'https://example.com/photo4.jpg'
            }
          ]
        },
        {
          place_id: '5',
          name: 'Restaurant Five',
          formatted_address: 'Address Five',
          photos: [
            {
              getUrl: () => 'https://example.com/photo5.jpg'
            }
          ]
        },
        {
          place_id: '6',
          name: 'Restaurant Six',
          formatted_address: 'Address Six',
          photos: [
            {
              getUrl: () => 'https://example.com/photo6.jpg'
            }
          ]
        },
        {
          place_id: '7',
          name: 'Restaurant Seven',
          formatted_address: 'Address Seven',
          photos: [
            {
              getUrl: () => 'https://example.com/photo7.jpg'
            }
          ]
        },
        {
          place_id: '8',
          name: 'Restaurant Eight',
          formatted_address: 'Address Eight',
          photos: [
            {
              getUrl: () => 'https://example.com/photo8.jpg'
            }
          ]
        },
        {
          place_id: '9',
          name: 'Restaurant Nine',
          formatted_address: 'Address Nine',
          photos: [
            {
              getUrl: () => 'https://example.com/photo9.jpg'
            }
          ]
        },
        {
          place_id: '10',
          name: 'Restaurant Ten',
          formatted_address: 'Address Ten',
          photos: [
            {
              getUrl: () => 'https://example.com/photo10.jpg'
            }
          ]
        }
    ];

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
                  <SectionTitle>In your area</SectionTitle>
                  {restaurants.map((restaurant, index) => {
                    if(index < 10) {
                      return (
                        <RestaurantCard
                            restaurant={restaurant} 
                            key={index}
                        />
                      )
                    }
                  }
                  )}
                  </Container>
                </>
              )
            }
              <Expand onClick={handleToggleOptions}>{options.expanded ? 'Close' : 'Open'}</Expand>
            </Menu>
        </>
    );
};