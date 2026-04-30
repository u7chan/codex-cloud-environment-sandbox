import unittest

from src.sum import sum_numbers


class SumTestCase(unittest.TestCase):
    def test_sum_adds_two_numbers(self):
        self.assertEqual(sum_numbers(1, 2), 3)

    def test_sum_with_negative_number(self):
        self.assertEqual(sum_numbers(-5, 2), -3)

    def test_sum_with_float(self):
        self.assertAlmostEqual(sum_numbers(0.1, 0.2), 0.3, places=7)

    def test_sum_raises_for_non_numeric_values(self):
        with self.assertRaises(TypeError):
            sum_numbers("1", 2)


if __name__ == "__main__":
    unittest.main()
