
const getVimeoId = (url: String) => {
    let result = url.match(/(?:https?:\/\/)?(?:www.)?(?:player.)?vimeo.com\/(?:[a-z]*\/)*([0-9]{6,11})[?]?.*/);

    if (result) {
        return result[1];
    }

    return null;
};

// const getByFetch = (url: RequestInfo) => {
//     return fetch(url, {
//             // method: 'GET',
//             headers: { 'User-Agent': 'ANYTHING_WILL_WORK_HERE' }
//             // headers: { 'Content-Type': 'application/json;charset=utf-8' }
//         })
//         .then((response) => {
//             // console.log(response);
            
//             if (response.status === 200) {
//                 // console.log(response.json());
//                 return response.json();
//             }

//             // throw { status: response.status, data: response };
//         });
// };

const getByFetch = (url: string) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();

        xhttp.open('GET', url, true);

        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    try {
                        const result = JSON.parse(xhttp.responseText)[0];
                        resolve(result);
                    } catch (e) {
                        reject(null);
                    }
                }
            }
        };

        xhttp.send();
    });
};

const getVomeoThumbnail = (url: String) => {
    return new Promise((resolve, reject) => {
        const id = getVimeoId(url);
        if (id) {
            getByFetch(`https://vimeo.com/api/v2/video/${id}.json`)
                .then((data) => {
                    console.log(data);
                    
                    resolve(data);
                })
                .catch(reject);
        } else {
            reject(new Error('get-vimeo-thumbnail: Url is wrong.'));
        }
    });
};

export { getVimeoId, getVomeoThumbnail };
export default getVomeoThumbnail;


