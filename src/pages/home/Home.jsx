import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import Category from "../../components/category/Category";
import Header from "../../components/header/Header";
import Advertisement from "../../components/advertisement/Advertisement";
import DisplayProduct from "../../components/displayProduct/DisplayProduct";
import Testimonial from "../../components/testimonial/Testimonial";
import Subscription from "../../components/Subscription/Subscription";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Advertisement />
      <DisplayProduct />
      <Testimonial />
      <Subscription />
      {/* <Header /> */}
    </div>
  );
};

export default Home;
