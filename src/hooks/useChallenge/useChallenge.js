import { useContext } from "react";
import { ChallengeContext } from "./challengeProvider";
import request from "../../utils/request";

const useChallenge = () => {
  const { state, dispatch } = useContext(ChallengeContext);

  const postChallenge = async (challenge) => {
    try {
      const response = await request({
        url: "http://localhost:3009/challenges",
        method: "post",
        data: {
          challenge: challenge,
        },
      });

      console.log(response);

      dispatch({
        type: "addChallenge",
        payload: {
          challenge: response.challenge,
        },
      });

      return response.challenge;
    } catch (error) {
      console.log(error);
      dispatch({
        type: "err",
        payload: {
          error: "Error creating challenge.",
        },
      });
      return false;
    }
  };

  const getChallenges = async () => {
    try {
      const response = await request({
        url: "http://localhost:3009/challenges",
        method: "get",
      });

      dispatch({
        type: "getChallenges",
        payload: {
          challenges: response.data,
        },
      });
      return response.data;
    } catch (e) {
      dispatch({
        type: "err",
        payload: {
          error: "Error fetching all challenges.",
        },
      });
      return false;
    }
  };

  const deleteChallenge = (id) => {};

  const queryChallenges = (query) => {
    if (query && query.length > 0) {
      dispatch({
        type: "queryChallenges",
        payload: {
          query: query,
        },
      });
    }
  };

  const updateChallenges = (challenge) => {};

  return {
    postChallenge,
    getChallenges,
    deleteChallenge: deleteChallenge,
    queryChallenges: queryChallenges,
    updateChallenges: updateChallenges,
    challenges: state.challenges,
    challengesOfInterest: state.challengesOfInterest,
    challengeError: state.error,
  };
};

export default useChallenge;
