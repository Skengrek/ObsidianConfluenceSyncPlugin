import { Notice } from 'obsidian';

export function createNotice(str: string) {
    new Notice(str);
}

export function testAPI(authString: string, domain: string) {
    const headers = new Headers()
    headers.set('Content-Type', 'application/json')
    headers.set('Accept', 'application/json')
    headers.set('Authorization', authString)
    
    const request: RequestInfo = new Request(domain, {
        method: 'GET',
        headers: headers
      })

    const res = fetch(request)
    createNotice(res)
}

