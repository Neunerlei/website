#!/bin/bash

echo "Writing .env file for production..."

# Remove current env file
rm -f .env

emptyLineReg="^\s+$"
emptyValueReg=".*?=($|\s*$)"

# Read the .env.template file
out=""
for LINE in `cat .env.template`; do
   if [[ $LINE =~ $emptyLineReg ]]; then continue; fi
   # Ignore lines that have an empty value
   if [[ $LINE =~ $emptyValueReg ]]; then continue; fi
   out="$out$LINE
"
done

# Read .env.prod file
if [ -e .env.prod ]; then
	for LINE in `cat .env.prod`; do
	   if [[ $LINE =~ $emptyLineReg ]]; then continue; fi
	   # Ignore lines that have an empty value
	   if [[ $LINE =~ $emptyValueReg ]]; then continue; fi
	   out="$out$LINE
"
	done
fi

# Write the .env file
echo "$out" > .env