//import data from '../data';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
    const [mascotas, setMascotas] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:5050/api/mascotas');
            setMascotas(result.data);
        };
        fetchData();
    }, []);
    return <div>
        <h1>Lista de mascotas</h1>
        <div className="mascotas">
            {mascotas.map(mascota => (
                <div className="mascota" key={mascota.slug}>
                    <Link to={`/mascota/${mascota.slug}`}>
                        <img src={mascota.image} alt={mascota.name} />
                    </Link>
                    <div className="info-mascota">
                        <Link to={`/mascota/${mascota.slug}`}>
                            <p>{mascota.name}</p>
                        </Link>
                        <p>{mascota.tipo}</p>
                        <Link to={`/mascota/${mascota.slug}`}>
                            <button>Ver más</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default Home;