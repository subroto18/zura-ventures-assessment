import { HomeSlider } from "../components/HomeSlider";
import { ProductContainer } from "../components/ProductContainer";
import { NavBar } from "../components/common/NavBar";

export const HomePage = () => {
  return (
    <>
      <NavBar></NavBar>
      <HomeSlider></HomeSlider>
      <ProductContainer></ProductContainer>
    </>
  );
};
