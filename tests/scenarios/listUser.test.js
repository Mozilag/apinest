import { assert } from 'chai';
import ReqresAPI from '../pages/reqres.api';


describe('As a admin, i want to see list user', () => {
    it('Should successfully see list of user', async () =>{
        const response = await ReqresAPI.listUser();

        assert.equal(response.status, 200);
        //assert.containsAllKeys(response.data, ["page", "per_page", "total", "total_page"]);
        //assert.isNumber(response.data.page);
        //assert.isNumber(response.data.per_page);
        //assert.isNumber(response.data.total);
        //assert.isNumber(response.data.total_page);
    });
});