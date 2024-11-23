function solution(S, K) {
  if (S.length == 1) return S;
  // Implement your solution here
  let left = 0;
  let right = S.length - 1;
  let count = 0;
  let res = "";

  while (left < right) {
    if (S[left] == "?" || S[right] == "?" || S[left] == S[right]) {
      if (S[left] != "?") res += S[left];
      else if (S[right] != "?") res += S[right];
      else res += "a";
    } else {
      count++;
      if (count > K) return "NO";
      res += S[left];
    }
    left++;
    right--;
  }

  let palindrome = "";
  if (S.length % 2 == 0) {
    for (let i = res.length - 1; i >= 0; i--) {
      palindrome += res[i];
    }
  } else {
    for (let i = res.length - 2; i >= 0; i--) {
      palindrome += res[i];
    }
  }

  return res + palindrome;
}
