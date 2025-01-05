'use client'

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Map, Disclaimer, Loader, RestaurantCard, Modal, Portal } from '/components';

import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { OutlinedInput } from '@mui/material';

import { Menu, Tastin, Search, Container, Close, Expand, ModalTitle, ModalContent, SearchForm, LogoContainer } from './styles';
import { setRestaurantDetails } from '../../redux/modules/restaurants';

export default function V2(props) {
    const [ options, setOptions ] = useState({expanded: false, placeId: null});
    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);
    const dispatch = useDispatch();

    const handleToggleOptions = () => {
        setOptions((prevState) => ({
            ...prevState,
            expanded: !prevState.expanded
        }));
    }

    const handleRestarantSelection = (placeId) => {
        setOptions((prevState) => ({
            ...prevState,
            placeId
        }));
    }

    const handleModalClose = () => {
        setOptions((prevState) => ({
            ...prevState,
            placeId: null
        }));
        dispatch(setRestaurantDetails(null));
    }

    useEffect(() => {
      console.log(restaurantSelected)
    }, [restaurantSelected])

    return (
        <>
            <Map placeId={options.placeId} />
            <Menu style={{ height: options.expanded ? '90vh' : '220px' }}>
              <LogoContainer>
                <Tastin />
              </LogoContainer>
              {/*}
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
              */}
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
                                onClick={() => handleRestarantSelection(restaurant.place_id)}
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
            {restaurantSelected && (
              <Portal>
                <Modal onClose={handleModalClose} restaurant={restaurantSelected} />
              </Portal>
            )}
        </>
    );
};