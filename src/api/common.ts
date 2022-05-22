
export async function getJson(
    baseUrl: string,
    queryParameters: object = {},
    timeoutMillseconds: number = 6000,
    signal: AbortSignal | null) {
    const url = new URL(baseUrl);
    const searchParams = new URLSearchParams();
    for (let [key, value] of Object.entries(queryParameters)) {
        searchParams.append(key, value.toString());
    }
    if (Array.from(searchParams.entries()).length != 0) {
        url.search = searchParams.toString();
    }
    const rawResponse = fetch(url.toString(), {
        signal,
        headers: {
            Accept: 'application/json'
        }
    });
    const response = await timeout(timeoutMillseconds, rawResponse);
    return response.json();
}


function timeout<T>(millseconds: number, promise: Promise<T>): Promise<T> {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject(new Error(
                `A request did not finish within the specified timeout of ${millseconds} milliseconds.`))
        }, millseconds);
        promise.then(resolve, reject);
    });
}
