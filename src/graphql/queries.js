/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMedication = /* GraphQL */ `
  query GetMedication($id: ID!) {
    getMedication(id: $id) {
      id
      name
      quantity
      refill
      userid
      createdAt
      updatedAt
    }
  }
`;
export const listMedications = /* GraphQL */ `
  query ListMedications(
    $filter: ModelMedicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        quantity
        refill
        userid
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVerification = /* GraphQL */ `
  query GetVerification($id: ID!) {
    getVerification(id: $id) {
      id
      title
      description
      image
      userid
      createdAt
      updatedAt
    }
  }
`;
export const listVerifications = /* GraphQL */ `
  query ListVerifications(
    $filter: ModelVerificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVerifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        userid
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
