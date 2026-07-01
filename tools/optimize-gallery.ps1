param(
  [string]$Source = "assets/Pictures",
  [string]$LargeTarget = "assets/gallery",
  [string]$ThumbTarget = "assets/gallery/thumbs",
  [int]$LargeWidth = 1600,
  [int]$ThumbWidth = 480,
  [long]$Quality = 82,
  [switch]$Append
)

Add-Type -AssemblyName System.Drawing

function Resize-Jpeg {
  param(
    [string]$InputPath,
    [string]$OutputPath,
    [int]$TargetWidth,
    [long]$JpegQuality
  )

  $image = [System.Drawing.Image]::FromFile($InputPath)
  try {
    $ratio = $TargetWidth / $image.Width
    if ($ratio -gt 1) {
      $ratio = 1
    }

    $targetWidth = [int][Math]::Round($image.Width * $ratio)
    $targetHeight = [int][Math]::Round($image.Height * $ratio)
    $bitmap = New-Object System.Drawing.Bitmap($targetWidth, $targetHeight)
    try {
      $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
      try {
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.DrawImage($image, 0, 0, $targetWidth, $targetHeight)

        $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $JpegQuality)
        $bitmap.Save($OutputPath, $encoder, $encoderParams)
      } finally {
        $graphics.Dispose()
      }
    } finally {
      $bitmap.Dispose()
    }
  } finally {
    $image.Dispose()
  }
}

New-Item -ItemType Directory -Force -Path $LargeTarget, $ThumbTarget | Out-Null

$photos = Get-ChildItem -Path $Source -File -Include *.jpg, *.jpeg -Recurse | Sort-Object Name
$index = 1

if ($Append) {
  $existing = Get-ChildItem -Path $LargeTarget -File -Filter "gallery-*.jpg" |
    ForEach-Object {
      if ($_.BaseName -match '^gallery-(\d+)$') {
        [int]$Matches[1]
      }
    } |
    Sort-Object -Descending |
    Select-Object -First 1

  if ($existing) {
    $index = $existing + 1
  }
}

foreach ($photo in $photos) {
  $name = "gallery-{0:D2}.jpg" -f $index
  Resize-Jpeg -InputPath $photo.FullName -OutputPath (Join-Path $LargeTarget $name) -TargetWidth $LargeWidth -JpegQuality $Quality
  Resize-Jpeg -InputPath $photo.FullName -OutputPath (Join-Path $ThumbTarget $name) -TargetWidth $ThumbWidth -JpegQuality $Quality
  $index += 1
}

"Optimized $($photos.Count) photos into $LargeTarget and $ThumbTarget."
