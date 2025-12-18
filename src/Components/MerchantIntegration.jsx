import React, { useState } from "react";
import "../Styles/MerchantIntegration.css";

const apiDocs = [
  {
    section: "Pay-In Integration",
    apis: [
      {
        name: "Create Order",
        description: "Create a new order and generate a payment link.",
        method: "POST",
        url: "https://pg.kuberpayss.in/v1/newOrder",
        headers: [
          "merchantAppId: AppId",
          "merchantSecretId: SecretKey",
          "Content-Type: application/json",
        ],
        body: `{
  "appKey": "AppId",
  "payableAmount": "199.00",
  "txnType": "SALE",
  "countryCode": "IND",
  "currencyCode": "INR",
  "ordRequestId": "ORD10012251",
  "customerName": "Customer Name",
  "customerEmailId": "customer@example.com",
  "customerContactNumber": "9876543210",
  "return_url": "https://merchant.com/callback"
}`,
      },
      {
        name: "Order Status",
        description: "Check the current status of an order.",
        method: "POST",
        url: "https://pg.kuberpayss.in/v1/orderStatus",
        headers: [
          "merchantAppId: AppId",
          "merchantSecretId: SecretKey",
          "Content-Type: application/json",
        ],
        body: `{
  "appKey": "AppId",
  "ordRequestId": "ORD10012251"
}`,
      },
    ],
  },
  {
    section: "Pay-Out Integration",
    apis: [
      {
        name: "NEFT Transfer",
        description: "Send money to beneficiary via NEFT.",
        method: "POST",
        url: "https://pg.kuberpayss.in/transferMoney/singleTransfer",
        headers: ["Content-Type: application/json"],
        body: `{
  "appKey": "merchant@example.com",
  "amount": "500",
  "countryCode": "IND",
  "currencyCode": "INR",
  "transferMode": "NEFT",
  "orderId": "ORD984312",
  "contactNumber": "9876543210",
  "email": "merchant@example.com",
  "returnUrl": "https://merchant.com/callback",
  "beneficiaryName": "Ankita Sharma",
  "beneficiaryAccount": "622001234567",
  "beneficiaryIFSCCode": "ICIC0000104",
  "remark": "NEFT vendor payout"
}`,
      },
      {
        name: "RTGS Transfer",
        description: "Transfer high-value funds via RTGS.",
        method: "POST",
        url: "https://pg.kuberpayss.in/transferMoney/singleTransfer",
        headers: ["Content-Type: application/json"],
        body: `{
  "appKey": "merchant@bizbank.in",
  "amount": "200000",
  "countryCode": "IND",
  "currencyCode": "INR",
  "transferMode": "RTGS",
  "orderId": "ORD291183",
  "contactNumber": "9123456789",
  "email": "merchant@bizbank.in",
  "returnUrl": "https://merchant.com/payment/return",
  "beneficiaryName": "Raghav Pratap",
  "beneficiaryAccount": "547891234567",
  "beneficiaryIFSCCode": "SBIN0003201",
  "remark": "RTGS vendor settlement"
}`,
      },
      {
        name: "MOM Transfer",
        description: "Mobile money transfer (Uganda).",
        method: "POST",
        url: "https://pg.kuberpayss.in/transferMoney/singleTransfer",
        headers: ["Content-Type: application/json"],
        body: `{
  "appKey": "diana.k@mobilefinance.co.ug",
  "amount": "500",
  "countryCode": "UGA",
  "currencyCode": "UGX",
  "transferMode": "MOM",
  "orderId": "ORD541289",
  "contactNumber": "256771234567",
  "email": "diana.k@mobilefinance.co.ug",
  "returnUrl": "https://merchant.mobilefinance.co.ug/payment/callback",
  "beneficiaryName": "Joseph Okello",
  "remark": "MOMO disbursement"
}`,
      },
      {
        name: "EFT Transfer",
        description: "Electronic Funds Transfer in India.",
        method: "POST",
        url: "https://pg.kuberpayss.in/transferMoney/singleTransfer",
        headers: ["Content-Type: application/json"],
        body: `{
  "appKey": "ananya.verma@fincloud.in",
  "amount": "1200",
  "countryCode": "IND",
  "currencyCode": "INR",
  "transferMode": "EFT",
  "orderId": "ORD768239",
  "contactNumber": "9988776655",
  "email": "ananya.verma@fincloud.in",
  "returnUrl": "https://merchant.fincloud.in/payment/callback",
  "beneficiaryName": "Rohit Bansal",
  "beneficiaryAccount": "502000987654",
  "beneficiaryIFSCCode": "HDFC0000221",
  "remark": "Monthly freelance payout"
}`,
      },
      {
        name: "IFT Transfer",
        description: "Internal Fund Transfer within same bank.",
        method: "POST",
        url: "https://pg.kuberpayss.in/transferMoney/singleTransfer",
        headers: ["Content-Type: application/json"],
        body: `{
  "appKey": "deepak.singh@swifttech.in",
  "amount": "3000",
  "countryCode": "IND",
  "currencyCode": "INR",
  "transferMode": "IFT",
  "orderId": "ORD593184",
  "contactNumber": "9123456789",
  "email": "deepak.singh@swifttech.in",
  "returnUrl": "https://merchant.swifttech.in/payment/callback",
  "beneficiaryName": "Neha Kapoor",
  "beneficiaryAccount": "123456789012",
  "beneficiaryIFSCCode": "SBIN0000456",
  "remark": "Internal salary disbursement"
}`,
      },
    ],
  },
  {
    section: "Government Payments",
    apis: [
      {
        name: "URA Validation",
        description: "Validate URA tax reference.",
        method: "POST",
        url: "https://.../GovtPayment/ValidateRef",
        headers: [
          "Content-Type: application/json",
          "token: <your_token>",
          "client_id: <your_client_id>",
          "secret_key: <your_secret_key>",
        ],
        body: `{
  "transactionRef": "12YU07890",
  "timeStamp": "2025-05-14T12:34:56",
  "account": "2240015186239",
  "serviceProviderID": "URA"
}`,
      },
      {
        name: "URA Notify",
        description: "Notify URA about a payment.",
        method: "POST",
        url: "https://.../GovtPayment/NotifyRef",
        headers: [
          "Content-Type: application/json",
          "token: <your_token>",
          "client_id: <your_client_id>",
          "secret_key: <your_secret_key>",
        ],
        body: `{
  "appKey": "AppId",
  "transactionRef": "12YU07890",
  "ProccDate": "09072025",
  "account": "2240015186239",
  "serviceProviderID": "URA",
  "DrAccount": "50000012001",
  "RemitName": "TEST",
  "Amount": 1.00,
  "Mssdin": "256761958928",
  "Location": "Kampala"
}`,
      },
      {
        name: "NSSF Validation",
        description: "Validate NSSF reference.",
        method: "POST",
        url: "https://.../GovtPayment/ValidateRef",
        headers: ["Content-Type: application/json", "token", "client_id", "secret_key"],
        body: `{
  "transactionRef": "12YU07890",
  "timeStamp": "2025-05-14T12:34:56",
  "account": "2240015186239",
  "serviceProviderID": "NSSF"
}`,
      },
      {
        name: "NSSF Notify",
        description: "Notify NSSF about a payment.",
        method: "POST",
        url: "https://.../GovtPayment/NotifyRef",
        headers: ["Content-Type: application/json", "token", "client_id", "secret_key"],
        body: `{
  "appKey": "merchant@example.com",
  "transactionRef": "NSSF78906543",
  "ProccDate": "18072025",
  "account": "110022334455",
  "serviceProviderID": "NSSF",
  "DrAccount": "50000012002",
  "RemitName": "NSSF TEST",
  "Amount": 2450.75,
  "Mssdin": "256701234567",
  "Location": "Kampala"
}`,
      },
    ],
  },
  {
    section: "Utility Payments",
    apis: [
      {
        name: "UEDCL Prepaid Validation",
        description: "Validate prepaid electricity reference.",
        method: "POST",
        url: "https://.../Utility/ValidateRef",
        headers: ["Content-Type: application/json", "token", "client_id", "secret_key"],
        body: `{
  "appKey": "merchant@example.com",
  "transactionRef": "EP2039870686",
  "timeStamp": "2025-05-05T12:04:56",
  "account": "2240015186240",
  "serviceProviderID": "UEDCLPRE",
  "location": "Kampala"
}`,
      },
      {
        name: "UEDCL Postpaid Validation",
        description: "Validate postpaid electricity reference.",
        method: "POST",
        url: "https://.../Utility/ValidateRef",
        headers: ["Content-Type: application/json", "token", "client_id", "secret_key"],
        body: `{
  "appKey": "merchant@example.com",
  "transactionRef": "EP2039870686",
  "timeStamp": "2025-05-05T12:04:56",
  "account": "2240015186240",
  "serviceProviderID": "UEDCLPOS",
  "location": "Kampala"
}`,
      },
      {
        name: "NWSC Validation",
        description: "Validate water bill reference (Uganda).",
        method: "POST",
        url: "https://.../Utility/ValidateRef",
        headers: ["Content-Type: application/json", "token", "client_id", "secret_key"],
        body: `{
  "appKey": "merchant@example.com",
  "transactionRef": "EP2039870686",
  "timeStamp": "2025-05-14T12:04:56",
  "account": "2240015186240",
  "serviceProviderID": "NWSC",
  "location": "Jinja"
}`,
      },
      {
        name: "NWSC Notification",
        description: "Notify NWSC about water bill payment.",
        method: "POST",
        url: "https://.../Utility/NotifyRef",
        headers: ["Content-Type: application/json", "token", "client_id", "secret_key"],
        body: `{
  "transactionRef": "N1254567845",
  "ProccDate": "30052025",
  "account": "4121805",
  "Amount": 5300,
  "serviceProviderID": "NWSC",
  "DrAccount": "50201513002",
  "RemitName": "MASINDE YOKONANI",
  "Mssdin": "256761958928",
  "Location": "Jinja"
}`,
      },
    ],
  },
];


