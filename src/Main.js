import { useEffect, useRef, useState } from "react";
import AddContact from "./AddContact";
import DisplayDetails from "./DisplayDetails";

function Main() {
    const [data, set_data] = useState([]);
    const isMounted = useRef(false);

    useEffect(() => {
        if(JSON.parse(localStorage.getItem('data')) !== null){
            set_data(JSON.parse(localStorage.getItem('data')));
        }
    }, []);

    useEffect(() => {
        if(isMounted.current){
            localStorage.setItem('data', JSON.stringify(data));
        }
        else {
            isMounted.current = true;
        }
    }, [data]);
    return (
        <div className="main">
            <h2> Address Book Manager </h2>
            <AddContact data={data} set_data={set_data}/>
            <DisplayDetails data={data} set_data={set_data} />
        </div>
    );
}

export default Main;