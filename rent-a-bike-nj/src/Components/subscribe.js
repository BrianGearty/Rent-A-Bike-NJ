import React from "react";
import "../style/subscribe.css";
import Social from "../Components/social";



function Subscribe() {

    return (
        <div className="flex-container">
            
                <div className=" subscribe text-center">
                    <h1 className="signUp">Sign up for our newsletter</h1>
                    <h5>Recieve special offers and first look at new products.</h5>
                    <div className="form-group pt-2 mx-auto">
                        <input type="text" className="form-control email-window" placeholder="Enter email" name="email" />
                        <span className="form-group mx-auto">
                            <button type="submit" className="formSubmit btn">Subscribe</button>
                        </span>
                    </div>
                </div>
            <div className="socialDiv">
            <Social />
            </div>
        </div>
        
    )

}

export default Subscribe