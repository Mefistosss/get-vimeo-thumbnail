import enableFetchMocks from 'jest-fetch-mock';
import getVomeoThumbnail from '../src/index';

const TEST_SRC = 'https://vimeo.com/446416103';

enableFetchMocks.enableMocks();

test('My Greeter', () => {
    getVomeoThumbnail(TEST_SRC)
        .then((data) => {
            console.log(data);
            expect('Hello').toBe('Hello');
        });
});
