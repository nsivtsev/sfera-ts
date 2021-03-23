import React, {ReactElement} from "react";
import {ObjectLine} from "./AgentIndex";

type LinesListProps = {
    line: ObjectLine
}

export default function LinesList(props: LinesListProps): ReactElement {

    return (
        <div className="px-6 py-4 border-t border-gray-200">
            {props.line.name}
            <div className="flex">
                <div className="w-1/3 bg-white p-10 rounded-lg shadow-lg">
                    <h1 className="text-xl font-bold">Фото</h1>

                </div>
            </div>

        </div>
    );
}
