import { useEffect } from "react";

import { Overlay, Dialog, Cover, ModalTitle, Open, Rating, ModalContent, ModalDetail, Close, Price } from "./styles";

const Modal = ({ restaurant, onClose }) => {
    
    useEffect(() => {
        function onEsc(e){
            if(e.keyCode === 27) onClose();
        }

        window.addEventListener('keydown', onEsc);

        // ComponentWillUnmount => Don't listen to the event when modal isn't opened
        return () => {
            window.removeEventListener('keydown', onEsc)
        }
    }, [onClose]);

    function onOverlayClick() {
        onClose();
    }

    function onDialogClick(e) {
        e.stopPropagation();
    }

    return (
        <Overlay onClick={onOverlayClick}>
            <Dialog onClick={onDialogClick}>
                {restaurant.photos && restaurant.photos.length > 0 && (
                    <Cover>
                        <img src={restaurant.photos[0].getUrl()} alt={restaurant.name} />
                    </Cover>
                )}
                <ModalContent>
                    { restaurant.opening_hours?.isOpen() ? 
                        <Open $isOpen='true'>Open</Open> 
                        : 
                        <Open $isOpen='false'>Closed</Open>
                    }
                    {
                        restaurant.rating &&
                        <Rating>{restaurant.rating} stars</Rating>
                    }
                    {
                        restaurant.price_level &&
                        <Price>{
                            '$'.repeat(restaurant.price_level)
                        }</Price>
                    }                    
                </ModalContent>
                <ModalTitle>{restaurant?.name}</ModalTitle>
                <ModalContent>
                    <ModalDetail>{restaurant?.vicinity}</ModalDetail>
                    <ModalDetail>{restaurant?.formatted_phone_number ? (<a href={'tel:'+restaurant.international_phone_number}>{restaurant.formatted_phone_number}</a>) : '' }</ModalDetail>
                </ModalContent>
                <Close onClick={onClose}>Close</Close>
            </Dialog>
        </Overlay>
    );
};

export default Modal;


