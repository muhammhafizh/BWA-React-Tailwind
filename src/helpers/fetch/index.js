export default async function fetchData({
    url, 
    method = 'GET', 
    host = process.env.REACT_APP_API_HOST
}) {
    const response = await fetch(`${host}${url}`, {
        method,
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const jsonResponse = await response.json()
    if (response.ok)
        return jsonResponse
    throw new Error(JSON.stringify(jsonResponse))
}