import { Fragment } from "react";
import { useNavigate } from 'react-router-dom'; 

import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Movie.css";

export default function Movie() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const navigate = useNavigate();

    const poster = [
        {
            title: "Mission: Impossible", id: 1,
            rate: 4,
            genre: "Action & adventure",
            img: "https://play-lh.googleusercontent.com/AqFHO_W_TQvfIxoEvBoNbPcM5zvi4Ly68njLmFFpHVjVB2popMy3AfyzkEYntcyPtHC7UlOOcsjibmR3ZYk=w240-h480-rw",
            desc:"Ethan Hunt (Tom Cruise) and his IMF squad embark on their most dangerous mission yet: Tracking down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With the fate of the world in jeopardy, a death race across the globe begins. Facing a mysterious and powerful enemy, Ethan is forced to consider that nothing is more important than his mission - including the lives of the people he cares about most."
        },
        {
            title: "The Equalizer 3", id: 2,
            rate: 4,
            genre: "Action & adventure",
            img: "https://play-lh.googleusercontent.com/Og2IO7jzXkasXZANDbTmRq3YheiJljp6LhgZYmG1URPWt7x6gitc7B6tv9Leuara5hL72RvdNncTTsGTow=w240-h480-rw",
            desc:"Denzel Washington is Robert McCall, an ex-assassin with a mysterious past, who returns to action to serve vengeance for the exploited and oppressed. Finding himself surprisingly at home in Southern Italy, he discovers his new friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia."
        },
        {
            title: "Sound of Freedom", id: 3,
            rate: 4,
            genre: "Drama",
            img: "https://play-lh.googleusercontent.com/Jnh6cligJ0J5jjy4LQcD8TVazbJrhDeP3zjKMdA_woCSIkmt23VpkLoG5CgbcNcgGttzd_zcn0_UJ9PorJJl=w240-h480-rw",
            desc:"The incredible true story of a former government agent turned vigilante who embarks on a dangerous mission to rescue hundreds of children from human traffickers."
        },
        {
            title: "PAW Patrol", id: 4,
            rate: 4,
            genre: "Animation",
            img: "https://play-lh.googleusercontent.com/j1624170ldQjyAhorw1b6UrzELE7Lte4VaiHz2Nz1XWt4iO7mz-ZjDzHs0N3-aikYOl_YhJygHwW6Cthx2Y",
            desc: "When a magical meteor crashes into Adventure City, it gives the PAW Patrol pups extraordinary powers and makes them THE GREATEST DOGS! However, they face the biggest challenge when their enemy, Humdinger breaks out of prison and joins forces with mad scientist, Victoria Vance to steal that power. When the fate of Adventure City hangs in the balance, Ultimate Dog needs to stop the bad guys before it's too late."
        },
        {
            title: "Barbie", id: 4,
            rate: 4,
            genre: "Comedy",
            img: "https://play-lh.googleusercontent.com/PEz2VIjIs5IEB-bxlLAVnYSKKEqeWmlX8jB2EZpIZAMwfpOVAhWV05z23XoOCk3_7emlhoeZkSQ2Vu4FvXjF",
            desc: "To live in Barbie Land is to be a perfect being in a perfect place. Unless you have a full‐on existential crisis. Or you're a Ken."
        },
    ];

    // Create a function to navigate to the DetailPage with the selected movie data
    const navigateToDetailPage = (item) => {
        navigate(`/movie/detail/${item.id}`, { state: { movieData: item } });
    };

    return (
        <>
            <p id="movies">Top Movies</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig
                            title={item.title}
                            img={item.img}
                            genre={item.genre}
                            size={STAR_SIZE}
                            color={STAR_COLOR}
                            rate={item.rate}
                            onClick={() => navigateToDetailPage(item)} 
                        />
                        {poster.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className="column">
                    <p id="movies">All Movies</p>
                    {poster.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall
                                title={item.title}
                                img={item.img}
                                genre={item.genre}
                                size={STAR_SIZE}
                                color={STAR_COLOR}
                                rate={item.rate}
                                onClick={() => navigateToDetailPage(item)} 
                            />
                            {poster.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}
