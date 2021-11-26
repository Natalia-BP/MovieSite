import React, { useContext } from 'react';
import { Context } from "../store/Context";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Slider from 'react-slick';

function TopRated() {
  var settings = {
    className: "tmdb-carousel",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 572,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3
        }
      }
    ]
  };
    
      const slider = React.useRef(null);
      const { store, actions } = useContext(Context);

    return (
        <>
          <h2 className="mb-3 mb-md-4">All-Time Top Rated Films</h2>
    
          <div className="tmdb-pop-carousel-container position-relative">
    
              <Slider ref={slider} {...settings}>
                {store.top_rated.map((e, i) => {
    
                  return (<div key={e.id} className="col">
    
                    <div className="card bg-dark poster-card mx-2 shadow position-relative d-flex flex-column align-items-center">
                      <img src={`https://image.tmdb.org/t/p/original${e.poster_img}`} className="card-img h-100" alt="..." />
                      {/* Empty div, just for overlay styles */}
                      <div className="card-img-overlay"></div>
    
                      {/* Quick View Button */}
                      <div className="tmdb-quickView bottom-0 position-absolute p-3">
                        <a href="#" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Quick View</a>
                      </div>
    
                      {/* Rates Button */}
                      <div className="tmdb-rating top-0 start-0 position-absolute pl-0 pt-3">
                        <span href="#" className="badge rounded-0 rounded-end text-dark bg-warning"><i class="fas fa-star"></i> {e.rating}</span>
                      </div>
                    </div>
                  </div>)
    
                })}
              </Slider>
        
    
            {/* Buttons */}
            <button onClick={() => slider.current.slickPrev()} className="tmdb-arrows fs-3 prev position-absolute text-white h-100 d-flex top-0 flex-column justify-content-center ps-2 pe-4"><i class="fas fa-chevron-left"></i></button>
    
            <button onClick={() => slider.current.slickNext()} className="tmdb-arrows fs-3 next position-absolute end-0 text-white h-100 top-0 d-flex flex-column justify-content-center ps-4 pe-2"><i class="fas fa-chevron-right"></i></button>
          </div>
        </>);
}

export default TopRated;