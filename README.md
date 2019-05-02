# The broken window shader
video showcasing the shader: https://youtu.be/iAC74iCKpvI

The sky inspiration came from the lectures when we were studying noise, it made me curious if I could also make my own shader which would use noise to mimic the sky. This turned out successfully and I was even able to add other cool effects such as; lava, water or broken glass.

The reason why the shader is contained into 2 rectangles is to mimic a window, since firstly it would fit with the theme (broken glass) and secondly because in full screen the shader looked a little bit overwhelming, a lot was happening and I didn’t know where to look, therefore this way the eyes are focused on the centre of the canvas.

The way I made it, is by play around with the noise code by adding to it different variables to change different parts of the noise, in order to create distortion, this led me to discovering some cool effects.

After some googling on how to do water/lava effect I have managed to make my code to be able to blend into lava and then into water if I wanted to.

The shader has the following functionalities:

When its first started it looks like you are looking out of the window to a beautiful sky, however when you press “b” it makes the glass brake. The sky gets distorted and it looks like glass shards, the key “n” reverts it back to normal.

If you keep pressing “a” then the sky will start getting more and more red, from a beautiful sunset it will quickly turn into almost lava like liquid. The more you press “a” the more lava like it will look.

If you keep pressing the “d” then the sky will start to get more and more blue, almost a deep blue sky, however if pressed continuously then it will turn into water like liquid (glossy).

The shader has other functionalities such as “q” zooms out and “e” zooms back in; these can all be overlapped on top of each other to create some cool effects (what I did in the video).

I am overall happy with how it turned out and happy that I have managed to come up with such cool effects.

