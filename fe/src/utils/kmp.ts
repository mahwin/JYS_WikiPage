export function makeFailure(keyword) {
  let failure = Array.from({ length: keyword.length }, () => 0);

  let j = 0;
  for (let i = 1; i < keyword.length; i++) {
    while (j > 0 && keyword[i] !== keyword[j]) {
      j = failure[j - 1];
    }
    if (keyword[i] === keyword[j]) {
      failure[i] = ++j;
    }
  }
  return failure;
}

/**
 * @param origin
 * @param keyword
 * @param mark
 */
export function kmp(origin: string, keyword: string, mark: string) {
  const pattens = [];
  const failure = makeFailure(keyword);

  let j = 0;
  for (let i = 0; i < origin.length; i++) {
    while (origin[i] === mark) {
      const nextMarkIdx = origin.indexOf(mark, i + 1);
      if (nextMarkIdx === -1) break;
      i = nextMarkIdx + 1;
      j = 0;
    }
    while (j > 0 && origin[i] !== keyword[j]) {
      j = failure[j - 1];
    }
    if (origin[i] === keyword[j]) {
      if (j === keyword.length - 1) {
        pattens.push(i - keyword.length + 1);
        j = failure[j];
      } else {
        j++;
      }
    }
  }
  return pattens;
}

/**
 * @param origin
 * @param targetIdxArr
 * @param mark
 * @param postNum
 * @param postNumMark
 * @param size
 *
 */
export function marking(
  origin: string,
  targetIdxArr: number[],
  mark: string,
  postNum: string,
  postNumMark: string,
  size: number
) {
  for (let i = targetIdxArr.length - 1; i >= 0; i--) {
    const startIdx = targetIdxArr[i];
    const endIdx = targetIdxArr[i] + size;

    origin =
      origin.slice(0, startIdx) +
      mark +
      postNum +
      postNumMark +
      origin.slice(startIdx, endIdx) +
      mark +
      origin.slice(endIdx);
  }

  return origin;
}
