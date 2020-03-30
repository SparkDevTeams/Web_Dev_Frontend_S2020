import produce from "immer";

// challenges: [
//     {
//         _id: "",
//         creatorId: "",
//         createdAt: null,
//         updatedAt: null,
//         attempt_count: 0,
//         complete_count: 0,
//         reported: false,
//         rank: 0,
//         title: "",
//         description: "",
//         averageRating: 0,
//     }
// ]

export const initialState = {
  challenges: [],
  challengesOfInterest: [],
  error: ""
};

export const challengeReducer = (state, action) => {
  switch (action.type) {
    case "deleteChallenge":
      return produce(state, draft => {
        // {
        //     type: "deleteChallenge",
        //     payload: {
        //         id: "slkdf1231"
        //     }
        // }
        draft.challenges = draft.challenges.filter(
          challenge => challenge._id !== action.payload.id
        );
      });
    case "getChallenges":
      return produce(state, draft => {
        draft.challenges = action.payload.challenges;
      });
    case "addChallenge":
      return produce(state, draft => {
        // {
        //     type: "addChallenge",
        //     payload: {
        //         challenge: {...}
        //     }
        // }
        draft.challenges.push(action.payload.challenge);
      });
    case "queryChallenges":
      return produce(state, draft => {
        // query is the value to search or filter the challenges by
        // {
        //     id: "queryChallenge",
        //     payload: {
        //         query: "growth"
        //     }
        // }
        draft.challengesOfInterest = draft.challenges.filter(challenge =>
          challenge.description.includes(action.payload.query)
        );
      });

    case "updateChallenges":
      return produce(state, draft => {
        // {
        // response from backend
        //     type: "updateChallenges",
        //     payload: {
        //         challenge: { _id: "sdfs", ...rest}
        //     }
        // }
        const filteredChallenges = draft.challenges.filter(
          challenge => challenge._id !== action.payload.challenge._id
        );
        filteredChallenges.push(action.payload.challenge);
        draft.challenges = filteredChallenges;
      });

    case "err":
      return produce(state, draft => {
        draft.error = action.payload.error;
      });

    default:
      return state;
  }
};
