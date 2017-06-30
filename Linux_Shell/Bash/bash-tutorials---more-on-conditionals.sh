read X
read Y
read Z
if [[ "$X" == "$Y" ]]; then
  if [[ "$Y" == "$Z" ]]; then
    echo "EQUILATERAL"
  else
    echo "ISOSCELES"
  fi
elif [[ "$X" == "$Z" ]] || [[ "$Y" == "$Z" ]]; then
  echo "ISOSCELES"
else
  echo "SCALENE"
fi