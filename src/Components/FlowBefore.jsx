import React from "react";
import "../Styles/FlowBefore.css";
import {
  FaStore,
  FaIdCard,
  FaChartBar,
  FaExclamationCircle,
  FaExchangeAlt,
  FaUniversity,
  FaTimesCircle,
  FaCreditCard,
  FaLaptop,
  FaCoins,
  FaUserSecret,
  FaEdit,
} from "react-icons/fa";

const FlowBefore = () => {
  return (
    <div className="flow-before-outer">
      <div className="flow-before-inner">
        {/* ===== LEFT COLUMN ===== */}
        <div className="fb-column column-1">
          <div className="card animated-card delay-0">
            <FaStore className="icon-s" />
            <div className="head">Your Shop / Website</div>
          </div>

          <div className="card animated-card delay-1">
            <FaLaptop className="icon-s" />
            <div className="head">APM Provider</div>
          </div>

          <div className="card animated-card delay-2">
            <FaCreditCard className="icon-s" />
            <div className="head">Card Provider 3</div>
          </div>
        </div>

        {/* ===== SECOND COLUMN ===== */}
        <div className="fb-column column-2">
          <div className="card-2 animated-card delay-3">
            <FaIdCard className="icon-2" />
            <div className="head head-2">KYC</div>
          </div>
          <div className="card-2 animated-card delay-4">
            <FaCoins className="icon-2" />
            <div className="head head-2">Settlement</div>
          </div>
          <div className="card-2 animated-card delay-5">
            <FaExchangeAlt className="icon-2" />
            <div className="head head-2">Smart Routing</div>
          </div>
        </div>

        {/* ===== MIDDLE BIG COLUMN ===== */}
        <div className="fb-center column-3">
          <div className="center-top">
            <div className="card-2 animated-card delay-6">
              <FaChartBar className="icon-2" />
              <div className="head head-2">Analytics</div>
            </div>
          </div>

          <div className="center-bottom">
            <div className="card-2 animated-card delay-7">
              <FaExclamationCircle className="icon-2" />
              <div className="head head-2">Failover Chains</div>
            </div>

            <div className="card-2 animated-card delay-8">
              <FaUserSecret className="icon-2" />
              <div className="head head-2">Fraud Prevention</div>
            </div>

            <div className="card-2 animated-card rejected-card delay-9">
              <FaTimesCircle className="icon-2" />
              <div className="head head-2">Rejected</div>
            </div>
          </div>
        </div>

        {/* ===== RIGHT COLUMN ===== */}
        <div className="fb-column column-4">
          <div className="card-2 animated-card delay-10">
            <FaCreditCard className="icon-2" />
            <div className="head head-2">Card Provider 1</div>
          </div>
          <div className="card-2 animated-card delay-11">
            <FaCreditCard className="icon-2" />
            <div className="head head-2">Card Provider 2</div>
          </div>
          <div className="card-2 animated-card delay-12">
            <FaUniversity className="icon-2" />
            <div className="head head-2">Open Banking</div>
          </div>
          <div className="card-2 animated-card delay-13">
            <FaEdit className="icon-2" />
            <div className="head head-2">One-click Payments</div>
          </div>
        </div>
      
      </div>
      <div className="bottom-head">
        <h3 className="before-head">Before</h3>
      </div>
    </div>
  );
};

export default FlowBefore;
