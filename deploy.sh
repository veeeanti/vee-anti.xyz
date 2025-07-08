#!/bin/bash

# Exit on error
set -e

# Pull latest code
git pull

# Install dependencies
pnpm install


# Stop and delete only the VA-Production pm2 process
pm2 stop VA-Production || true
pm2 delete VA-Production || true

# Build the app
pnpm run build

# Start the app with pm2, ensuring PORT is set to 6969
PORT=6969 pm2 start pnpm --name "VA-Production" -- start
