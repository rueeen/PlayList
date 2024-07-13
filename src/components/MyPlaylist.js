import { SpotifyPlayer } from "./SpotifyPlayer";
import { useState, useRef } from "react";
import { v4 as uuid } from 'uuid';

export function MyPlaylist() {
    const urlRef = useRef();
    const favoriteRef = useRef();
    const [mensaje, setMensaje] = useState("");

    function addSong() {
        console.log('Presionando boton agregar');
        const url = urlRef.current.value;
        const favorite = favoriteRef.current.checked;

        if (url.trim() !== "") {
            const song = {
                id: uuid(),
                url: url,
                favorite: favorite
            }

            const newList = [...defaultPlaylist, song]; /** Destructuring */

            setDefaultPlaylist(newList);
            alert('Se agrego cancion');
        } else {
            setMensaje('Campos vacios');
            setTimeout(() => {
                setMensaje('');
            }, 2000);
        }

        urlRef.current.value = '';
        favoriteRef.current.checked = false;
    }

    function deleteSongs() {
        console.log("Presionando boton delete");
        const newList = defaultPlaylist.filter(song => song.favorite === true);
        setDefaultPlaylist(newList);
        alert('Se eliminaron no favoritas')
    }

    function setFavorite(id){
        console.log(`Se clickeo id ${id}`);
        const newList = [...defaultPlaylist];
        const song = newList.find(element => element.id === id);
        song.favorite = !song.favorite;
        setDefaultPlaylist(newList);
    }

    const [defaultPlaylist, setDefaultPlaylist] = useState([
        { id: uuid(), url: '33qkK1brpt6t8unIpeM2Oy', favorite: true },
        { id: uuid(), url: '0H6TddUF2M63ZSHGvhk5yy', favorite: true },
        { id: uuid(), url: '3fn4HfVz5dhmE0PG24rh6h', favorite: false },
        { id: uuid(), url: '0DQyTVcDhK9wm0f6RaErWO', favorite: true }
    ]);

    return (
        <div className='container'>
            <h1 className='title text-center mt-5'>My favorite songs</h1>

            <div className='d-flex align-items-center'>
                <input ref={urlRef} type='text' className='form-control' placeHolder='Ingrese el codigo del album aqui...'></input>
                <div className='form-check ms-2'>
                    <input ref={favoriteRef} className='form-check-input' type='checkbox' />
                    <label className='form-check-label'> Favorite </label>
                </div>
                <button className='btn btn-success ms-2' onClick={addSong}><i class="bi bi-plus-circle-fill"></i></button>
                <button className='btn btn-danger ms-2' onClick={deleteSongs}><i class="bi bi-trash"></i></button>
            </div>
            <span hidden={ !(mensaje) }> {mensaje} </span>
            <div>
                { // Abrimos llaves para iniciar logica de programacion
                    defaultPlaylist.map(function (element) {
                        return <SpotifyPlayer setFavorite={setFavorite} song={element} key={element.id} />
                    })
                }
            </div>
        </div>
    );
}