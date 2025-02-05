// readonly
type User3 = {
    readonly age: number;
    bootcamp?: string;
}


function getAge(user: User3) {
    user.age = 34 //readonly
}

getAge({ age: 21, bootcamp: 'thsd24' })

//--------------------------

function getAge<T>(user: T) {
    // user.age = 34 //readonly

    return user
}

getAge<User3>({ age: 21, bootcamp: 'thsd24' })