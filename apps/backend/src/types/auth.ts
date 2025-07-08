export interface NonceRequest {
  walletAddress: string;
}

export interface VerifyRequest {
  walletAddress: string;
  signature: string;
  nonce: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    walletAddress: string;
    username?: string;
    avatar?: string;
  };
}

export interface JWTPayload {
  walletAddress: string;
  userId: string;
}

export interface AuthenticatedRequest extends Express.Request {
  user?: JWTPayload;
} 