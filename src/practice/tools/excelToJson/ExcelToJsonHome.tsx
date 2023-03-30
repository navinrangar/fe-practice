import React, { MouseEvent, useState } from 'react'
import { read, utils, writeFileXLSX } from "xlsx";

const ExcelToJsonHome = () => {

    const [selectedFile, setSelectedFile] = useState<File>();
    const [json, setJson] = useState<string>('');

    function generateJSON() {
        if (selectedFile) {
            const fileReader = new FileReader();
            fileReader.readAsBinaryString(selectedFile);
            fileReader.onload = (e) => {
                let data;
                console.log('clicked');
                if (e.target?.result) {
                    data = e.target.result;
                }

                const workbook = read(data, {
                    type: "binary"
                })

                workbook.SheetNames.forEach(sheet => {
                    let rowObject = utils.sheet_to_json(
                        workbook.Sheets[sheet]
                    );
                    let jsonObject = JSON.stringify(rowObject);
                    setJson(jsonObject);
                });

                if (json)
                    console.log(JSON.parse(json));

            }
        }
    }
    return (
        <div className="flex  flex-end justify-center h-screen w-full mt-12">
            <div className="flex flex-col gap-3">
                <input type={"file"} accept={".xls, xlsx"} onChange={(event) => {

                    const file = event.currentTarget.files;

                    if (file) {
                        setSelectedFile(file[0]);
                    }
                }} />
                <button className={"p-2 bg-yellow-200"} type="submit" onClick={() => generateJSON()}> Upload!</button>
                {json ?? JSON.parse(json[0]).map((js: any[]) => {
                    console.log('js', js);
                    js.map((oneToHundred) => {
                        oneToHundred.map((element: {boat_name: string}) => {
                            <p className = 'bg-gray-400 p-10 py-5' > { element.boat_name } </p>
                        })
                    })
                       
                })}
        </div>
        </div >
    )
}

export default ExcelToJsonHome;