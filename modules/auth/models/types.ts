export type User = {
  id: string;
  nickName: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
};

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
};

export interface AuthResponse extends AuthTokens {
  user: User;
}
