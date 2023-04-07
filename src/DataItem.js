import { useState } from "react";
import UpdateComponent from "./UpdateComponent";

function DataItem({ val, deleteEntry, data, set_data, set_query }) {
    const [upd, set_upd] = useState(false);
    return (
        <tr>
            <td> {val.name} </td>
            <td> {val.phone} </td>
            <td>
                <button className="delete" onClick={() => {
                    deleteEntry(val.phone);
                }}> Delete </button>
                <button className="edit" onClick={() => {
                    set_upd(val => !val);
                }}> Edit </button>
                {upd === true && <UpdateComponent data={data} set_data={set_data} set_upd={set_upd} phone={val.phone} set_query={set_query}/>}
            </td>
        </tr>
    );
}

export default DataItem;