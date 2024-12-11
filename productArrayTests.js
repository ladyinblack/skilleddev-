const tests = [
  {
    input: [1, 2, 3, 4, 5],
    expected: [120, 60, 40, 30, 24],
    description: 'simple input',
  },
  {
    input: [0, 2, 3, 4, 5],
    expected: [120, 0, 0, 0, 0],
    description: 'with 0',
  },
  {
    input: [-1, 2, 3, 4, 5],
    expected: [120, -60, -40, -30, -24],
    description: 'with negative int',
  },
];

const validate = ({ input, expected, description }) => {
  const userAnswer = buildProductArray(input);

  if (userAnswer.length !== expected.length) {
    return { passed: false, description, expected, userAnswer };
  }

  for (let i = 0; i < userAnswer.length; i++) {
    if (userAnswer[i] !== expected[i]) {
      return { passed: false, description, expected, userAnswer };
    }
  }

  return { passed: true, description, expected, userAnswer };
};
