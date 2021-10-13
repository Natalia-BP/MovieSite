import React, { useContext } from 'react';
import { Context } from "../store/Context";
import { BrowserRouter as Route, Link } from "react-router-dom";
import TextTruncate from 'react-text-truncate';
import Slider from 'react-slick';


function PopFilms() {
  var settings = {
    className: "tmdb-pop-carousel",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false
  };

  const slider = React.useRef(null);
  const { store, actions } = useContext(Context);

  return (
    <>
      <h1 className="mb-3 mb-md-4">Popular Films</h1>

      <div className="tmdb-pop-carousel-container position-relative">

          <Slider ref={slider} {...settings}>
            {store.pop_films.map((e, i) => {

              return (<div key={e.id} className="col">

                <div className="card bg-dark poster-card mx-2 h-100 shadow position-relative d-flex flex-column align-items-center">
                  <img src={`https://image.tmdb.org/t/p/original${e.poster_img}`} className="card-img h-100" alt="..." />
                  {/* Empty div, just for overlay styles */}
                  <div className="card-img-overlay"></div>

                  {/* Quick View Button */}
                  <div className="tmdb-quickView bottom-0 position-absolute p-3">
                    <a href="#" className="btn btn-warning">Quick View</a>
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
export default PopFilms;