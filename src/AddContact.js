import { useState } from "react";

function AddContact({ data, set_data }) {
    const [userDetails, set_userDetails] = useState({
        name: "",
        phone: ""
    });
    
    const addDetails = () => {
        const value = data.find((val) => {
            return (val.phone === userDetails.phone);
        });

        if(value === undefined){
            if(userDetails.phone.length > 3){
                set_data(data => ([...data, userDetails]));
                set_userDetails({
                    name: "",
                    phone: ""
                });
                alert("Record inserted successfully.");
            }
            else {
                alert("Please enter correct phone number.");
            }
        }
        else {
            alert("Record already exists.");
        }
    }

    return (
        <div className="add">
            <h2> Add Contact </h2>
            <label> Name </label>
            <input placeholder="Enter Name" value={userDetails.name} onChange={(e) => {
                set_userDetails(userDetails => ({
                    ...userDetails,
                    name: e.target.value
                }));
            }}/>
            <label> Phone </label>
            <input type="number" placeholder="Enter Phone Number" value={userDetails.phone} onChange={(e) => {
                set_userDetails(userDetails => ({
                    ...userDetails,
                    phone: e.target.value
                }));
            }}/>
            <button className="addbut" onClick={addDetails}> Add </button>
        </div>
    );
}

export default AddContact;