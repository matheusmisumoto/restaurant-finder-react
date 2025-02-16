import { useEffect } from "react";
import { RestaurantDetails } from "@/redux/interface";
import { Overlay, Dialog, Cover, ModalTitle, Open, Rating, ModalContent, ModalDetail, Close, Price } from "./styles";

interface ModalProps {
    restaurant: RestaurantDetails;
    onClose: () => void;
}

const Modal = ({ restaurant, onClose }: ModalProps) => {
    
    useEffect(() => {
        function onEsc(e: KeyboardEvent) {
            if(e.key === 'Escape') onClose();
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

    function onDialogClick(e: React.MouseEvent) {
        e.stopPropagation();
    }

    return (
        <Overlay onClick={onOverlayClick}>
            <Dialog onClick={onDialogClick}>
                {restaurant.photo_url && (
                    <Cover>
                        <img src={restaurant.photo_url} alt={restaurant.name} />
                    </Cover>
                )}
                <ModalContent>
                    { restaurant.is_open ? 
                        <Open $isOpen={true}>Open</Open> 
                        : 
                        <Open $isOpen={false}>Closed</Open>
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


