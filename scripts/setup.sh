#!/bin/bash

echo "🚀 Setting up PumpFun Launchpad..."

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd apps/backend && npm install && cd ../..

# Install frontend dependencies  
echo "📦 Installing frontend dependencies..."
cd apps/frontend && npm install && cd ../..

# Install shared package dependencies
echo "📦 Installing shared package dependencies..."
cd packages/shared && npm install && cd ../..

# Setup Solana
echo "⚓ Setting up Solana..."
cd apps/solana
anchor build
cd ../..

# Create environment files
echo "🔧 Creating environment files..."
cp .env.example .env
cp apps/backend/.env.example apps/backend/.env

# Start services
echo "🐳 Starting Docker services..."
docker-compose up -d postgres redis

echo "✅ Setup complete!"
echo "Run 'npm run dev' to start development servers"
