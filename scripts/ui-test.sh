# 判断是否已经有reference
if [ ! -d "/backstop_data/bitmaps_reference" ];then
  backstop reference
  else backstop test
fi
