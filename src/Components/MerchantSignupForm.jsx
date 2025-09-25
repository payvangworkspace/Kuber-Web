import React from "react";
import "../Styles/MerchantSignupForm.css";
import Swal from "sweetalert2";

const MerchantSignupForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show SweetAlert2 success popup
    Swal.fire({
      icon: "success",
      title: "Form Submitted!",
      text: "Thank you! Your form has been submitted successfully.",
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
      background: "#f7f9fc",
      color: "#0a2540",
      iconColor: "#2a5298",
    });

    // Reset the form
    e.target.reset();
  };

  return (
    <section className="merchant-form-section">
      <div className="merchant-form-card">
        <div className="merchant-form-header">
          <h2>Sign Up with Kuber Payment</h2>
          <p>
            Join the leading payment processing partner. Seamless, reliable, 
            and easy-to-integrate solutions for your business.
          </p>
        </div>

        <form className="merchant-form" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-grid">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>

          {/* Company and Website (optional) */}
          <div className="form-grid">
            <input type="text" placeholder="Company Name" required />
            <input type="url" placeholder="Website (optional)" />
          </div>

          {/* Email & Phone */}
          <div className="form-grid">
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
          </div>

          {/* Alternative contact (optional) */}
          <div className="form-grid">
            <select>
              <option value="">Alternative Contact Method (optional)</option>
              <option>Email</option>
              <option>Skype</option>
              <option>Telegram</option>
              <option>WhatsApp</option>
            </select>
            <input type="text" placeholder="Alternative Contact ID or Username (optional)" />
          </div>

          {/* Country & Annual Volume (optional) */}
          <div className="form-grid">
            <input type="text" placeholder="Country" required />
            <input type="text" placeholder="Annual Processing Volume (optional)" />
          </div>

          {/* How did you hear about us (optional) */}
          <textarea placeholder="How Did You Hear About Us? (optional)"></textarea>

          {/* Submit button */}
          <button type="submit" className="merchant-submit-btn">
            SIGN UP NOW
          </button>
        </form>
      </div>
    </section>
  );
};

export default MerchantSignupForm;
