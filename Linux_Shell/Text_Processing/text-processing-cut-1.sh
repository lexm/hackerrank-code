while read line; do
  echo $(echo "$line" | cut -c3 )
done
  