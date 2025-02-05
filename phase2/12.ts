let tempObj = {
    name: "john",
    getName: (name: string) => {
        return name
    }
}

type TempObj = {
    name: string,
    getName: (name: string) => string
}


function random(object: TempObj): boolean {

    return false

}

random(tempObj)

