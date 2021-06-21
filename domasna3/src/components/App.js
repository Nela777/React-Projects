import React from 'react';
import { Movies } from './Movies'


const movies = [
  {
    name: "Avengers", date: 2012, genre: "Action,Adventure,Sci-Fi",
    plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    imbdLink: "https://www.imdb.com/title/tt0848228/", imgUrl: "https://flxt.tmsimg.com/assets/p8815512_p_v10_ap.jpg"
  },
  {
    name: "Avengers-Age of Ultron", date: 2015, genre: "Action,Adventure,Sci-Fi",
    plot: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    imbdLink: "https://www.imdb.com/title/tt2395427/", imgUrl: "https://townsquare.media/site/442/files/2015/04/avengers-tag.jpg?w=980&q=75"
  },
  {
    name: "Avengers-Infinity War", date: 2018, genre: "Action,Adventure,Sci-Fi",
    plot: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    imbdLink: "https://www.imdb.com/title/tt4154756/", imgUrl: "https://images-na.ssl-images-amazon.com/images/I/61hj0ITyBnL._AC_.jpg"
  },
  {
    name: "Avengers-Endgame", date: 2019, genre: "Action,Adventure,Sci-Fi",
    plot: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    imbdLink: "https://www.imdb.com/title/tt4154796/", imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71Uzr5jyn1L._AC_SX425_.jpg"
  },
  {
    name: "Doctor Strange", date: 2016, genre: "Action,Adventure, Fantasy",
    plot: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
    imbdLink: "https://www.imdb.com/title/tt1211837/", imgUrl: "https://cdn.europosters.eu/image/750/posters/doctor-strange-hand-i32870.jpg"
  }
]

export function App() {

  return (
    <div id="app">
      <h1> List of movies in table</h1>
      <Movies filmovi={movies} />
    </div>
  )

}