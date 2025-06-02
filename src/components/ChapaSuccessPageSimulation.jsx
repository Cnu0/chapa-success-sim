
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const ChapaSuccessPageSimulation = () => {
  // --- HARDCODED VALUES FOR OFFLINE DEVELOPMENT ---
  const tx_ref = 'mock-tx-1234567890'; // Replace with a sample transaction reference
  const type = 'cart';                 // Replace with 'cart' or 'wallet' as needed for testing
  // --- END HARDCODED VALUES ---

  const navigate = useNavigate();

  useEffect(() => {
    // This logic still works with the hardcoded 'type'
    if (type === 'wallet') {
      navigate('/customer/prepaid');
    }
  }, [type, navigate]);

  return (
    <div className="payment-success-container">
      <div className="card payment-card">
        <div className="payment-card-header">
          <div className="success-icon pulse-animation">🎉</div>
          <h2 className="mb-0 fw-bold">Payment Successful!</h2>
        </div>
        
        <div className="payment-card-body">
          {tx_ref ? (
            <>
              <p className="lead mb-3 text-muted">
                Thank you for your order. Your transaction has been processed successfully.
              </p>
              
              <div className="mb-3">
                <small className="text-muted d-block mb-2">Transaction Reference:</small>
                <div className="tx-ref-display">
                  {tx_ref}
                </div>
              </div>
              
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div className="me-2">
                  <svg width="20" height="20" fill="#28a745" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.061L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                </div>
                <small className="text-success fw-semibold">Verified & Secure</small>
              </div>
            </>
          ) : (
            <>
              <div className="alert alert-warning" role="alert">
                <strong>⚠️ Warning:</strong> No transaction reference found. Please contact support for assistance.
              </div>
              <p className="text-muted">
                If you believe this is an error, please reach out to our customer support team.
              </p>
            </>
          )}

          {/* This button will only be shown if the hardcoded 'type' is NOT 'wallet' */}
          {type !== 'wallet' && (
            <div className="mt-4">
              <a 
                href="/homepage" 
                className="btn btn-primary custom-btn text-white text-decoration-none"
              >
                <svg width="16" height="16" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
                Go to Homepage
              </a>
            </div>
          )}
          
          <div className="mt-3">
            <small className="text-muted">
              Need help? Contact our support team 24/7
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapaSuccessPageSimulation;
