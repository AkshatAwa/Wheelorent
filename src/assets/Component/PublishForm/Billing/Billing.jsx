import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Billing.css";

const PublishVehicleForm = () => {
  const { id } = useParams();
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="pvf-container">
      {step === 1 && (
        <div className="pvf-step">
          <div className="pvf-section">
            <div className="pvf-section-header">
              <h2>Billing Info</h2>
              <span>Step 1 of 4</span>
            </div>
            <p className="pvf-description">Please enter your billing info</p>
            <div className="pvf-grid">
              <input className="pvf-input" placeholder="Your name" />
              <input className="pvf-input" placeholder="Phone number" />
              <input className="pvf-input" placeholder="Address" />
              <input className="pvf-input" placeholder="Town or city" />
            </div>
          </div>

          <div className="pvf-section">
            <h2>Vehicle Info</h2>
            <p className="pvf-description">Please enter your vehicle info</p>
            <div className="pvf-grid">
              <input className="pvf-input" placeholder="Model" />
              <input className="pvf-input" placeholder="Registration number" />
              <input className="pvf-input" placeholder="Company name" />
              <input className="pvf-input" placeholder="Car number" />
            </div>
          </div>

          <div className="pvf-btn-right">
            <button className="pvf-btn pvf-btn-primary" onClick={nextStep}>Next</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="pvf-step">
          <div className="pvf-section">
            <div className="pvf-section-header">
              <h2>Rental Info</h2>
              <span>Step 2 of 4</span>
            </div>
            <p className="pvf-description">Please select your rental date</p>

            <div className="pvf-block">
              <p className="pvf-label">Pick - Up</p>
              <div className="pvf-grid">
                <select className="pvf-input">
                  <option>Select your city</option>
                </select>
                <input className="pvf-input" placeholder="Select your date" />
                <select className="pvf-input">
                  <option>Select your time</option>
                </select>
              </div>
            </div>

            <div className="pvf-block">
              <p className="pvf-label">Drop - Off</p>
              <div className="pvf-grid">
                <select className="pvf-input">
                  <option>Select your city</option>
                </select>
                <input className="pvf-input" placeholder="Select your date" />
                <select className="pvf-input">
                  <option>Select your time</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pvf-section">
            <h2>Payment Method</h2>
            <p className="pvf-description">Please enter your payment method</p>
            <div className="pvf-radio-group">
              <label><input type="radio" name="payment" /> G-pay</label>
              <label><input type="radio" name="payment" /> PayPal</label>
              <label><input type="radio" name="payment" /> Cash on delivery</label>
            </div>
          </div>

          <div className="pvf-btn-row">
            <button className="pvf-btn pvf-btn-back" onClick={prevStep}>Back</button>
            <button className="pvf-btn pvf-btn-primary" onClick={nextStep}>Next</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="pvf-step">
          <div className="pvf-section-header">
            <h2>Confirmation</h2>
            <span>Step 3 of 4</span>
          </div>
          <p className="pvf-description">We are getting to the end. Just a few clicks and your rental is ready!</p>
          <div className="pvf-checkbox-group">
            <label><input type="checkbox" /> I agree with sending marketing and newsletter emails. No spam, promised!</label>
            <label><input type="checkbox" /> I agree with our terms and conditions and privacy policy.</label>
          </div>
          <div className="pvf-btn-center">
            <button className="pvf-btn pvf-btn-confirm">Confirm now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublishVehicleForm;
