/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCalcCaseModel = /* GraphQL */ `
  query GetCalcCaseModel($userID: ID!) {
    getCalcCaseModel(userID: $userID) {
      userID
      faceAmount
      Prod
      sex
      smoker
    }
  }
`;
export const listCalcCaseModels = /* GraphQL */ `
  query ListCalcCaseModels(
    $filter: TableCalcCaseModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCalcCaseModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        userID
        faceAmount
        Prod
        sex
        smoker
      }
      nextToken
    }
  }
`;
