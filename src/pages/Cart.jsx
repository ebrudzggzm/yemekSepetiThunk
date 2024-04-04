import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";
import { useEffect } from "react";
import { getCart } from "../redux/actions/basketActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {

  const cart = useSelector((store) => store.cart);
 
  console.log(cart);
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-5">SEPET</h1>
      <div>
        {cart.isLoading ? (
          <Loader />
        ) : cart.error ? (
          <Error message={cart.error} />
        ) : (
          cart.data.length === 0 ? <p className="flex flex-col items-center gap-3">Sepetinizde ürün bulunmamaktadır.<Link className="border p-2 shadow rounded hover:bg-grap-100" to={'/'}>Ürün Ekle</Link></p> :
          cart.data.map((item) => <CartItem key={item.id} item={item}/>)
        )}
      </div>
    </Container>
  );
};

export default Cart;
