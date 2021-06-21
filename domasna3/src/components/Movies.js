import React from 'react';


export function Movies(props) {

    console.log(props)
    return (
        <div id="movie">
            <table border="1">
                <thead>
                    <tr>
                        <th>Movie Title</th>
                        <th>Movie Date</th>
                        <th>Movie Plot</th>
                        <th>Movie Link</th>
                        <th>Movie Image</th>
                    </tr>
                </thead>
                <tbody>
                    {props.filmovi.map((film, i) => {
                        return (
                            <tr key={i}>
                                <td>
                                    {film.name}
                                </td>
                                <td>
                                    {film.date}
                                </td>
                                <td>
                                    {film.plot}
                                </td>
                                <td>
                                    <a href={film.imdbLink}>
                                        Clik the Imbd link
                                    </a>
                                </td>
                                <td>
                                    <img width={"200"} height={"200"} src={film.imgUrl} alt={film.name} />

                                </td>
                            </tr>
                        )
                    })

                    }
                </tbody>
            </table>
        </div >
    )
}
