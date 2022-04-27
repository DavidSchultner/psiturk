import sqlite3

con = sqlite3.connect('participants.db')

dumptxt = ''

# for line in con.iterdump():
#    dumptxt += line + '\n'

# temp = open('db_dump.dat', 'w')
# temp.write(dumptxt)
# temp.close()


cur = con.cursor()
cur.execute("select *  from turkdemo")

x = cur.fetchall()

for i in x:
   dumptxt = '\n'.join(map(str,i))

temp = open('db_dump.dat', 'w')
temp.write(dumptxt)
temp.close()



