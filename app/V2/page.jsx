'use client'

import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import MapContainer from '../../components/Map';

import { Container, Tastin, Search, CarouselTitle, Carousel, ModalTitle, ModalContent, SearchForm } from './styles';


export default function V2(props) {
    return (
        <>
            <MapContainer />
            <Container>
            <Tastin />
            </Container>
        </>
    );
};