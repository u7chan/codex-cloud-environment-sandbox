from numbers import Real


def sum_numbers(a, b):
    if not isinstance(a, Real) or not isinstance(b, Real):
        raise TypeError("sum_numbers expects numeric values")

    return a + b
