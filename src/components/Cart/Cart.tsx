import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.css";

type Gift = {
  id: string;
  description: string;
  imageSrc: string;
  price: number;
  priceInCents: number;
  quantity: number;
};

export const Cart = () => {
  const { cart } = useCart();

  return (
    <div className={styles.container}>
      <div className={styles.checkoutButtonContainer}>
      </div>
      {cart.map((item) => (
        <CartItem
          id={item.id}
          description={item.description}
          imageSrc={item.src}
          price={item.priceInCents}
          priceInCents={item.priceInCents}
          quantity={item.quantity}
        />
      ))}
      <div className={styles.checkoutButtonContainer}>
        <button className={styles.checkoutButton}>Finalizar Compra</button>
      </div>
    </div>
  );
};

const CartItem = ({ id, description, imageSrc, price, quantity }: Gift) => {
  const { changeItemQuantity, removeFromCart } = useCart();

  return (
    <div id={id} className={styles.giftContainer}>
      <img src={`${imageSrc}`} className={styles.giftImage} />
      <p className={styles.giftName}>{description}</p>
      <div className={styles.giftSteppersContainer}>
        {quantity > 1 ? <button className={styles.giftSteppers} onClick={() => changeItemQuantity(id, "decrease")}>-</button> : null}
        <p className={styles.giftQuantity}>{quantity}</p>
        <button className={styles.giftSteppers} onClick={() => changeItemQuantity(id, "increase")}>+</button>
      </div>
      <div>
        <p className={styles.giftPrice}>R$ {(price * quantity) / 100}</p>
        <a
          className={styles.giftRemoveItem}
          onClick={() => removeFromCart(id)}
        >
          Remover
        </a>
      </div>
    </div>
  );
};
