import argparse
import os

import cairosvg


def parse_args():
    parser = argparse.ArgumentParser(description="Parse command line arguments.")

    # Add arguments
    parser.add_argument("-i", "--input", type=str, default="src/icons/files")
    parser.add_argument("-o", "--output", type=str, default="preview/files")

    args = parser.parse_args()

    return args


def main():
    args = parse_args()
    input_dir = args.input
    output_dir = args.output
    os.makedirs(output_dir, exist_ok=True)

    for filename in os.listdir(input_dir):
        if filename.endswith(".svg"):
            # Define the full input and output file paths
            svg_path = os.path.join(input_dir, filename)
            png_path = os.path.join(output_dir, filename.replace(".svg", ".png"))

            # Convert SVG to PNG
            cairosvg.svg2png(url=svg_path, write_to=png_path)
            print(f"Converted {filename} to PNG")

    print("Batch conversion completed.")


if __name__ == "__main__":
    main()
