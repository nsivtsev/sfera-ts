import React, {ReactElement} from "react";
import LinesList from "./LinesList";
import {Object} from "./AgentIndex";

type ObjectListProps = {
    object: Object
}

export default function ObjectsList(props :ObjectListProps): ReactElement {
    return (
        <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden mb-3">
            <div className="bg-gray-200 text-lg px-6 py-4 font-black">
                <img src={process.env.REACT_APP_BASE_URL + props.object.image.tmb}/>
                {props.object.name}
            </div>
            {props.object.lines.map((line) => {
                return <LinesList line={line} />
            })}
        </div>
    );
}
