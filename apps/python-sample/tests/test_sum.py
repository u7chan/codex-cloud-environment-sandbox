import unittest

from src.sum import sum_numbers


class SumTestCase(unittest.TestCase):
    def test_sum_adds_two_numbers(self):
        self.assertEqual(sum_numbers(1, 2), 3)


if __name__ == "__main__":
    unittest.main()
