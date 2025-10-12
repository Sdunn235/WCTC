import os  # Module for interacting with the operating system

# =========================
# Helper Function: Get Size
# =========================
def get_size(start_path):
    """Recursively calculates the total size of a file or folder."""
    total_size = 0

    # If it's a file, just get its size
    if os.path.isfile(start_path):
        try:
            total_size = os.path.getsize(start_path)
        except:
            pass  # Ignore any errors (e.g., permission denied)

    # If it's a folder, walk through all files inside it
    else:
        for dirpath, dirnames, filenames in os.walk(start_path):
            for f in filenames:
                try:
                    # Full path to the file
                    fp = os.path.join(dirpath, f)
                    if os.path.exists(fp):  # Ensure file still exists
                        total_size += os.path.getsize(fp)  # Add its size
                except:
                    pass  # Ignore unreadable files

    return total_size

# Helper Function: Format Byte Sizes

def format_size(bytes_size):
    """Converts byte size into a human-readable string."""
    for unit in ['B', 'KB', 'MB', 'GB', 'TB']:
        if bytes_size < 1024:
            return f"{bytes_size:.2f} {unit}"  # Format to two decimal places
        bytes_size /= 1024  # Move up to the next unit

# Main Program Entry Point

def main():
    # Ask the user to enter a file or folder path
    path = input("Enter the path to the file or folder: ").strip('"')

    # Exit if the path doesn't exist
    if not os.path.exists(path):
        print("The path does not exist.")
        return

    print(f"\nScanning contents of: {path}\n")

    # This list will store tuples like (name, size)
    entries_info = []
  
    # If a file: just measure it

    if os.path.isfile(path):
        size = get_size(path)
        entries_info.append((os.path.basename(path), size))

    # If a folder: measure each sub-item

    else:
        with os.scandir(path) as entries:  # List top-level entries
            for entry in entries:
                try:
                    size = get_size(entry.path)  # Measure file/folder size
                    entries_info.append((entry.name, size))
                except:
                    entries_info.append((entry.name, -1))  # Use -1 for error cases
   
    # Sort all entries by size (descending)
 


    # Print Formatted Output Table
   
    print(f"{'Folder/File':<60} {'Size':>10}")
    print("-" * 72)
    for name, size in entries_info:
        size_str = format_size(size) if size >= 0 else "[Error]"
        print(f"{name:<60} {size_str:>10}")

# Run the Program If Called Directly

if __name__ == "__main__":
    main()

