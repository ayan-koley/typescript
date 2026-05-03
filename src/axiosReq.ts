import axios from "axios";
import type { AxiosResponse } from "axios";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchRequest = async() => {
    try {
        const resposne: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log(resposne.data);
    } catch (error: any) {
        if(axios.isAxiosError(error)) {
            console.log("Axios error: ", error.message);
        }
    }
}

