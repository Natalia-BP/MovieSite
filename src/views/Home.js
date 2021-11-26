// Switch Components
import PopFilms from "../comps/PopFilms";
import TopRated from "../comps/TopRated";

function Home() {
    return (<>
        <section className="mb-4 mb-lg-5">
            <PopFilms />
        </section>

        <section>
            <TopRated />
        </section>
    </>);
}

export default Home;