import React, { useState, useEffect } from 'react';
import './Home.css';

const sportImages = {
  Running: 'https://plus.unsplash.com/premium_photo-1679938885972-180ed418f466?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  Swimming: 'https://plus.unsplash.com/premium_photo-1664475361436-e37f6f2ba407?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3dpbW1pbmd8ZW58MHx8MHx8fDA%3D',
  Cycling: 'https://plus.unsplash.com/premium_photo-1685207267343-1c8852b45575?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2ljbGlzbW98ZW58MHx8MHx8fDA%3D',
};

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://my.api.mockaroo.com/users.json?key=b5ac50c0')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos de la API');
        }
        return response.json();
      })
      .then((data) => {
        const fetchedUser = data[0]; 
        setUser(fetchedUser);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando datos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>No se encontraron datos del usuario.</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src="https://via.placeholder.com/150" className="card-img" alt="Profile" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{user.full_name}</h5>
                  <p className="card-text"><strong>Mejor tiempo corriendo:</strong> {user.mejor_tiempo_corrie}</p>
                  <p className="card-text"><strong>Mejor tiempo nadando:</strong> {user.mejor_tiempo_nadand}</p>
                  <p className="card-text"><strong>Mejor tiempo en bicicleta:</strong> {user.mejor_tiempo_cicla}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <h3>Cycling</h3>
          <div className="card mb-3">
            <img src={sportImages.Cycling} className="card-img-top" alt="Cycling" />
            <div className="card-body">
              <p className="card-text"><strong>Duración:</strong> {user.mejor_tiempo_cicla}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <h3>Running</h3>
          <div className="card mb-3">
            <img src={sportImages.Running} className="card-img-top" alt="Running" />
            <div className="card-body">
              <p className="card-text"><strong>Duración:</strong> {user.mejor_tiempo_corrie}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <h3>Swimming</h3>
          <div className="card mb-3">
            <img src={sportImages.Swimming} className="card-img-top" alt="Swimming" />
            <div className="card-body">
              <p className="card-text"><strong>Duración:</strong> {user.mejor_tiempo_nadand}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
