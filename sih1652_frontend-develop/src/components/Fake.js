import React, { useState } from 'react';
import bcrypt from 'bcryptjs'; // Make sure to install bcryptjs

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [message, setMessage] = useState('');

  // Toggle between login and sign-up forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ email: '', password: '', name: '' });
    setMessage('');
  };

  // Handle form data changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate email format
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Fake Sign-up Handler (store in localStorage)
  const handleSignUp = (e) => {
    e.preventDefault();
    const { email, password, name } = formData;

    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if the email is already registered
    const isRegistered = users.some((user) => user.email === email);
    if (isRegistered) {
      setMessage('Email is already registered!');
    } else {
      // Hash password before storing
      const hashedPassword = bcrypt.hashSync(password, 10);
      users.push({ email, password: hashedPassword, name });
      localStorage.setItem('users', JSON.stringify(users));
      setMessage('Sign-up successful! You can now log in.');
      setIsLogin(true); // Switch to login view after sign-up
    }
  };

  // Fake Login Handler (check against localStorage)
  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if credentials are correct
    const user = users.find((user) => user.email === email);
    
    if (user && bcrypt.compareSync(password, user.password)) {
      setIsAuthenticated(true);
      setMessage('Login successful!');
    } else {
      setMessage('Invalid credentials!');
    }
  };

  // Logout function
  const handleLogout = () => {
    setIsAuthenticated(false);
    setMessage('');
  };

  return (
    <div>
      <h1>{isAuthenticated ? 'Welcome' : isLogin ? 'Login' : 'Sign-up'}</h1>

      {message && <p>{message}</p>}

      {isAuthenticated ? (
        <div>
          <h2>You are logged in!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={isLogin ? handleLogin : handleSignUp}>
          {!isLogin && (
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">{isLogin ? 'Login' : 'Sign-up'}</button>
        </form>
      )}

      <button onClick={toggleForm}>
        {isLogin ? 'Switch to Sign-up' : 'Switch to Login'}
      </button>
    </div>
  );
}

export default App;