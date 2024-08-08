import React from 'react'

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../Assets/Images/ladiesbag.png"
              className="d-block w-100"
              alt="LadiesBag"
              style={{ height: "80vh", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-white ">
              <h5 className="text-secondary">
                Summer Collection Pure Pu Ladies Shoulder Bag
              </h5>
              <p className="text-secondary">
                Nulla vitae elit libero,a augue mollis interdum
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../Assets/Images/shirts.png"
              className="d-block w-100"
              alt="Shirts"
              style={{ height: "80vh", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-white">
              <h5 className="text-secondary">
                Summer Collection Young Handsome Guy Smart Suit
              </h5>
              <p className="text-secondary">
                Nulla vitae elit libero, a augue mollis interdum
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../Assets/Images/blender.png"
              className="d-block w-100"
              alt="Blender"
              style={{ height: "80vh", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-white">
              <h5 className="text-secondary">
                Summer Collection Blender Fruits Kitchen Space
              </h5>
              <p className="text-secondary">
                Nulla vitae elit libero,a augue mollis interdum
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Home