import { useState, useEffect } from "react";
import DataItem from "./DataItem";

function DisplayDetails({ data, set_data }) {
    const [searchData, set_searchData] = useState([]);
    const [query, set_query] = useState("");

    useEffect(() => {
        set_searchData((data.filter(val => {
            if (val.name.toLowerCase().includes(query.toLowerCase()) || val.phone.includes(query)) {
                return val;
            }
        })));
    }, [query]);

    const deleteEntry = (phone) => {
        console.log(phone);
        set_data(data => data.filter((val) => {
            return val.phone !== phone;
        }));
        set_query("");
    }
    return (
        <div className="display">
            {data.length > 0 && (<div className="search">
                <h2> Filter Results on the basis of Name and Phone </h2>
                <input placeholder="Enter name or phone number" value={query} className="searchbar" onChange={(e) => {
                    set_query(e.target.value);
                }} />
            </div>)}
            {query !== "" && searchData.length > 0 && <table>
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Phone </th>
                        <th> Options </th>
                    </tr>
                </thead>
                <tbody>
                    {searchData.map((val) => {
                        return (
                            <DataItem val={val} deleteEntry={deleteEntry} data={data} set_data={set_data} set_query={set_query} />
                        );
                    })}
                </tbody>
            </table>}
            {data.length > 0 && query === "" && <table>
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Phone </th>
                        <th> Options </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((val) => {
                        return (
                            <DataItem val={val} deleteEntry={deleteEntry} data={data} set_data={set_data} set_query={set_query} />
                        );
                    })}
                </tbody>
            </table>}
        </div>
    );
}

export default DisplayDetails;