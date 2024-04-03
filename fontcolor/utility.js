// Function to save settings
function SaveSetting() {
    var fontSize = document.getElementById('size').value;
    var unit = document.getElementById('unit').value;
    var fontColor = document.getElementById('color').value;
    var backgroundColor = document.getElementById('background').value;

    // Save settings to localStorage
    localStorage.setItem('fontSize', fontSize);
    localStorage.setItem('unit', unit);
    localStorage.setItem('fontColor', fontColor);
    localStorage.setItem('backgroundColor', backgroundColor);

    // Update preview
    UpdatePreview(fontSize, unit, fontColor, backgroundColor);
}

// Function to update preview
function UpdatePreview(fontSize, unit, fontColor, backgroundColor) {
    var previewDiv = document.getElementById('preview');
    var previewText = "Preview Text";

    // Apply styles to preview text
    previewDiv.style.fontSize = fontSize + unit;
    previewDiv.style.color = fontColor;
    previewDiv.style.backgroundColor = backgroundColor;
    previewDiv.textContent = previewText;
}

// Function to load saved settings
function LoadSettings() {
    var fontSize = localStorage.getItem('fontSize');
    var unit = localStorage.getItem('unit');
    var fontColor = localStorage.getItem('fontColor');
    var backgroundColor = localStorage.getItem('backgroundColor');

    // Set selected values in the form
    document.getElementById('size').value = fontSize;
    document.getElementById('unit').value = unit;
    document.getElementById('color').value = fontColor;
    document.getElementById('background').value = backgroundColor;

    // Update preview with saved settings
    UpdatePreview(fontSize, unit, fontColor, backgroundColor);
}

// Load saved settings when the page loads
window.onload = LoadSettings;
