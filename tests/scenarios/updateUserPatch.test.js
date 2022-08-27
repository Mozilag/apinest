import { assert } from 'chai';
import ReqresAPI from '../pages/reqres.api';
import * as data from '../data/user.data'

describe('As a guest, i want to update using PATCH', () => {
    it('Should successfully update account', async () =>{
        const response = await ReqresAPI.updateUserPatch(data.VALID_UPDATE);

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["name", "job", "updatedAt"]);
        assert.isString(response.data.name);
        assert.isString(response.data.job);
        assert.isString(response.data.updatedAt)
    });
});