curl "http://httpbin.org/post" \
  --include \
  --request POST \
  --data-urlencode ""

# --header "Content-Type: application/x-www-form-urlencoded"

# data output from curl doesn't have a trailing newline
echo
