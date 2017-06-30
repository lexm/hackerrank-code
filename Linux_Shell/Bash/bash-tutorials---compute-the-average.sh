read N
TOTAL=0
COUNT=$N
while [ $COUNT -gt 0 ]; do
  read INT
  let TOTAL+=$INT
  let COUNT-=1
done
printf "%.3f\n" $(echo " $TOTAL / $N " | bc -l)
