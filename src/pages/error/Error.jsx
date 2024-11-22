/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import './Error.css';

const ErrorPage = () => {
    return (
        <div className="error-container">
            <div className="error-content">
                <h1 className="error-code">404</h1>
                <h2 className="error-message">Oops! Page Not Found</h2>
                <p className="error-description">
                    The page you're looking for doesn't exist. It might have been removed or the URL is incorrect.
                </p>
                <Link to="/" className="home-button">
                    Back to Home
                </Link>
            </div>
            <div className="error-animation">
                <div className="floating-circle"></div>
            </div>
        </div>
    );
};

export default ErrorPage;
