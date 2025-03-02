1.) if the divider in the sidebar is not positioned correctly and leaning to the right you should probably double check you css links in your html and make sure that the bootstrap links are first than you own links (bootstrap links are set to have higher priority)
  - if you don't want to do that just add !important to the css maybe that would work or modify it so that it positions in the middle (ask chatgpt)

2.) the sidebar should be be positioned in a column-1 and the rest of the content should be in column-11 for it to be side by side with the main conent use the bootstrap grid system


NOTE: It is still not responsive so don't go into inspect mode
