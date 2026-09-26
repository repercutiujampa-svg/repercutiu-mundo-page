import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Swal from "sweetalert2"

export const Noticia = () =>{
    const api_key = import.meta.env.VITE_KEY
    const url = import.meta.env.VITE_URL_NEWS
    const [noticia, setNoticias] = useState(null)
    const { id } = useParams ()

 
           useEffect(() => {
                  const fetchApi = async () => {
                      Swal.fire({
                          title: 'Carregando noticias...',
                          icon: 'info',
                          showConfirmButton: false,
                          allowOutsideClick: false
                      })
          
                      try {
                          const res = await fetch(`${url}?ids=${id}`, {
                              method: 'GET',
                              headers: {
                                  'x-api-key': api_key
                              }
                          })
                          const data = await res.json()
                        
                          setNoticias(data.news[0])
          
                          Swal.close()
          
          
          
                      } catch (err) {
                          console.error(err.mesage)
                      }
                  }
                  fetchApi()
        },[])

    
    return(

        <div>
            {
                noticia ?
                <div>
                    <h2>{noticia?.title}</h2>
                    <p>{noticia?.authors}</p>
                    <img src="noticia?.image" alt="" />
                    <p>{noticia?.text}</p>
                </div>
                :
                <div>
                    <h2>Notícia indisponível</h2>
                </div>

                
            }
        </div>
    )
}