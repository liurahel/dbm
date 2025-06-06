function ShopperDetail({ shopper }) {
  if (!shopper) {
    return <div className="text-center mt-10">找不到商家</div>;
  }

    return (
      <div className="flex flex-col items-center content w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-24 gap-8 justify-center content-bf content-text">
          {/* 左側：產品圖片（佔6/24） */}
          <div className="lg:col-span-10 lg:col-start-1">
            <img
              alt={shopper.author}
              className="w-full aspect-square max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-auto object-cover object-center rounded-md mx-auto"
              src={shopper.cover}
            />
          </div>
    
          {/* 右側：產品資訊（佔14/24） */}
          <div className="lg:col-span-14 px-4">
            <h2 className="stitle-text text-sm sm:text-base lg:text-lg font-bold mb-1">{shopper.name}</h2>
            <h1 className="title-text text-2xl sm:text-3xl lg:text-4xl  font-bold mb-2">{shopper.author}</h1>
            <p className="content-text text-base mb-4 whitespace-pre-line">{shopper.description}</p>
          </div>
        </div>
      </div>
    );
  }
  
export default ShopperDetail;