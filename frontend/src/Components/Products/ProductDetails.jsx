

import ProductImage from "./ProductImage";
import ProductData from "./ProductData";
import { baseURL } from "../../Utils/service";
import { useContext, useEffect } from "react";
import { authContext } from "../../Context/Context";
import axios from "axios";
import { useParams } from "react-router-dom";
const ProductDetails = ({ favItem }) => {
  const { setprdData, setproductImgdata } = useContext(authContext);
  const { id } = useParams();
  useEffect(() => {
    async function getProductDetailes() {
      try {
        const res = await axios.get(`${baseURL}/product/getProduct/${id}`);
        setprdData(res.data.item);
        setproductImgdata(res.data.item.productImage);
      } catch (error) {
        console.log(error.message);
      }
    }
    getProductDetailes();
  }, []);

  return (
    <>
      <div className="min-h-fit py-14  flex justify-center items-center ">
        <div className="ContainerForProductData space-y-4 flex justify-center gap-8 items-center px-32">
          <ProductImage />
          <ProductData favItem={favItem} />
        </div>
      </div>
    </>
  );
};

export default ProductDetails