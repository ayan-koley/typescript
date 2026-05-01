function login( user: { username: string, password: string, age?: number }): void {
    console.log(`${user.username} is login by ${user.password}`);
}

function searchPost(query: string = "tech posts"): string {
    return `Tech post are returning`;
}
