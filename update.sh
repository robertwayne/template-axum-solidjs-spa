echo "Updating client dependencies..."
cd ./client
bun update &> /dev/null

echo "Updating server dependencies..."
cd ../server
cargo update --quiet

echo "All up to date! ✨"