/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMedication = /* GraphQL */ `
  mutation CreateMedication(
    $input: CreateMedicationInput!
    $condition: ModelMedicationConditionInput
  ) {
    createMedication(input: $input, condition: $condition) {
      id
      name
      quantity
      start
      end
      slot1
      slot2
      slot3
      userid
      createdAt
      updatedAt
    }
  }
`;
export const updateMedication = /* GraphQL */ `
  mutation UpdateMedication(
    $input: UpdateMedicationInput!
    $condition: ModelMedicationConditionInput
  ) {
    updateMedication(input: $input, condition: $condition) {
      id
      name
      quantity
      start
      end
      slot1
      slot2
      slot3
      userid
      createdAt
      updatedAt
    }
  }
`;
export const deleteMedication = /* GraphQL */ `
  mutation DeleteMedication(
    $input: DeleteMedicationInput!
    $condition: ModelMedicationConditionInput
  ) {
    deleteMedication(input: $input, condition: $condition) {
      id
      name
      quantity
      start
      end
      slot1
      slot2
      slot3
      userid
      createdAt
      updatedAt
    }
  }
`;
export const createVerification = /* GraphQL */ `
  mutation CreateVerification(
    $input: CreateVerificationInput!
    $condition: ModelVerificationConditionInput
  ) {
    createVerification(input: $input, condition: $condition) {
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
export const updateVerification = /* GraphQL */ `
  mutation UpdateVerification(
    $input: UpdateVerificationInput!
    $condition: ModelVerificationConditionInput
  ) {
    updateVerification(input: $input, condition: $condition) {
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
export const deleteVerification = /* GraphQL */ `
  mutation DeleteVerification(
    $input: DeleteVerificationInput!
    $condition: ModelVerificationConditionInput
  ) {
    deleteVerification(input: $input, condition: $condition) {
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
export const createDispense = /* GraphQL */ `
  mutation CreateDispense(
    $input: CreateDispenseInput!
    $condition: ModelDispenseConditionInput
  ) {
    createDispense(input: $input, condition: $condition) {
      id
      date
      time
      took
      userid
      createdAt
      updatedAt
    }
  }
`;
export const updateDispense = /* GraphQL */ `
  mutation UpdateDispense(
    $input: UpdateDispenseInput!
    $condition: ModelDispenseConditionInput
  ) {
    updateDispense(input: $input, condition: $condition) {
      id
      date
      time
      took
      userid
      createdAt
      updatedAt
    }
  }
`;
export const deleteDispense = /* GraphQL */ `
  mutation DeleteDispense(
    $input: DeleteDispenseInput!
    $condition: ModelDispenseConditionInput
  ) {
    deleteDispense(input: $input, condition: $condition) {
      id
      date
      time
      took
      userid
      createdAt
      updatedAt
    }
  }
`;
export const createTimeSlots = /* GraphQL */ `
  mutation CreateTimeSlots(
    $input: CreateTimeSlotsInput!
    $condition: ModelTimeSlotsConditionInput
  ) {
    createTimeSlots(input: $input, condition: $condition) {
      id
      userid
      slot1
      slot2
      slot3
      createdAt
      updatedAt
    }
  }
`;
export const updateTimeSlots = /* GraphQL */ `
  mutation UpdateTimeSlots(
    $input: UpdateTimeSlotsInput!
    $condition: ModelTimeSlotsConditionInput
  ) {
    updateTimeSlots(input: $input, condition: $condition) {
      id
      userid
      slot1
      slot2
      slot3
      createdAt
      updatedAt
    }
  }
`;
export const deleteTimeSlots = /* GraphQL */ `
  mutation DeleteTimeSlots(
    $input: DeleteTimeSlotsInput!
    $condition: ModelTimeSlotsConditionInput
  ) {
    deleteTimeSlots(input: $input, condition: $condition) {
      id
      userid
      slot1
      slot2
      slot3
      createdAt
      updatedAt
    }
  }
`;
