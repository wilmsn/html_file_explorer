#HTML File Explorer

**html_file_explorer.js** is a small library to display a filestructure inside a HTML page.

In this state it is limited to the things i need: Show my music on a webpage so i can choose what to play.

The usage is simple:

Inside your HTML page you need this:

1) Include the library:

	<script src="html_file_explorer.js"></script>

2) Fill the content in your Javascript section:

	$(document).ready(function(){
	  // anywhere inside your doc ready function add
	  fd_add("/dir/file.mp3");
	  // repeat for every file with path and leading slash
	}
	  
	function fd_play_dir(dirname) {
		// program the action for play dir
		alert("Play Dir: "+dirname);
	}
	
	function fd_play_file(filename) {
		// program the action for play file
		alert("Play File: "+filename);
	}


3) Add a docking point for the output in the HTML section:

	<div id="html:file_explorer"></div>

**Limitations:**
Thre is no sorting inside the library. The input via "fd_add()" should come like this:

	/dir1/file1.mp3
	/dir1/file2.mp3
	/dir1/file3.mp3
	/dir2/file1.mp3
	/dir2/file2.mp3
	/dir2/file3.mp3
	/dir3/file1.mp3
	/dir3/file2.mp3
	
The library just looks: If the dirname changes its a new dir!
	
Every file will be shown as a mp3 file: You have to filter it before delivery.

**Result:**

When all the folders are closed it looks like this:

![](https://raw.githubusercontent.com/wilmsn/html_file_explorer/main/result_dir_closed.png) 

When you press play "function fd_play_dir(dirname)" will be executed.

When you click on the folder this folder will be opened:

![](https://raw.githubusercontent.com/wilmsn/html_file_explorer/main/result_dir_opened.png) 

When you press play near a file "function fd_play_file(filename)" will be executed.

**External Elements:**
The Icons are taken from https://www.iconarchive.com/
	