import React from 'react';
import '../Styles/IndustriesSection.css';
import { FaUniversity, FaMoneyBillWave, FaMobileAlt, FaHospitalAlt, FaShoppingCart,FaCreditCard,FaTachometerAlt , FaShieldAlt, FaThLarge, FaChartLine, FaCode, FaBuilding, FaUserTie } from 'react-icons/fa';

const industries = [
  {
    icon: <FaCreditCard />,
    title: 'Accept All Payment Modes',
    desc: 'Support domestic & international cards, EMIs (card-based & cardless), netbanking from 58 banks to offer the most extensive payment options.'
  },
  {
    icon: <FaTachometerAlt />,
    title: 'All-in-One Dashboard',
    desc: 'Gain valuable business insights with detailed reports on payments, settlements, refunds, and more, helping you make better decisions.'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Robust Security',
    desc: 'Ensure total safety with PCI-DSS Level 1 compliance, regular third-party audits, and a dedicated internal security team.'
  },
  {
    icon: <FaThLarge />,
    title: 'Multi-Channel Processing',
    desc: 'Process payments in-store, online, and via mobile seamlessly, with the flexibility and scalability to support your growth.'
  },
 
  {
    icon: <FaCode />,
    title: 'Built for Developers',
    desc: 'Use clean, robust APIs, plugins, and libraries across major platforms and languages, so you can focus on building great products.'
  },
  
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
