export function manageFriends(state = { friends: [] }, action) {
  // your code here
  switch (action.type) {
    case "friends/add":
      return { friends: [...state.friends, action.payload] };
    case "friends/remove":
      const remainingFriends = state.friends.filter(
        (myFriend) => myFriend.id !== action.payload
      );
      return { friends: remainingFriends };
    default:
      return state;
  }
}
