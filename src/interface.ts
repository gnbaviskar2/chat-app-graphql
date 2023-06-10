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

export { userSignUpData, userType };
