import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { AvatarData, SocialLinks } from '../types/user';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  walletAddress: string;

  @Column({ nullable: true, unique: true })
  username: string;

  @Column({ nullable: true, unique: true })
  customDomain: string;

  @Column({ type: 'jsonb', nullable: true })
  avatar: AvatarData;

  @Column({ nullable: true })
  bannerImage: string;

  @Column({ nullable: true, length: 256 })
  bio: string;

  @Column({ type: 'jsonb', nullable: true })
  socials: SocialLinks;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: false })
  isWhitelisted: boolean;

  @Column({ default: false })
  isBanned: boolean;

  @Column({ nullable: true })
  banReason: string;
} 