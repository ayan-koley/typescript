interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchRequest = async() => {
    try {
        const resposne = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if(!resposne.ok) {
            throw new Error(`HTTP error of ${resposne.status}`)
        }
        const data: Todo = await resposne.json();
    } catch (error: any) {
        console.log(`fetch error of ${error.message}`);
    }
}

