export class Http {

    static headers = {'Content-Type': 'application/json'};

    static async get(url) {
        try {
            return await request(url)
        } catch (e) {
            console.log(e);
            throw error();
        }
    }

    static async post(url, data = {}) {
        try {
            return await request(url, 'POST', data)
        } catch (e) {
            console.log(e);
            throw error();
        }
    }

    static async delete(url) {
        try {
            return await request(url, 'DELETE')
        } catch (e) {
            console.log(e);
            throw error();
        }
    }

    static async patch(url, data = {}) {
        try {
            return await request(url, 'PATCH', data)
        } catch (e) {
            console.log(e);
            throw error();
        }
    }
}

async function request(url, method = 'GET', data) {

    const config = {
        method,
        headers: Http.headers,
    };
    if (method === 'POST' || method === 'PATCH') {
        config.body = JSON.stringify(data)
    }
    const response = await fetch(url, config);
    return await response.json();
}