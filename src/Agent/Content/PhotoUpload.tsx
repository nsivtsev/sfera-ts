import React, {ReactElement, useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExclamationTriangle, faTrash} from "@fortawesome/free-solid-svg-icons";

interface VerifiedFile extends File {
    invalid: boolean,
    URL: string
}

export default function PhotoUpload(): ReactElement {

    const dragOver = (e: React.DragEvent) => {
        e.preventDefault();
    }

    const dragEnter = (e: React.DragEvent) => {
        setDragActive(true);
    }

    const dragLeave = (e: React.DragEvent) => {
        setDragActive(false)
    }

    const dragEnd = (e: React.DragEvent) => {
        e.preventDefault();
    }

    const fileDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragActive(false)
        const files = e.dataTransfer.files;
        if (files.length) {
            for(let i = 0; i < files.length; i++) {
                handleFile(files[i] as VerifiedFile);
            }
        }
    }

    const handleFile = (file: VerifiedFile) => {
        if (validateFile(file)) {
            file.URL = URL.createObjectURL(file);
            // add to an array so we can display the name of file
            setSelectedFiles(prevArray => [...prevArray, file]);
        } else {
            // add a new property called invalid
            file['invalid'] = true;
            // add to the same array so we can display the name of the file
            setSelectedFiles(prevArray => [...prevArray, file]);
            // set error message
            setErrorMessage('File type not permitted');
        }
    }

    const validateFile = (file: File) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }
        return true;
    }

    const removeFile = (name: string) => {
        // find the index of the item
        // remove the item from array

        const validFileIndex = validFiles.findIndex(e => e.name === name);
        validFiles.splice(validFileIndex, 1);
        // update validFiles array
        setValidFiles([...validFiles]);
        const selectedFileIndex = selectedFiles.findIndex(e => e.name === name);
        selectedFiles.splice(selectedFileIndex, 1);
        // update selectedFiles array
        setSelectedFiles([...selectedFiles]);
    }

    const fileSize = (size: number) => {
        if (size === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    const fileType = (fileName: string) => {
        return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
    }

    const [selectedFiles, setSelectedFiles] = useState<VerifiedFile[]>([]);
    const [validFiles, setValidFiles] = useState<VerifiedFile[]>([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [dragActive, setDragActive] = useState(false);

    useEffect(() => {
        let filteredArray = selectedFiles.reduce((file: VerifiedFile[], current) => {
            const x = file.find(item => item.name === current.name);
            if (!x) {
                return file.concat([current]);
            } else {
                return file;
            }
        }, []);
        setValidFiles([...filteredArray]);

    }, [selectedFiles]);

    let classes = "flex flex-nowrap overflow-x-scroll ";
    classes = dragActive ? classes + '' : classes

    return (
        <div
            className="flex flex-nowrap overflow-x-scroll relative"
            onDragEnter={dragEnter}
        >
            {dragActive ?
                <div
                    className="absolute bg-gray-500 left-0 top-0 w-full h-full bg-gray-400 bg-opacity-80 rounded-xl border-4 border-dashed flex flex-wrap content-center"
                    onDragOver={dragOver}
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDragEnd={dragEnd}
                    onDrop={fileDrop}
                >
                    <div className="font-black text-white text-3xl m-auto tracking-widest">
                        Перетащите файлы сюда
                    </div>
                </div>
                : ""
            }

            {
                validFiles.map((data: VerifiedFile, i) =>
                    <div className="file-status-bar" key={i}>
                        {!data.invalid ?
                            <div className="h-36 w-48 rounded-lg mr-2 bg-cover bg-center" style={{ backgroundImage: `url(${data.URL})` }}>
                            </div>
                            :
                            <div className="h-36 w-48 flex border-4 border-gray-100 flex-wrap content-center p-2 text-center bg-gray-100 rounded-xl mr-2 overflow-hidden">
                                <div className="text-gray-500 m-auto text-2xl w-full">
                                    <FontAwesomeIcon icon={faExclamationTriangle} />
                                </div>
                                <div className="text-gray-500 m-auto text-sm whitespace-nowrap">
                                    {data.name}
                                </div>
                                <div className="text-gray-500 m-auto text-sm">
                                    Неверный формат файла
                                </div>
                            </div>
                        }
                        <div className="flex flex-wrap justify-end p-2">
                            <FontAwesomeIcon
                                icon={faTrash}
                                className="text-gray-500 hover:text-gray-700"
                                onClick={() => removeFile(data.name)}
                            />
                        </div>
                    </div>
                )
            }
            <div
                className="border-dashed border-4 rounded-lg text-center h-36 w-48 flex flex-wrap content-center"
            >

                { validFiles.length ?
                    <div className="text-gray-500 m-auto">
                        Добавить фото
                    </div>
                    :
                    <div className="text-gray-500 m-auto">
                        Нет фото
                    </div>
                }
            </div>
        </div>
    );
}
