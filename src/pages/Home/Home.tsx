import Products from "../../components/common/Products/Products";
import { Carousel } from "../../components/UI/Carousel/Carousel";

export default function Home() {
  return (
    <div>
      <Carousel />
      <div className="max-w-7xl mx-auto mt-12 px-2 sm:px-6 lg:px-8 mt-2 m-h-[800px]">
        <Products />
      </div>
    </div>
  );
}
