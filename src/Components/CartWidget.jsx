import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <div className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            <span className="notification-bubble">
                3
            </span>
        </div>
    );
};

export default CartWidget;
