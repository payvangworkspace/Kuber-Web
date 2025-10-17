import React from "react";
import "../Styles/FlowBefore.css";
import {
  FaStore,
  FaMoneyCheckAlt,
  FaIdCard,
  FaChartBar,
  FaExclamationCircle,
  FaExchangeAlt,
  FaUniversity,
  FaTimesCircle,
  FaCog,
  FaCreditCard,
  FaLaptop,
} from "react-icons/fa";

const FlowBefore = () => {
  return (
   <>
   <div className="flow-before-outer">
<div className="flow-before-inner">
<div className="fb-left">

<div className="card c1">
<div className="icon-container">
<FaStore className="icon-s"/>

</div>
<div className="container-head">
<div className="head">Your Shop / Website</div>
</div>


</div>
<div className="card c2">

<div className="icon-container">
<FaLaptop className="icon-s"/>

</div>
<div className="container-head">
<div className="head">APM provider</div>
</div>


</div>

<div className="card c3">
    
<div className="icon-container">
<FaCreditCard className="icon-s"/>

</div>
<div className="container-head">
<div className="head">Card Provider 3</div>
</div>




</div>

</div>

<div className="fb-middle">
    <div className="card-2">
    <div className="icon-2">
        <FaIdCard/>
    </div>

    <div className="head head-2">
    <div>KYC</div>


    </div>



    </div>
    <div className="card-2">


    </div>
    <div className="card-2">

    </div>



    
</div>





</div>



   </div>
   
   
   
   </>
  );
};

export default FlowBefore;
