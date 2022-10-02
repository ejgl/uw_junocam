export async function query(input) {
    //need to pass in input variable into Flask server
    console.log(typeof input)
    const response = await fetch('/query', {
        method:"POST",
        credentials:"include",
        body: JSON.stringify(input),
        cache: "no-cache",
        headers: new Headers({
            "content-type": "application/json"
        })
    })

    const data = await response.json()

    return data
}

export async function process(input) {
    //need to pass in input variable into Flask server
    console.log(typeof input)
    const response = await fetch('/process', {
        method:"POST",
        credentials:"include",
        body: JSON.stringify(input),
        cache: "no-cache",
        headers: new Headers({
            "content-type": "application/json"
        })
    })

    const data = await response.json()

    return data
}