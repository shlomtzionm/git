let s = [0, 1, 1, 1, 0, 1]
let output = 0
let left = []
let right = []
let score = []
let j = s.length - 1
let i
for (x = 0; x < s.length; x++) {
    for (i = 0; i < s.length; i++) {
        if (i > x) { break } else {
            left.push(s[i])
            right.push(s[j])
            j--
            if (i === j) { break }

        }
        console.log(left)
        console.log(right)
    }
}