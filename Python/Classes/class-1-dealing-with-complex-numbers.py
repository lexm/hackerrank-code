class Complex(object):
    def __init__(self, real, imaginary):
        self.real = real
        self.imaginary = imaginary
        
    def __add__(self, no):
        return Complex(self.real + no.real, self.imaginary + no.imaginary)
        
    def __sub__(self, no):
        return Complex(self.real - no.real, self.imaginary - no.imaginary)
        
    def __mul__(self, no):
        newreal = self.real * no.real - self.imaginary * no.imaginary
        newimaginary = self.real * no.imaginary + self.imaginary * no.real
        return Complex(newreal, newimaginary)

    def __truediv__(self, no):
        conj = Complex(no.real, -1 * no.imaginary)
        denom = no * conj
        num = self * conj
        return Complex(num.real / denom.real, num.imaginary / denom.real)

    def mod(self):
        return Complex(math.sqrt(math.pow(self.real, 2) + math.pow(self.imaginary, 2)), 0)

    def __str__(self):
        if self.imaginary == 0:
            result = "%.2f+0.00i" % (self.real)
        elif self.real == 0:
            if self.imaginary >= 0:
                result = "0.00+%.2fi" % (self.imaginary)
            else:
                result = "0.00-%.2fi" % (abs(self.imaginary))
        elif self.imaginary > 0:
            result = "%.2f+%.2fi" % (self.real, self.imaginary)
        else:
            result = "%.2f-%.2fi" % (self.real, abs(self.imaginary))
        return result