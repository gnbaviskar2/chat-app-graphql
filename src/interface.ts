interface userSignUpData {
  firstname: string;
  lastname: string;
  password: string;
  email: string;
}

interface userType extends userSignUpData {
  id: number;
  createdAt: string;
}

interface createMessageInput {
  text: string;
  receiverId: number;
  senderId: number;
}

interface getMessagesByUserIdInput {
  receiverId: number;
  senderId: number;
  take: number;
  cursor?: number;
}

export {
  userSignUpData,
  userType,
  createMessageInput,
  getMessagesByUserIdInput,
};
