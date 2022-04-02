# Get vimeo video data

This module is using `Promise` and `fetch` so add polyfills if you need
# usage
```
import getVomeoThumbnail from 'get-vimeo-thumbnail';

const url = 'https://vimeo.com/...'; // video url
getVomeoThumbnail(url).then((thumbnails) => {
    /*
        thumbnails = [
            'small thumbnail',
            'medium thumbnail'
            'large thumbnail'
        ]
    */
})
```
Returns a promise which resolves to the array with thumbnails, or rejects with err if any occurred.

# additional methods
```
import { getVimeoId, getVomeoData } from 'get-vimeo-thumbnail';

const url = 'https://vimeo.com/...'; // video url

const videoId = getVimeoId(url);
getVomeoData(url).then((data) => {});
```

`videoId` returns vimeo video id from url.

`getVomeoData` Returns a promise which resolves to the array with json data, or rejects with err if any occurred.

For exanple:
```
    [
      {
        id: ...,
        title: '...',
        description: '...',
        url: '...',
        upload_date: '...',
        thumbnail_small: '...',
        thumbnail_medium: '...',
        thumbnail_large: '...',
        user_id: ...,
        user_name: '...',
        user_url: '...',
        user_portrait_small: '...',
        user_portrait_medium: '...',
        user_portrait_large: '...',
        user_portrait_huge: '...',
        stats_number_of_likes: ...,
        stats_number_of_plays: ...,
        stats_number_of_comments: ...,
        duration: ...,
        width: ...,
        height: ...,
        tags: '...',
        embed_privacy: '...'
      }
    ]
```