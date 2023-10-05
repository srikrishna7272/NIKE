import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className=" font-palanquin text-4xl text-center font-bold ">
        What our
        <span className="text-coral-red"> Customers </span>
        say?
      </h3>
      <p className="info-text m-auto text-center max-w-lg mt-4">
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.imgURL} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