const MerchantIntegration = () => {
  const [selectedApi, setSelectedApi] = useState(apiDocs[0].apis[0]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="merchant-container">
      {/* Sidebar */}
      <aside className="merchant-sidebar">
        <h2 className="sidebar-title">Kuber Payss API Docs</h2>
        {apiDocs.map((section) => (
          <div key={section.section}>
            <h3 className="sidebar-section">{section.section}</h3>
            <ul>
              {section.apis.map((api) => (
                <li
                  key={api.name}
                  className={selectedApi.name === api.name ? "active" : ""}
                  onClick={() => setSelectedApi(api)}
                >
                  {api.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      {/* Content */}
      <main className="merchant-content">
        <div className="glass-card">
          <h2>{selectedApi.name}</h2>
          <p>{selectedApi.description}</p>

          <div className="endpoint">
            <span className="method">{selectedApi.method}</span>
            <span className="url">{selectedApi.url}</span>
          </div>

          <h4>Headers</h4>
          <pre className="code-block">
            {selectedApi.headers.join("\n")}
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(selectedApi.headers.join("\n"))}
            >
              Copy
            </button>
          </pre>

          <h4>Sample Body</h4>
          <pre className="code-block">
            {selectedApi.body}
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(selectedApi.body)}
            >
              Copy
            </button>
          </pre>
        </div>
      </main>
    </div>
  );
};

export default MerchantIntegration;
