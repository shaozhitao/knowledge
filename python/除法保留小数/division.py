#除法保留两位小数

a = 30
b = 7

#方法一
c1 = round(a/b,2)
print(c1)

#方法二
c2 = format(float(a)/float(b),'.2f')
print(c2)

#方法三
c3 = '%.2f'%(a/b)
print(c3)
