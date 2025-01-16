# 判断是否已经有reference
while :
  do
    if lsof -i:8000; then
      if [ ! -d "backstop_data/bitmaps_reference" ];then
       backstop reference
       break;
      else
        backstop test
        break;
      fi
    fi
  sleep 3
done
