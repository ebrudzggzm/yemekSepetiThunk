import { useParams } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../redux/actions/productActions";
import {getRestaurants} from '../redux/actions/restaurantActions';
import Loader from "../components/Loader";
import Error from "../components/Error";
import ProductCard from "../components/ProductCard";
import { FaFireFlameCurved } from 'react-icons/fa6';
import RestaurantDetail from "../components/RestaurantDetail";
import { addToBasket, updateItem } from "../redux/actions/basketActions";

const Restaurant = () => {
  const { id } = useParams();
  console.log(id, "params");
  const productState = useSelector((store) => store.products);
  const {isLoading,error,restaurants} = useSelector((store)=>store.restaurants);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(id));
    dispatch(getRestaurants(id))
  }, []);
  console.log(productState);

  const handleAdd = (item,found)=> {

    found ? dispatch(updateItem(found.id,found.amount + 1)) :
 dispatch(addToBasket(item,restaurants))
  }
  return (
    <div>
      <div className="shadow">
        <Container>
          <h1>{isLoading ? <Loader/> : !error && <RestaurantDetail data={restaurants}/>}</h1>
        </Container>
        <hr/>
      </div>
      <Container>
      <div className="mb-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
        <FaFireFlameCurved className="text-red-500"/>
          Popüler
        </h2>
        <p className="text-gray-600">Restoranın en çok tercih edilen ürünleri.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {productState.isLoading ? (
          <Loader />
        ) : productState.error ? (
          <Error message={productState.error} />
        ) : (
          productState.products.map((item) => (
            <ProductCard item={item} key={item.id} handleAdd={handleAdd}/>
          ))
        )}
      </div>
      </Container>
    </div>
  );
};

export default Restaurant;
