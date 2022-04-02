
const getVimeoId = (url: String) => {
    let result = url.match(/(?:https?:\/\/)?(?:www.)?(?:player.)?vimeo.com\/(?:[a-z]*\/)*([0-9]{6,11})[?]?.*/);

    if (result) {
        return result[1];
    }

    return null;
};

const getByFetch = (url: RequestInfo, options?: object) => {
    return fetch(url, options)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            }

            throw { status: response.status, data: response };
        });
};

const getVomeoData = (url: String, options?: object) => {
    return new Promise((resolve: (value: any) => void, reject) => {
        const id = getVimeoId(url);
        if (id) {
            getByFetch(`https://vimeo.com/api/v2/video/${id}.json`, options).then(resolve).catch(reject);
        } else {
            reject(new Error('get-vimeo-thumbnail: Url is wrong.'));
        }
    });
};

const getVomeoThumbnail = (url: String, options?: object) => {
    return new Promise((resolve: (value: string[]) => void, reject) => {
        getVomeoData(url, options)
            .then(data => resolve([data[0]?.thumbnail_small, data[0]?.thumbnail_medium, data[0]?.thumbnail_large]))
            .catch(reject);
    });
};

export { getVimeoId, getVomeoData, getVomeoThumbnail };
export default getVomeoThumbnail;
