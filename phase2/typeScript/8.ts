// Optional
type User2 = {
    age: number;
    bootcamp?: string;
}


function getAge(user: User2): number {
    return user.age
}

const divya = {
    age: 24,
    // bootcamp: "thsd24"
}

getAge(divya)