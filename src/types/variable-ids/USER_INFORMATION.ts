export enum USER_INFORMATION {
  USER_LAST_NAME = "151ffb0e-dc75-4c42-ba91-fca38b49b3b6",
  USER_PHONE_NUMBER = "a41f23bf-1d28-42ed-a017-fb06d34b6840",
  USER_EMAIL = "16beafa2-ee8a-44e6-9b87-afafa488dd4d",
  USER_ROLE = "c92dcfe4-5abb-4122-82d4-2e13cb861875",
  USER_FIRST_NAME = "d9c13a90-fc38-4950-a48c-eafc619b94fb",
  USER_SIGNATURE_URL = "039e991f-74a7-4aad-b01c-3515212ed0d8",
}

export const USER_INFORMATION_PREFIX = "3516071e-8e75-4905-9b41-7a5bf03c56be:389ebbab-d08f-4981-a5de-820a162c928a";

export const getUserInformationId = (userInformationId: USER_INFORMATION) => `${USER_INFORMATION_PREFIX}:${userInformationId}`;