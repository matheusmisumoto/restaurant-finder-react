'use client'

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Map, Disclaimer, Loader, RestaurantCard, Modal, Portal } from '../../components';

import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { OutlinedInput } from '@mui/material';

import { Menu, Tastin, Container,  Expand, SearchForm, LogoContainer } from './styles';
import { selectRestaurantDetails, selectRestaurants, setRestaurantDetails } from '../../redux/modules/restaurants';
import { RestaurantList } from '@/redux/interface';

export default function Home() {
    const [ options, setOptions ] = useState<{ expanded: boolean; placeId: string | null }>({expanded: false, placeId: null});
    const [ inputValue , setInputValue ] = useState('');
    const [ query, setQuery ] = useState('');
    const dispatch = useDispatch();
    const restaurants = useSelector(selectRestaurants);
    const restaurantSelected = useSelector(selectRestaurantDetails);

    useEffect(() => {
      console.log(restaurantSelected);
    }, [restaurantSelected]);

    function handleKeyPress(e: React.KeyboardEvent) {
      if(e.key === 'Enter'){
          setQuery(inputValue);
      }
    }

    const handleToggleOptions = () => {
        setOptions((prevState) => ({
            ...prevState,
            expanded: !prevState.expanded
        }));
    }

    const handleRestarantSelection = (placeId: string) => {
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
        dispatch(setRestaurantDetails({} as any));
    }

    return (
        <>
            <Map placeId={options.placeId} query={query} />
            <Menu style={{ height: options.expanded ? '90vh' : '220px' }}>
              <LogoContainer>
                <Tastin />
              </LogoContainer>
              <SearchForm variant="outlined">
                <InputLabel htmlFor="search">Search Restaurants</InputLabel>
                <OutlinedInput
                  id="search"
                  type="text"
                  value={inputValue}
                  onKeyUp={handleKeyPress}
                  onChange={(e) => setInputValue(e.target.value)}
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
                      restaurants.map((restaurant: RestaurantList, index: number) => {
                        if(index < 10) {
                          return (
                            <RestaurantCard
                                restaurant={restaurant} 
                                key={index}
                                onClick={() => handleRestarantSelection(restaurant.place_id ?? '')}
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
            {restaurantSelected.place_id && (
              <Portal>
                <Modal onClose={handleModalClose} restaurant={restaurantSelected} />
              </Portal>
            )}
        </>
    );
};