import React from 'react';
import '../Styles/IndustriesSection.css';
import { FaUniversity, FaMoneyBillWave, FaMobileAlt, FaHospitalAlt, FaShoppingCart } from 'react-icons/fa';

const industries = [
  {
    icon: <FaUniversity />,
    title: 'Banking & Finance',
    desc: 'Streamlined digital payment solutions tailored for modern financial institutions.'
  },
  {
    icon: <FaMoneyBillWave />,
    title: 'Lending & Microfinance',
    desc: 'Automate disbursements and collections with ease and transparency.'
  },
  {
    icon: <FaMobileAlt />,
    title: 'Telecom & Utility',
    desc: 'Enable real-time bill payments and recharge with secure payment channels.'
  },
  {
    icon: <FaHospitalAlt />,
    title: 'Healthcare',
    desc: 'Simplify patient billing with seamless, multi-mode payment acceptance.'
  },
  {
    icon: <FaShoppingCart />,
    title: 'E-commerce',
    desc: 'Offer fast and secure checkout experiences to boost customer conversions.'
  }
];

const IndustriesSection = () => {
  return (
    <section className="industries-section">
      <div className="industries-content">
        <div className="industries-header">
          <h5>Industries We Empower</h5>
          <h2>Future-Ready Payment Solutions<br />for Every Sector</h2>
          <p>
            KuberPays provides tailored payment infrastructure that adapts to your industry’s specific needs—
            secure, scalable, and globally connected.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((item, idx) => (
            <div key={idx} className="industry-card">
                <div className='icon-packer'>
              <div className="icon-wrapper">{item.icon}</div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
