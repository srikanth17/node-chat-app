const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    let users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Sri',
            room: 'Test room 1'
        }, {
            id: '2',
            name: 'Srik',
            room: 'Test room 2'
        }, {
            id: '3',
            name: 'Srikanth',
            room: 'Test room 1'
        }];
    });

    it('should add new user', () => {
        let users = new Users();
        let user = {
            id: '123',
            name: 'Sri',
            room: 'The room'
        };
        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        let user = users.removeUser('3');

        expect(user.id).toBe('3');
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        let user = users.removeUser(4);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        let resUser = users.getUser(users.users[0].id);
        expect(resUser.id).toBe(users.users[0].id);
    });

    it('should not find a user', () => {
        let resUser = users.getUser(4);
        expect(resUser).toBeFalsy();
    });

    it('should return names for Test room 1', () => {
        let userList = users.getUserList('Test room 1');

        expect(userList).toEqual(['Sri', 'Srikanth']);
    });

    it('should return names for Test room 2', () => {
        let userList = users.getUserList('Test room 2');

        expect(userList).toEqual(['Srik']);
    });
});