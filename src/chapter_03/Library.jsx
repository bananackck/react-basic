import React from "react";
import Book from "./Book";

function Library(props){
    return (
        <div>
            <Book name="이 집의" numOfPage={300}/>
            <Book name="주인은" numOfPage={200}/>
            <Book name="나다" numOfPage={100}/>
        </div>
    );
}

export default Library;