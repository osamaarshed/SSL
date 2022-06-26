import React from "react";
import "./Prices.css";
import { FcCheckmark } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";

function Prices() {
  return (
    <>
      <div className="prices-heading-container">
        <h1 className="prices-heading">Packages and Prices</h1>
      </div>
      <div className="container price-box-container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="prices-custom-border">
              <div className="prices-custom-block">Custom</div>
              <div className="prices-custom-headings">
                <div className="prices-getaquote">Get a Quote</div>
                <div className="prices-below">According to your plan</div>
              </div>
              <div className="prices-tickcross">
                <FcCheckmark />
                No Forced Dispatch <br />
                <FcCheckmark />
                Payload & FSC = 100% Yours <br />
                <FcCheckmark />
                We Negotiate Top Paying Rates <br />
                <FcCheckmark />
                Setup Paperwork <br />
                <FcCheckmark />
                Fax/Email Documents Limited <br />
                <div className="prices-cancel-background">
                  <FcCancel />
                  Credit Checks Limited <br />
                  <FcCancel />
                  Personal Dispatcher <br />
                  <FcCancel />
                  Request Quick Pay <br />
                  <FcCancel />
                  Request Fuel Advances <br />
                  <FcCancel />
                  24/7 Dispatch Support <br />
                  <FcCancel />
                  Request Insurance Certificate <br />
                  <FcCancel />
                  Driver Director Assistance <br />
                  <FcCancel />
                  Negotiate Quick Pay Rates <br />
                  <FcCancel />
                  Factor Setup Assistance <br />
                  <FcCancel />
                  Collection Assistance <br />
                  <FcCancel />
                  Detention Charges Assistance <br />
                  <FcCancel />
                  Unused Truck Order Assistance <br />
                </div>
              </div>
              <div className="prices-custom-block-choose">Choose</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="prices-silver-border">
              <div className="prices-silver-block">Silver</div>
              <div className="prices-custom-headings">
                <div className="prices-silver-getaquote">$249.99</div>
                <div className="prices-below">per week per truck</div>
              </div>
              <div className="prices-tickcross">
                <FcCheckmark />
                No Forced Dispatch <br />
                <FcCheckmark />
                Payload & FSC = 100% Yours <br />
                <FcCheckmark />
                We Negotiate Top Paying Rates <br />
                <FcCheckmark />
                Setup Paperwork <br />
                <FcCheckmark />
                Fax/Email Documents Limited <br />
                <FcCheckmark />
                Credit Checks Limited <br />
                <FcCheckmark />
                Personal Dispatcher <br />
                <FcCheckmark />
                Request Quick Pay <br />
                <FcCheckmark />
                Request Fuel Advances <br />
                <FcCheckmark />
                24/7 Dispatch Support <br />
                <div className="prices-cancel-background">
                  <FcCancel />
                  Request Insurance Certificate <br />
                  <FcCancel />
                  Driver Director Assistance <br />
                  <FcCancel />
                  Negotiate Quick Pay Rates <br />
                  <FcCancel />
                  Factor Setup Assistance <br />
                  <FcCancel />
                  Collection Assistance <br />
                  <FcCancel />
                  Detention Charges Assistance <br />
                  <FcCancel />
                  Unused Truck Order Assistance <br />
                </div>
              </div>
              <div className="prices-silver-block-choose">Choose</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div className="prices-gold-border">
              <div className="prices-gold-block">Gold</div>
              <div className="prices-custom-headings">
                <div className="prices-gold-getaquote">$299.99</div>
                <div className="prices-below">per week per truck</div>
              </div>
              <div className="prices-tickcross">
                <FcCheckmark />
                No Forced Dispatch <br />
                <FcCheckmark />
                Payload & FSC = 100% Yours <br />
                <FcCheckmark />
                We Negotiate Top Paying Rates <br />
                <FcCheckmark />
                Setup Paperwork <br />
                <FcCheckmark />
                Fax/Email Documents Limited <br />
                <FcCheckmark />
                Credit Checks Limited <br />
                <FcCheckmark />
                Personal Dispatcher <br />
                <FcCheckmark />
                Request Quick Pay <br />
                <FcCheckmark />
                Request Fuel Advances <br />
                <FcCheckmark />
                24/7 Dispatch Support <br />
                <FcCheckmark />
                Request Insurance Certificate <br />
                <FcCheckmark />
                Driver Director Assistance <br />
                <FcCheckmark />
                Negotiate Quick Pay Rates <br />
                <FcCheckmark />
                Factor Setup Assistance <br />
                <FcCheckmark />
                Collection Assistance <br />
                <FcCheckmark />
                Detention Charges Assistance <br />
                <FcCheckmark />
                Unused Truck Order Assistance <br />
              </div>
              <div className="prices-gold-block-choose">Choose</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prices;
