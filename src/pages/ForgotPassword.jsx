import { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const {currentMode }=useContext(ShopContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for the function to send the email
    // sendPasswordResetEmail(email);
    setMessage('A new password has been sent to your email.');
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${currentMode==='light'?'bg-gray-100':''}`}>
      <div className={`p-6 rounded shadow-md w-[90%] sm:w-[400px] ${currentMode==='light'?'bg-white':'bg-gray-500'}`}>
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
          >
            Send New Password
          </button>
        </form>
        {message && <p className="mt-4 text-green-500 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
