import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavouriteContext from "../store/favourite-context";

function Favourites() {
  const favouriteCtx = useContext(FavouriteContext);
  console.log(favouriteCtx);
  let content;
  if (favouriteCtx.totalFavourites === 0) {
    content = <p>You got no favourites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favouriteCtx.favourites} />;
  }

  return (
    <div>
      <h1>All Favourites</h1>
      {content}
    </div>
  );
}

export default Favourites;
