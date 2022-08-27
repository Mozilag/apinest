import BaseAPI from "./base.api";

const ReqresAPI = {
    register:(data) => BaseAPI.post('/register', data),
    updateUser:(data) => BaseAPI.put('/users/2', data),
    updateUserPatch:(data) => BaseAPI.patch('/users/2', data),
    listUser:(data) => BaseAPI.get('/users?page=2', data),
    deleteUser:(data) => BaseAPI.delete('/users/2', data)
}

export default ReqresAPI;