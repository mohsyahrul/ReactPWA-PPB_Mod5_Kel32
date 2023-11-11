import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import CardBig from "../component/CardBig"; import CardSmall from "../component/CardSmall"; import "./Game.css";

export default function Game() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const navigate = useNavigate();

    const poster = [
        {
            title: "Mobile Legends: Bang Bang", id: 1,
            rate: 3,
            genre: "Action • Strategy • MOBA",
            img: "https://play-lh.googleusercontent.com/wRXSrwwbzBBlTpowK6onSs3rfBV-4nqVvLJJ7yAZa7jzdGNHpHH2hDhKCyKWj_3nqw=s256-rw",
            desc:"Join your friends in Mobile Legends: Bang Bang, the brand new 5v5 MOBA showdown, and fight against real players! Choose your favorite heroes and build the perfect team with your comrades-in-arms! 10-second matchmaking, 10-minute battles. Laning, jungling, pushing, and teamfighting, all the fun of PC MOBA and action games in the palm of your hand! Feed your eSports spirit! Mobile Legends: Bang Bang, the fascinating MOBA game on mobile. Smash and outplay your enemies and achieve the final victory with your teammates!"
        },
        {
            title: "eFootball™ 2024", id: 2,
            rate: 3,
            genre: "Sport • Soccer",
            img: "https://play-lh.googleusercontent.com/YSBROwWXRnq8AngOnNIBpNtiF-FqUGIADf3-jdqhQMEoLWdqjvlUboxJMFsH7S_wiO0=w240-h480-rw",
            desc:"It's a new era of digital football: PES has now evolved into eFootball™! Now, you can enjoy a new round of football gaming experience with eFootball™! Apart from FC Barcelona, Manchester United FC, FC Bayern München, AC Milan, Internazionale Milano, and other top European football clubs, you can also use the new National Team Uniforms and Emblems as well as Club Teams from South America, J.League, and throughout world for your team!"
        },
        {
            title: "Roblox", id: 3,
            rate: 4,
            genre: "Adventure • Simulation • Sandbox",
            img: "https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcir2SKlVOxeUv9tZGfNTmNaLC717Ht=w240-h480-rw",
            desc:"Roblox is the best virtual universe game that encourages you to be creative, share experiences with friends, and become anything your imagination allows. Join millions of people and discover an infinite variety of worlds created by a global community! Already have an account? Log in to your Roblox account and explore the infinite Roblox metaverse."
        },
        {
            title: "Free Fire: Winterlands", id: 4,
            rate: 4,
            genre: "Action • Tactical shooter • Casual",
            img: "https://play-lh.googleusercontent.com/4RvFMe4VmXWyrruxkfGMSBR-hGYsz8X-CK5rW-667wDAU-zuaxePgm_sXW-9YI-MrY15=w240-h480-rw",
            desc:"Free Fire is the most famous mobile shooting game in the world. Every 10 minutes of play places you on a remote island where you will compete against 49 other players, all fighting to survive. Players freely choose their descent location with a parachute, and try to stay in the safe zone as long as possible. Drive vehicles to explore the map, hide in the wilderness, or become invisible by hiding in grass and bushes. Ambush, aim, defend, for only one goal: survive and answer the call of duty."
        },
        {
            title: "8 Ball Pool", id: 5,
            rate: 4,
            genre: "Sports • Billiards • Casual • Offline",
            img: "https://play-lh.googleusercontent.com/bPz1guJ6FHF3oIOEy3KqwpaDDKO-hLRaZoyzmM8bLFLN8fWm6L0_EuUnkwv9iqPo3Ag",
            desc:"Play with friend! Play with Legends. Play the popular Miniclip 8 Ball Pool game on your mobile device and become the best player! Hone your skills on the practice field, take on the world in 1-vs-1 matches, or enter tournaments to win trophies and exclusive cues!"
        },
        
    ];

    const navigateToDetailPage = (item) => {
        navigate(`/game/detail/${item.id}`, { state: { movieData: item } });
    };
    

    return (
        <>
            <p id="movies">Top Game</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} onClick={() => navigateToDetailPage(item)} 
                        />
                        {poster.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className="column">
                <p id="movies">All Game</p>
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        
                        <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} rate={item.rate} 
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
