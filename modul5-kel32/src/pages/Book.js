import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import CardBig from "../component/CardBig"; import CardSmall from "../component/CardSmall"; import "./Book.css";

export default function Book() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const navigate = useNavigate();

    const poster = [
        {
            title: "Pesan Terakhir", id: 1,
            rate: 4,
            genre: "Young Adult Fiction • Family • General",
            img: "https://books.google.com/books/publisher/content/images/frontcover/6_MhEAAAQBAJ?fife=w480-h690",
            desc:"First mission after leaving office. Someone from the past. Those who love unconditionally. Like a broken kite, Tadashi lost his way when the elders removed him from the position of Successor Clan Head. Unexpectedly, fate brought him together with someone from the past, who then pulled him back upright. But for all wishes that come true, there is a price to be paid."
        },
        {
            title: "Seri Regu Satya: Kasus Malam Qadar", id: 2,
            rate: 4,
            genre: "Young Adult Fiction • Mystery and Detective Stories",
            img: "https://books.google.com/books/publisher/content/images/frontcover/MskBEAAAQBAJ?fife=w480-h690",
            desc:"After the Eagle Team held an iftar event together at the Orphanage house cared for by Bimo's father, they performed tarawih together at the Grand Mosque. However, that night unexpectedly something happened. It's time for detective Satya to act! Will he be able to solve the case?"
        },
        {
            title: "Seri Regu Satya: Episode Spesial Ramadhan", id: 3,
            rate: 5,
            genre: "Young Adult Fiction • Religious • Muslim",
            img: "https://books.google.com/books/publisher/content/images/frontcover/ZGtMEAAAQBAJ?fife=w480-h690",
            desc:"Ramadan has arrived! What is the daily life of Satya and his friends during the month of Ramadan? Where do you go before fasting? What did Ardi do to hang out? What is Wira's side job? What kind of prank is Bimo doing? Happy, sad, emotional, jokes and laughter. Follow their exciting story here! This book is a collection of short stories or mini fiction of the Eagle Team in grade 8 of junior high school, when Satya was their team leader."
        },
        {
            title: "Tutorial Membuat Tampilan Menggunakan Bootstrap 4", id: 4,
            rate: 4,
            genre: "Computer • Web • Design",
            img: "https://books.google.com/books/publisher/content/images/frontcover/D__eDwAAQBAJ?fife=w480-h690",
            desc:"Bootstrap is a CSS framework that many programmers in the front end web developer field are interested in because this framework has modern features (responsive design) and is easy to implement. Through this ebook, you will be given a basic understanding of bootstrap and how to create a website appearance using bootstrap components."
        },
        {
            title: "Mengenal Bitcoin dan Cryptocurrency", id: 5,
            rate: 4,
            genre: "Business & Economics • Industry • Computers & Information Technology",
            img: "https://books.google.com/books/publisher/content/images/frontcover/1_72CwAAQBAJ?fife=w480-h690",
            desc:"Bitcoin is a new breakthrough in the use of cryptography in a digital technology-based payment system. As a pioneer in cryptocurrency technology, Bitcoin offers a payment system that does not require a central bank to regulate the system and relies on mathematical calculations to verify transactions made. This book will help you get to know Bitcoin, the basics of the technology used, how to earn and use bitcoins. This book also reviews several types of AltCoins, digital money that emerged after Bitcoin."
        },
        
    ];
    
    const navigateToDetailPage = (item) => {
        navigate(`/book/detail/${item.id}`, { state: { movieData: item } });
    };

    return (
        <>
            <p id="movies">Top Book</p>
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
                <p id="movies">All Book</p>
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
