import { useState } from "react";

function UpdateComponent({ data, set_data, set_upd, phone, set_query }) {
    const [newEntry, set_newEntry] = useState({
        name: "",
        phone: ""
    })
    const updateEntry = () => {
        if (newEntry.phone === "" && newEntry.name === "") {
            alert("Please fill atleast one value to update the record.");
            return;
        }
            var value = data.find((val) => {
                return (val.phone === newEntry.phone);
            });
            if (newEntry.name !== "" && newEntry.phone !== "" && value === undefined) {
                set_data(data => (data.map((val) => (val.phone === phone ? { ...val, name: newEntry.name, phone: newEntry.phone } : val))));
            }
            else if (newEntry.name === "" && value === undefined) {
                set_data(data => (data.map((val) => (val.phone === phone ? { ...val, phone: newEntry.phone } : val))));
            }
            else if (newEntry.phone === "") {
                set_data(data => (data.map((val) => (val.phone === phone ? { ...val, name: newEntry.name } : val))));
            }
            set_upd(val => !val);
            set_newEntry({
                name: "",
                phone: ""
            });
            set_query("");
    }
    return (
        <div className="update">
            <label> New Name </label>
            <input placeholder="Enter Name" value={newEntry.name} onChange={(e) => {
                set_newEntry(newEntry => ({
                    ...newEntry,
                    name: e.target.value
                }));
            }} />
            <label> New Phone </label>
            <input placeholder="Enter Phone" type="number" value={newEntry.phone} onChange={(e) => {
                set_newEntry(newEntry => ({
                    ...newEntry,
                    phone: e.target.value
                }));
            }} />
            <button className="updatebut" onClick={updateEntry}> Update </button>
        </div>
    );
}
export default UpdateComponent;