var solution = function(isBadVersion) {
    return function(n) {
        let left = 1;
        let right = n;
        while (left < right)
        {
            let mid = left + parseInt((right - left) / 2);
            if (isBadVersion(mid))
                right = mid;
            else
                left = mid + 1;
        }
        return left;
    };
};
