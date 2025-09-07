import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Context/Context";

const ProductImage = () => {
  const {productImgdata} = useContext(authContext)
  const [productImg, setproductImg] = useState(productImgdata);
   const prdImg = (e) => {
     setproductImg(e.target.currentSrc);
   };

   const imgUrl = [
     { srcImg: productImgdata },
     { srcImg: productImgdata },
     { srcImg: productImgdata },
     { srcImg: productImgdata },
   ];
  
  return (
    <>
      <div className="imageContainer w-[700px] border flex  gap-5">
        <div className="sideImageBar  flex justify-center flex-col gap-3 ">
          {imgUrl.map((e, i) => (
            <div
              onClick={(e) => prdImg(e)}
              className="h-[100px] w-[200px] cursor-pointer border"
            >
              <img src={e.srcImg} alt="" className="h-full w-full" />
            </div>
          ))}
        </div>
        <div className="mainImg h-[435px]  w-full border ">
          <img src={productImgdata} alt="" className="h-full w-full" />
        </div>
      </div>
    </>
  );
};

export default ProductImage;
