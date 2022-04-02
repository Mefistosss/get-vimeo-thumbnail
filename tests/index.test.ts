import 'whatwg-fetch';
import getVomeoThumbnail from '../src/index';

const TEST_SRC = 'https://vimeo.com/446416103';

test('Get vimeo thumbnails', (done) => {
    getVomeoThumbnail(TEST_SRC)
        .then((data) => {
            expect(data[0]).not.toBeUndefined()
            expect(data[1]).not.toBeUndefined()
            expect(data[2]).not.toBeUndefined()
            done();
        })
        .catch(done);
});
