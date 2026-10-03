import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import Style from './noticias.module.css'
import { Link } from "react-router-dom"

export const Noticias = () => {

    const [noticias, setNoticias] = useState([])


    const api_key = import.meta.env.VITE_KEY
    const url = import.meta.env.VITE_URL


    useEffect(() => {
        const fetchApi = async () => {
            Swal.fire({
                title: 'Carregando noticias',
                icon: 'info',
                showConfirmButton: false,
                allowOutsideClick: false
            })

            try {
                const res = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'x-api-key': api_key
                    }
                })
                const data = await res.json()

                setNoticias(data.news)

                Swal.close()



            } catch (err) {
                console.error(err.mesage)
            }
        }
        fetchApi()
    }, [])



    return (
        <div className={Style.container}>
            <h2>Notícias 24 horas</h2>
            <div className={Style.newsContainer}>
                {
                    noticias.map((noticia) => (
                        <div className={Style.news} key={noticia.id}>
                            <h3>{noticia.title}</h3>
                            <img src={noticia.image} alt={noticia.titulo} />
                        
                            <p>{noticia.summary}</p>
                          
                            <Link className={Style.button}to={`/noticia/${noticia.id}`}>Acessar</Link>
                        </div>

                    ))}

            </div>

        </div>
    )
}