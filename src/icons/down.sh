while IFS= read -r url; do
    curl -L -o ./$(basename "$url") "$url"
done < icons.txt
