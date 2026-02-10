// Disable right-click context menu
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    return false;
});

// Disable keyboard shortcuts for copy/paste/print/save/inspect
document.addEventListener('keydown', function (e) {
    // Comprehensive keyboard blocking
    if (
        // Copy, Cut, Paste
        (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'v' ||
            e.key === 'C' || e.key === 'X' || e.key === 'V')) ||
        // Print
        (e.ctrlKey && (e.key === 'p' || e.key === 'P')) ||
        // Save
        (e.ctrlKey && (e.key === 's' || e.key === 'S')) ||
        // View Source (Ctrl+U)
        (e.ctrlKey && (e.key === 'u' || e.key === 'U')) ||
        // F12 Developer Tools
        e.key === 'F12' ||
        e.keyCode === 123 ||
        // Inspect Element (Ctrl+Shift+I)
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) ||
        // Console (Ctrl+Shift+J)
        (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) ||
        // Inspect Element (Ctrl+Shift+C)
        (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) ||
        // Command+Option+I (Mac)
        (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'i')) ||
        // Command+Option+J (Mac)
        (e.metaKey && e.altKey && (e.key === 'J' || e.key === 'j')) ||
        // Command+Option+C (Mac)
        (e.metaKey && e.altKey && (e.key === 'C' || e.key === 'c'))
    ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
});

// Disable text selection
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
    return false;
});

// Disable drag and drop
document.addEventListener('dragstart', function (e) {
    e.preventDefault();
    return false;
});

// Disable copy event
document.addEventListener('copy', function (e) {
    e.preventDefault();
    return false;
});

// Disable cut event
document.addEventListener('cut', function (e) {
    e.preventDefault();
    return false;
});

// Disable paste event
document.addEventListener('paste', function (e) {
    e.preventDefault();
    return false;
});

// Additional protection: Disable print
window.addEventListener('beforeprint', function (e) {
    e.preventDefault();
    alert('Mencetak dokumen tidak diizinkan');
    return false;
});

// Additional layer: Prevent all developer tools and view source
document.onkeydown = function (e) {
    if (
        e.key === 'F12' ||
        e.keyCode === 123 ||
        // Inspect element shortcuts
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) ||
        // View source (Ctrl+U)
        (e.ctrlKey && (e.key === 'u' || e.key === 'U')) ||
        // Mac shortcuts
        (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'i')) ||
        (e.metaKey && e.altKey && (e.key === 'J' || e.key === 'j')) ||
        (e.metaKey && e.altKey && (e.key === 'C' || e.key === 'c'))
    ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
};

// Prevent opening in new window/tab (except for allowed links)
window.addEventListener('click', function (e) {
    // Allow profile button and name link
    if (e.target.closest('.profile-btn') || e.target.closest('.name-link')) {
        return true;
    }
    // Block any other attempts to open links in new tab
    if (e.target.tagName === 'A' && e.target.target === '_blank') {
        e.preventDefault();
        return false;
    }
});

// Monitor iframe for navigation attempts
document.addEventListener('DOMContentLoaded', function () {
    const iframe = document.getElementById('pdfFrame');
    if (iframe) {
        // Prevent navigation within iframe
        iframe.addEventListener('load', function () {
            try {
                // Additional restriction layer
                iframe.contentWindow.onbeforeunload = function () {
                    return false;
                };
            } catch (e) {
                // Cross-origin restriction - expected
            }
        });
    }
});

// Block window opening
const originalOpen = window.open;
window.open = function () {
    console.log('🔒 Opening new windows is blocked');
    return null;
};

// Console watermark protection
console.clear();
console.log('%c⚠️ PROTECTED DOCUMENT', 'color: #667eea; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #764ba2;');
console.log('%cDokumen ini dilindungi oleh sistem keamanan berlapis.', 'color: #f093fb; font-size: 14px; font-weight: 600;');
console.log('%cTidak dapat diunduh, disalin, atau didistribusikan.', 'color: #f093fb; font-size: 14px; font-weight: 600;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #764ba2;');
console.log('%cSegala bentuk pelanggaran akan dicatat.', 'color: #dc3545; font-size: 12px; font-style: italic;');
