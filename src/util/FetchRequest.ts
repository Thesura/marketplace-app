export default async function FetchRequest(url:string, method:string, data = {}) : Promise<any> {
    
    let request: RequestInit;

    if(method === "GET" || method === "HEAD"){
        request = {
            method: method,
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                        'Accept-Language': 'en-US,en;q=0.9', 
                    }
        };
    }else{
        request = {
            method: method,
            headers: {  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                        'Accept-Language': 'en-US,en;q=0.9',
                    },
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