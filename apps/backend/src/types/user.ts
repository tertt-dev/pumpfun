export enum AvatarType {
  NFT = 'NFT',
  UPLOADED = 'uploaded',
  GENERATED = 'generated'
}

export interface AvatarData {
  type: AvatarType;
  url: string;
  nftContract?: string;
  nftTokenId?: string;
}

export interface SocialLinks {
  twitter?: string;
  telegram?: string;
  discord?: string;
  website?: string;
}

export interface UserProfile {
  id: string;
  walletAddress: string;
  username?: string;
  customDomain?: string;
  avatar?: AvatarData;
  bannerImage?: string;
  bio?: string;
  socials?: SocialLinks;
  createdAt: Date;
  updatedAt: Date;
}

export interface UpdateProfileDto {
  username?: string;
  customDomain?: string;
  avatar?: AvatarData;
  bannerImage?: string;
  bio?: string;
  socials?: SocialLinks;
} 