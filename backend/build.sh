#!/usr/bin/env bash
set -e  # Exit on error

# Update pip and setuptools
python -m pip install --upgrade pip setuptools wheel

# Install dependencies
pip install -r requirements.txt

# Create a simple startup script
echo '#!/bin/bash' > start.sh
echo 'uvicorn app:app --host 0.0.0.0 --port $PORT --workers 1' >> start.sh
chmod +x start.sh
