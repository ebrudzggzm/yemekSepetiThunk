import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRestaurants } from "../redux/actions/restaurantActions";
import Container from "../components/Container";
import Loader from "../components/Loader";
import Error from "../components/Error";
import RestaurantCard from "../components/RestaurantCard";

const Main = () => {
  const dispatch = useDispatch();

  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurants
  );
const getData = () =>{
  dispatch(getRestaurants());

}
  useEffect(() => {
   getData();
    console.log(restaurants);
   
  }, []);

  return (
    <Container>
      <h1 className="text-3xl">Tüm Restaurantlar</h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-6">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} retry={getData}/>
        ) : (       
          restaurants.length > 0 && restaurants.map((item)=>(<RestaurantCard data={item} key ={item.id}/>))) }
      </div>
    </Container>
  );
};

export default Main;
