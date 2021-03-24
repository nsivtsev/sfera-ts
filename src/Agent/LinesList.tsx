import React, {ReactElement} from "react";
import {ObjectLine} from "./AgentIndex";
import Photo from "./Content/Photo";

type LinesListProps = {
    line: ObjectLine
}

export default function LinesList(props: LinesListProps): ReactElement {
    return (
        <div className="px-6 py-4">
            <h2 className="text-xl">{props.line.name}</h2>
            <Photo />
        </div>
    );
}
