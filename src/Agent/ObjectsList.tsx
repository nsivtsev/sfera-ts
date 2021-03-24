import React, {ReactElement} from "react";
import LinesList from "./LinesList";
import {Object} from "./AgentIndex";

type ObjectListProps = {
    object: Object
}

export default function ObjectsList(props :ObjectListProps): ReactElement {
    return (
        <div className="flex flex-col mb-3 border-b-2 border-blue-200">
            <h1 className="text-2xl text-blue-400">
                {props.object.name}
            </h1>
            {props.object.lines.map((line) => {
                return <LinesList line={line} key={line.id} />
            })}
        </div>
    );
}
