import { useContext } from "react";
import { ChallengeContext } from "./challengeProvider";
import request from "../../utils/request";

const useChallenge = () => {
  const { state, dispatch } = useContext(ChallengeContext);

  const postChallenge = async challenge => {
    try {
      const response = request({
        url: "http://localhost:3009/challenges",
        method: "post",
        data: {
          challenge: challenge
        }
      });

      dispatch({
        type: "addChallenge",
        payload: {
          challenge: response.challenge
        }
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "err",
        payload: {
          error
        }
      });
    }
  };

  const deleteChallenge = id => {};

  const queryChallenges = query => {
    dispatch({
      type: "queryChallenges",
      payload: {
        query: query
      }
    });
  };

  const updateChallenges = challenge => {};

  return {
    postChallenge,
    deleteChallenge: deleteChallenge,
    queryChallenges: queryChallenges,
    updateChallenges: updateChallenges,
    challenges: state.challenges,
    challengesOfInterest: state.challengesOfInterest
  };
};

export default useChallenge;
