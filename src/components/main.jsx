import axios from "axios";
import { useState } from "react";
import { options } from "../services/service.api";

export const Main = () => {
    const [data, setData] = useState("");

    const dataFunc = async () => {
        const { dataBase } = await options.get();
        setData(dataBase);
        console.log(dataBase);
    };
    return (
        <div>
            <table className="table table-dark table-striped my-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
