import React from 'react'

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../Assets/Images/ladiesbag.png"
              class="d-block w-100"
              alt="LadiesBag"
              style={{ height: "80vh", objectFit: "cover" }}
            />
            <div class="carousel-caption d-none d-md-block bg-white ">
              <h5 class="text-secondary">
                Summer Collection Pure Pu Ladies Shoulder Bag
              </h5>
              <p class="text-secondary">
                Nulla vitae elit libero,a augue mollis interdum
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="../Assets/Images/shirts.png"
              class="d-block w-100"
              alt="Shirts"
              style={{ height: "80vh", objectFit: "cover" }}
            />
            <div class="carousel-caption d-none d-md-block bg-white">
              <h5 class="text-secondary">
                Summer Collection Young Handsome Guy Smart Suit
              </h5>
              <p class="text-secondary">
                Nulla vitae elit libero, a augue mollis interdum
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="../Assets/Images/blender.png"
              class="d-block w-100"
              alt="Blender"
              style={{ height: "80vh", objectFit: "cover" }}
            />
            <div class="carousel-caption d-none d-md-block bg-white">
              <h5 class="text-secondary">
                Summer Collection Blender Fruits Kitchen Space
              </h5>
              <p class="text-secondary">
                Nulla vitae elit libero,a augue mollis interdum
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Home