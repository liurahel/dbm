import { useState } from "react";
import AddToBasket from "./AddToBasket"

function ProductDetail({ product }) {
  const [qty, setQty] = useState(product.stock > 0 ? 1 : 0);

    return (
      <div className="flex flex-col items-center content w-full max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-24 gap-8 justify-center bg-[#FFF9F0]">
          {/* 左側：產品圖片（佔6/24） */}
          <div className="lg:col-span-6 lg:col-start-3">
            <img
              alt={product.title}
              className="w-full h-auto object-cover object-center rounded-md"
              src={product.cover}
            />
          </div>
    
          {/* 右側：產品資訊（佔14/24） */}
          <div className="lg:col-span-14 px-4">
            <h2 className="text-[#686868]  font-bold mb-1 text-lg">{product.author}</h2>
            <h1 className="text-[#1A1A1A] text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-[#2B2B2B] text-base mb-4">{product.summary}</p>
            {/* 價格與按鈕 */}
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-semibold text-[#1A1A1A]">NT$ {product.price}</p>
            <div className="flex items-center gap-2 text-[#2B2B2B]">
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
              <p className="text-[#686868]" >
                <span>目前庫存</span>：{product.stock > 0 ? "有現貨" : "缺貨中"}
              </p>
              <p className="ml-auto font-bold text-[#1A1A1A]">
                <span>總價</span> NT$ {product.price * qty}
              </p>
            </div>
            <AddToBasket  product={product} qty={qty} />
          </div>
          </div>
        </div>
      </div>
    );
  }
  
export default ProductDetail;