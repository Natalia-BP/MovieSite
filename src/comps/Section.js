import React, { useEffect, useState } from 'react';
import Card from "./Card";

function Section() {
  // Api fetch - Popular Movies
  const [popfilms, setpopfilms] = useState([]);

  useEffect(() => {
    let myApi = '899d1c99b03262d83ba5a0f9ea9193b4';
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${myApi}`)
      .then(response => response.json())
      .then(data => setpopfilms(data.results));
  }, []);
  console.dir(popfilms);

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {popfilms.map((item) => <Card
      // Props
      title={item.title}
      overview={item.overview}
      release_date={item.release_date}
      card_img={item.backdrop_path}
      />)}
    </div>
  );

}

export default Section;
