import React from "react";
import product from "../product";

function Card() {
  console.log(product);
  return (
    <>
      <div>
        <div className="card-head">
          <img
            src="https://i.postimg.cc/RVFh2hkV/portfolio.jpg"
            alt="image2"
            className="product-card"
          />
          <button className="bid-btn">Place Bid</button>
        </div>

        <div className="card-body">
          <div className="wrapper-flex mb">
            <div className="bid-info">
              <div className="img-box">
                <img
                  src="https://i.postimg.cc/k59m3h2F/client-1.png"
                  alt="image1"
                />
                <img
                  src="https://i.postimg.cc/YS3wpfgc/client-2.png"
                  alt="image"
                />
                <img
                  src="https://i.postimg.cc/XJY6XGcr/client-3.png"
                  alt="image"
                />
              </div>

              <a href="#test">{product.price}</a>
            </div>
            <button className="share-btn">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </button>
          </div>
          <h4 className="product-name">
            <a href="#test">{product.description}</a>
          </h4>

          <a href="#test" className="latest-bid">
            {product.name}
          </a>

          <div className="wrapper-flex">
            <div className="last-bid">0.244wETH</div>

            <div className="react">
              <ion-icon name="heart-outline"></ion-icon> <span>322</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
