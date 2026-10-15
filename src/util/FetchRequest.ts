export default async function FetchRequest(url:string, method:string, data = {}) : Promise<any> {
    
    let request: RequestInit;

    if(method === "GET" || method === "HEAD"){
        request = {
            method: method,
            headers: { 'Content-Type': 'application/json' }
        };
    }else{
        request = {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
    }
    
    

    const response = await fetch(url, request);

    console.log(response);

    if(!response.ok){
        const error = new Error(`HTTP ${response.status}: ${response.statusText}`);
        throw error;
    }

    if(response.status === 204){
        return null;
    }

    return response;
};