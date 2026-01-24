# HEIC File Format Notes

## Browser Compatibility

HEIC (High Efficiency Image Container) files are not natively supported by most web browsers. The images in your portfolio that use `.HEIC` format may not display correctly.

## Recommended Solution

Convert HEIC files to web-compatible formats (JPG or PNG) for best browser compatibility:

### Using macOS Preview:
1. Open the HEIC file in Preview
2. File → Export
3. Choose Format: JPEG or PNG
4. Save with a `.jpg` or `.png` extension

### Using Online Converters:
- CloudConvert (cloudconvert.com)
- HEICtoJPEG (heictojpeg.com)

### Using Command Line (macOS):
```bash
# Install sips (built into macOS)
sips -s format jpeg "Modular Synth breadboard.HEIC" --out "Modular Synth breadboard.jpg"
```

## Files That Need Conversion:
- `/projects/modular-synth/Modular Synth breadboard.HEIC`
- `/projects/IMG_4095.HEIC`
- `/projects/waveguide/Waveguide.HEIC`

After conversion, update the file paths in `src/pages/Projects.tsx` to use the new `.jpg` or `.png` extensions.
