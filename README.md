# Tap Search

## Basic Usage

- The app provides a basic UI for storing documents (paragraphs) which are seperated by two line breaks.
- You can search for a particular word by using the search box on the webpage which will result in a maximum of 10 paragraphs which contains that word.

## Sample Input and Output

1. Two documents are inserted which are separated by two line breaks:

```
The movement to incorporate Spring Branch was initiated over concerns that the area could possibly be annexed into the growing city of Bulverde, which lies to the south. Voters in Bulverde adopted a home rule charter in May 2015 that would allow the city to involuntarily annex bordering properties.


Supporters of the measure also cited local control and preservating the character of the community as further reasons to incorporate. Opponents questioned the economic viability of incorporating a small community with a limited tax base to fund.
```

2. The word 'measure' is searched and only the second paragraph shows up in the result.

## How to test this?

- First clear the database to remove previous records.
- You need to enter some documents (paragraphs) which are seperated by two line breaks.
- It's better to enter a significant amount of data to be able to test the efficiency and accuracy of the program.
- Then you need to enter a word and check if all the returned documents contains that word.
