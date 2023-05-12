// import { UserModel } from '../../models';
// import { USER_PROFILE_FIXTURE } from '../../testing';
// import { UserState } from '../reducers/user.reducer';
// import * as fromUserSelectors from './user.selectors';
//
// describe('User Selectors', () => {
//
//   const state: UserState = {
//     ids: [
//       '12345',
//     ],
//     entities: {
//       '12345': USER_PROFILE_FIXTURE,
//     },
//     selectedUserId: '12345',
//     roles: ['superAdmin'],
//     accRoles: [],
//   };
//
//   it('should select user entities', () => {
//
//     expect(fromUserSelectors.selectUserEntities.projector(state))
//       .toEqual(state.entities);
//
//   });
//
//   it('should select current user id', () => {
//
//     expect(fromUserSelectors.selectCurrentUserId.projector(state))
//       .toEqual('12345');
//
//   });
//
//   it('should select current user roles', () => {
//
//     expect(fromUserSelectors.selectCurrentUserRoles.projector(state))
//       .toEqual(['superAdmin']);
//
//   });
//
//   it('should select current user', () => {
//
//     expect(fromUserSelectors.selectCurrentUser.projector(state.selectedUserId, state.entities))
//       .toEqual(new UserModel(USER_PROFILE_FIXTURE));
//
//   });
//
// });
