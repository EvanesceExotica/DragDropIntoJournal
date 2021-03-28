# Drag Drop Into Journal

A solution made to make adding multiple images to journal entries easier, to work along with my [Journal-to-Canvas-Slideshow](https://github.com/EvanesceExotica/Journal-To-Canvas-Slideshow) module. 

(Scroll to the bottom for the instructions, but please read the notes below for important information)

----
**Important Note**: This is a hacky solution, not thoroughly tested, and definitely not a finished module. It also doesn't currently work with video files (though I may add that later when I have time). I also do not know if it will work with the Forge.

 Use at your own risk, but feel free to make improvements as well as I'm sure there is a better way to do this haha. 

If someone can think of a better way, such as automating steps 5 - 7 below, I'll gladly release this as an official module. ^ ^ 

For now I've hit a bit of a wall in trying to figure out improvements for this and my focus is on improving my main module, so any help would be appreciated. :) 

----

**Important Note**: Don't try to drag images into a journal entry you've *just* saved, as there is a rendering issue with doing it that way. 

If you drag the images into the entry and you get a message that they were saved to a folder, but they don't appear in the journal entry, try closing and reopening the journal entry and trying again. 

You'll have to go in and delete the previously uploaded images so you don't have multiple copies.

---
**Note**: If you add images to a journal entry with content already in it, the images will be added to the bottom. You can cut and paste them to place them where you want in the entry with CTRL+X and CTRL+V.

---

**Note**: There is a setting to change where the images you drop into the journal will be uploaded from. By default it uploads into the base Foundry data folder, but if you wanted to place it within a particular folder inside the data folder, provide a file path like this:

![Settings Demo](https://i.imgur.com/yfvVkxG.png)

This module does not create a folder, so you'll have to use one that's already in your data folder.

---

## Install Instructions

1. Go to Add-on Modules in the "Configuration and Setup" screen in Foundry VTT.
2. Click "Install Module".
3. Copy and paste this manifest url into the space at the bottom of the window where it says Manifest URL: https://raw.githubusercontent.com/EvanesceExotica/DragDropIntoJournal/master/module.json
3. Click "Install".



## Usage Instructions

1. Freshly open a journal entry. 


2. Make sure the journal entry is NOT in edit mode --- meaning it's saved and you're simply viewing it. 


3. Drag an image or a group of images from your file system and into the journal entry.

4. The images will appear in the entry.  (DO NOT edit the journal entry or refresh your world at this point -- proceed to the next steps first)

5. Close the journal entry. 

6. Reopen the journal entry.

7. Edit the journal entry, and then save it.

Steps 5 - 7 should make it so the images are 'saved' within the journal entry even if you refresh. They will remain, and you can go in and edit the journal entry again, copy-paste the images with CTRL+X, CTRL+V, resize and rearrange them, add text, etc.



Here's a link to a video demonstration:
https://streamable.com/ui9idy 

