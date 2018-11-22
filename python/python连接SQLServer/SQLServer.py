#python连接SQLServer数据库方法

import pymssql


conn = pymssql.connect(host="192.168.13.240", user="sa", password="Admin123", database="scada", charset="utf8")
#创建游标
cursor = conn.cursor()
sql = 'select top 1 * from bianpin order by id desc'
#避免查询数据库时因异常而崩溃，在此捕获异常
try:
    #执行sql查询操作
    cursor.execute(sql)
    #获取查询结果，格式为列表
    result = cursor.fetchall()
    print(result)
except:
	print('发生错误')
	