function mySqrt(x) {
    if (x < 2) return x;

    let left = 1;
    let right = x;
    let ans = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (mid <= Math.floor(x / mid)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
}