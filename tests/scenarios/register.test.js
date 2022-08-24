import { assert } from 'chai';
import ReqresAPI from '../pages/reqres.api';
import * as data from '../data/user.data'

describe('As a guest, i want to register', () => {
    it('Should successfully register using valid account', async () =>{
        const response = await ReqresAPI.register(data.VALID_REGISTER);

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["id", "token"]);
        assert.isNumber(response.data.id);
        assert.isString(response.data.token);
    });
});