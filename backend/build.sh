#!/usr/bin/env bash
# Exit on error
set -o errexit

# Install system dependencies
pip install --upgrade pip
pip install -r requirements.txt

# Apply database migrations (if any)
# python -m alembic upgrade head
