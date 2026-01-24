# Adding Media to Projects

## File Structure

Place your media files in the `public/projects/` folder:

```
public/
  projects/
    modular-synth/
      main.jpg
      pcb-layout.jpg
      demo-video.mp4
      report.pdf
    antenna/
      antenna-design.jpg
      vna-testing.jpg
      report.pdf
    ...
```

## How to Add Media to Projects

In `src/pages/Projects.tsx`, update each project object with media paths:

```typescript
{
  title: "Modular Analog Synthesizer",
  // ... other fields
  image: "/projects/modular-synth/main.jpg",           // Main featured image
  images: [                                             // Additional images
    "/projects/modular-synth/pcb-layout.jpg",
    "/projects/modular-synth/schematic.jpg"
  ],
  video: "/projects/modular-synth/demo-video.mp4",     // Main video (optional)
  videos: [                                             // Additional videos (optional)
    "/projects/modular-synth/testing-video.mp4"
  ],
  document: "/projects/modular-synth/report.pdf",       // Project report/document (optional)
}
```

## Supported Media Types

- **Images**: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`
- **Videos**: `.mp4`, `.mov`, `.webm` (MP4 recommended for best browser support)
- **Documents**: `.pdf` (recommended), `.doc`, `.docx`

## Notes

- All paths start with `/` (references `public/` folder)
- Images/videos will display in the modal
- Documents will show as a "View Report" link
- You can use either `image` or `video` for the main media (not both)
- Additional images/videos can be added via `images` and `videos` arrays
