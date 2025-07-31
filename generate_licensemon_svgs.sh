#!/bin/bash

# Check if jq is installed
if ! command -v jq &> /dev/null; then
    echo "Error: jq is required but not installed. Please install jq first."
    echo "On macOS: brew install jq"
    echo "On Linux: sudo apt-get install jq"
    exit 1
fi

# Check if aider is installed
if ! command -v aider &> /dev/null; then
    echo "Error: aider is required but not installed. Please install aider first."
    echo "Install with: pip install aider-chat"
    exit 1
fi

# Create output directory if it doesn't exist
mkdir -p src/assets/licensemons

# Read each LicenseMon from the JSON file
jq -c '.[]' src/licenseMons.json | while read -r mon; do
    id=$(echo "$mon" | jq -r '.id')
    name=$(echo "$mon" | jq -r '.name')
    type=$(echo "$mon" | jq -r '.type')
    description=$(echo "$mon" | jq -r '.description')
    
    output_file="src/assets/licensemons/${name}.tsx"
    
    echo "Generating SVG for ${name} (ID: ${id})..."
    
    # Create the prompt for aider
    prompt="Create a React SVG component for a LicenseMon named ${name} (type: ${type}). 
    Description: ${description}
    The component should:
    - Be 200x200 pixels (viewBox=\"0 0 200 200\")
    - Use appropriate colors for its type (${type})
    - Match the description's visual characteristics
    - Be creative but clearly represent the rules concept
    - Export as a default React component
    - Save to ${output_file}"
    
    # Call aider with the prompt
    aider --yes --message "$prompt"
    
    echo "Generated ${output_file}"
done

echo "All LicenseMon SVGs generated!"
