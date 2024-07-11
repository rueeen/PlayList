import { SpotifyPlayer } from "./SpotifyPlayer";

export function MyPlaylist() {
    const defaultPlaylist = [
        { url: "2UJcKiJxNryhL050F5Z1Fk", favorite: true },
        { url: "7wOOA7l306K8HfBKfPoafr", favorite: false },
    ]
    return (
        <div className='container'>
            <h1 className='title text-center mt-5'>My favorite songs</h1>

            <div className='d-flex align-items-center'>
                <input type='text' className='form-control' placeHolder='Ingrese el codigo del album aqui...'></input>
                <div className='form-check ms-2'>
                    <input className='form-check-input' type='checkbox' />
                    <label className='form-check-label'> Favorite </label>
                </div>
                <button className='btn btn-success ms-2'><i class="bi bi-plus-circle-fill"></i></button>
                <button className='btn btn-danger ms-2'><i class="bi bi-trash"></i></button>
            </div>

            <div>

                { // Abrimos llaves para iniciar logica de programacion
                    defaultPlaylist.map(function (element) {
                        return <SpotifyPlayer favorite={element.favorite} url={element.url} />
                    })
                }
            </div>
        </div>
    );
}