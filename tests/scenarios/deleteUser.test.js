import { assert } from 'chai';
import ReqresAPI from '../pages/reqres.api';

describe('As a admin, i want to delete user', () => {
    it('Should successfully delete user', async () =>{
        const response = await ReqresAPI.deleteUser();

        assert.equal(response.status, 204);
    });
});