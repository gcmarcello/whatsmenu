interface NumberArraySource {
  numbers: number[];
}

interface WordArraySource {
  words: string[];
}

type ArraySource = WordArraySource | NumberArraySource;

export default function clearArray(arraySource: ArraySource) {
  if ('words' in arraySource) {
    arraySource.words = [];
  } else {
    arraySource.numbers = [];
  }
}
