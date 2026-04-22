$files = Get-ChildItem 'public\iara-frames\*.png' | Sort-Object Name
$count = 1
foreach ($f in $files) {
    $newName = "frame_$count.png"
    Rename-Item $f.FullName -NewName $newName
    $count++
}
