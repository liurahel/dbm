import { useState } from "react";
import AddToBasket from "./AddToBasket"

function ProductDetail({ product }) {
  const [qty, setQty] = useState(product.stock > 0 ? 1 : 0);

    return (
      <div className="flex flex-col items-center content w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-24 gap-8 justify-center content-bf content-text">
          {/* 左側：產品圖片（佔6/24） */}
          <div className="lg:col-span-10 lg:col-start-1">
            <img
              alt={product.title}
              className="w-full aspect-square max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-auto object-cover object-center rounded-md mx-auto"
              src={product.cover}
            />
          </div>
    
          {/* 右側：產品資訊（佔14/24） */}
          <div className="lg:col-span-14 px-4">
            <h2 className="stitle-text text-sm sm:text-base lg:text-lg font-bold mb-1 ">{product.author}</h2>
            <h1 className="title-text text-2xl sm:text-3xl lg:text-4xl  font-bold mb-2">{product.title}</h1>
            <p className="content-text text-base mb-4">{product.summary}</p>
            {/* 價格與按鈕 */}
            <div className="flex flex-col gap-4">
              <p className="text-xl sm:text-2xl font-semibold title-text">NT$ {product.price}</p>
            <div className="flex justify-between items-center gap-2 content-text">
              <span className="font-bold" >數量</span>
              <select
                className="select select-bordered w-20 h-8"
                defaultValue={product.stock > 0 ? 1 : 0}
                onChange={ event => setQty(Number(event.target.value))}
              >
                {[ ...Array(product.stock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
              <span className="stitle-text">目前庫存：{product.stock > 0 ? "有現貨" : "缺貨中"}</span>
              <span className="ml-auto font-bold title-text">總價 NT$ {product.price * qty}</span>
            </div>
            <AddToBasket  product={product} qty={qty} />
          </div>
          </div>
        </div>
      </div>
    );
  }
  
export default ProductDetail;