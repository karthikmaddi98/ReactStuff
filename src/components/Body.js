import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {

    // Normal JS Variable
    // let LofRes = [];

    // Local State Variable - Super Powerful Variable
    const [ListofRestaurants, setListofRestaurants] = useState(resList);
        

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={() => 
                {
                    const filteredListofRestaurants = ListofRestaurants.filter(
                        (res) => res.info.avgRating >= 4.6
                    );

                    setListofRestaurants(filteredListofRestaurants);

                    console.log(filteredListofRestaurants);
                }
                }>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {/* <RestaurantCard resData={resList.restaurants[0]} />
                <RestaurantCard resData={resList.restaurants[1]} /> */}
                 {ListofRestaurants.map(
                    (restaurant) =>  (<RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                )
            }               
            </div>
        </div>
    )
};

export default Body;