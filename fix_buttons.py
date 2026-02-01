
import os
import re

files = [
    'components/design-systems/shadcn/Button.tsx',
    'components/design-systems/mui/Button.tsx',
    'components/design-systems/chakra/Button.tsx',
    'components/design-systems/carbon/Button.tsx',
    'components/design-systems/fluent/Button.tsx',
    'components/design-systems/lightning/Button.tsx',
    'components/design-systems/polaris/Button.tsx',
    'components/design-systems/primer/Button.tsx'
]

base_path = '/Users/joe.steinkamp/Documents/GitHub/ds-switcher/'

for rel_path in files:
    full_path = os.path.join(base_path, rel_path)
    if not os.path.exists(full_path):
        print(f"Skipping {rel_path}, not found")
        continue
    
    with open(full_path, 'r') as f:
        content = f.read()
    
    # regex to find the import alias definition
    # import { Button as SomeButton }
    match = re.search(r'import\s+\{\s*Button\s+as\s+(\w+)\s*\}', content)
    if match:
        component_name = match.group(1)
        print(f"Fixing {rel_path}: Renaming {component_name} to Base{component_name}")
        
        new_name = f"Base{component_name}"
        
        # Replace import definition
        content = content.replace(f"as {component_name}", f"as {new_name}")
        
        # Replace JSX usage (opening tag)
        # We look for <Name followed by space or newline or />
        # But simple replace should work as long as it doesn't match the export definition
        # The export definition is "export default function Name"
        # Since we are renaming the IMPORT alias, the export function name (which caused the conflict) stays the same.
        # But we need to update the USAGE of the imported component inside the function.
        
        # To avoid replacing the function definition `function Name` or `function Name(`:
        # We can be specific about JSX tags.
        
        # Replace <Name
        content = content.replace(f"<{component_name}", f"<{new_name}")
        
        # Replace </Name>
        content = content.replace(f"</{component_name}>", f"</{new_name}>")
        
        with open(full_path, 'w') as f:
            f.write(content)
    else:
        print(f"Could not find import pattern in {rel_path}")
