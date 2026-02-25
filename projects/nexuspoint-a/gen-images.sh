#!/bin/bash
DIR="/home/ubuntu/.openclaw/workspace"
OUT="agency/projects/nexuspoint-a/public/images"
mkdir -p "$DIR/$OUT"

gen() {
  local name="$1" prompt="$2"
  [ -f "$DIR/$OUT/${name}.png" ] && echo "⏭️ $name exists" && return
  node "$DIR/scripts/gpt-image-gen-v4.mjs" "Generate an image: $prompt" "$name" "$DIR/$OUT" 3
  sleep 3
}

gen "hero" "Wide horizontal landscape photo of a bright modern creative workspace with a macbook laptop, coffee cup, and small plant on a clean white desk. Warm golden morning light streaming through large windows. Soft cream and peach tones. Minimalist aesthetic, no people. Professional photography style, 16:9 ultrawide aspect ratio"

gen "about-speed" "Close-up overhead photo of hands typing on a sleek laptop keyboard with code on screen. Warm ambient lighting, shallow depth of field. Cream and coral color palette. Professional photography, no face visible, square format"

gen "about-value" "Wide photo of a bright airy modern meeting room with warm wood table, designer chairs, and large window with city view. Soft warm tones, cream and beige colors. Clean minimalist interior design photography, no people, landscape format"

gen "about-quality" "Close-up photo of a designer's screen showing beautiful website mockups and color palettes. Warm studio lighting, shallow depth of field. Coral and cream accent tones. Professional workspace photography, no face, square format"

gen "process-bg" "Abstract soft gradient background in cream, peach and coral watercolor tones. Subtle texture, organic flowing shapes. Minimalist, suitable as website section background. No text, no objects, wide landscape format"

echo "✅ Done!"
ls -la "$DIR/$OUT/"
