export function isMobileFunc() {
    if (typeof window !== 'undefined') {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }
    return false;
}
