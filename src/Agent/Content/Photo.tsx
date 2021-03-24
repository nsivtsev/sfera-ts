import React, {ReactElement} from "react";
import PhotoUpload from "./PhotoUpload";

export default function Photo(): ReactElement {

    return (
        <div className="py-4">
            <div className="flex flex-wrap mb-2 content-center">
                <div className="mr-2.5 align-middle">
                    Фото
                </div>
            </div>
            <PhotoUpload />

        </div>
    );
}
