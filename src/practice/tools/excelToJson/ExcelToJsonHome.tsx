import { useState } from 'react'
import { read, utils } from "xlsx";

const ExcelToJsonHome = () => {

    const [selectedFile, setSelectedFile] = useState<File>();
    const [json, setJson] = useState<string>('');

    function generateJSON() {
        if (selectedFile) {
            const fileReader = new FileReader();
            fileReader.readAsBinaryString(selectedFile);
            fileReader.onload = (e) => {
                let data;
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

            }
        }
        {
        }
    }
    return (
        <div className="flex flex-col items-center h-screen w-full mt-12">
            <h1 className='font-bold'> EXCEL to JSON Converter!</h1>
            <div className="flex flex-col gap-3">
                <input type={"file"} accept={".xls, xlsx"} onChange={(event) => {

                    const file = event.currentTarget.files;

                    if (file) {
                        setSelectedFile(file[0]);
                    }
                }} />
                <button className={"p-2 bg-yellow-200"} type="submit" onClick={() => generateJSON()}> Upload!</button>

                {
                    json
                    // json.length
                    //     ?
                    //     JSON.parse(json)
                    //         .map((js: any) => {
                    //             console.log(js.boat_name);
                    //             return (<div>
                    //                 <p>{js.boat_name}</p>
                    //             </div>)
                    //         }) : 'not available yet!'
                }

            </div>
        </div >
    )
}

export default ExcelToJsonHome;