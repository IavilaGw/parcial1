import React, { useState } from 'react';
import './login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setContra] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let emailError = '';
    let passwordError = '';
    let isValid = true;

    if (!validateEmail(email)) {
      emailError = 'Correo electrónico no válido';
      isValid = false;
    }

    if (password.length < 8) {
      passwordError = 'La contraseña debe tener al menos 8 caracteres';
      isValid = false;
    }

    setErrors({ email: emailError, password: passwordError });

    if (isValid) {
      alert('Inicio de sesión exitoso');
    }
  };

  return (
    <div className="login d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '20rem', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <h2 className="text-center mb-4">Log in</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id="password"
              value={password}
              onChange={(e) => setContra(e.target.value)}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100">Ingresar</button>
        </form>
      </div>
    </div>
  );
};


// https://react-bootstrap.netlify.app/docs/forms/overview/
export default Login;
