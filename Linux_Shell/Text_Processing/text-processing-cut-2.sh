IFS=
while read line; do
   echo $(echo "$line" | cut -c2,7 )
done