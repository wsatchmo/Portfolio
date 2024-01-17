# Crystal_Collector_game
```diff
+++ Crystal Collector +++
```

### A simple but fun math game. 

###### How to play

Press the start button to begin. Each round a random number between 50 and 150 is chosen. Try to bring your Gems Amount to the exact Bag Size with the crystal costs given. Crystal costs and Bag Size change each round. Blue, red, and yellow crystals remain the same cost throughout the round; multi crystals change after the third use, and black crystals are different with each use. White crystals are negative, and decrease your Gems Amount -- but can only be used three times each round.

###### Notes on the code

Change the images in the *images* folder to create a new theme. You'll also likely want to change the fonts (in the *fonts* folder), as well as the audio, which is currently **Clink.wav** in the master folder. This corresponds to the link in the *audio* tag on the html.

Feel free to add more crystals -- simply copy the JavaScript from the comment **bluecrystal begin** to the comment **bluecrystal end** and change the parameters to configure new numbers. Take a look into the **multicrystal**, **blackcrystal**, and **whitecrystal** functions if you are trying to make a more creative and dynamic outcome.

And if you do create a new theme, don't forget to **change the story within the `<p>` tags**!

```diff
### Have fun! ###
```
