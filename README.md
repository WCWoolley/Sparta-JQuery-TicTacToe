# Sparta-JQuery-TicTacToe

## Using Javascript and jQuery to build a functional game of TicTacToe

### Installation

If you aren't already there, [this](https://github.com/WCWoolley/Sparta-JQuery-TicTacToe) will take you to the repository.  
From there look to the right of the screen and you'll find a green button with the words 'clone or download'.  
Then all you need to do is download the zip file or alternatively clone the repo by typing 'git clone https://github.com/WCWoolley/Sparta-JQuery-TicTacToe.git' into your local console.  

### Challenges

Placing Xs and Os was very straightforward, the real challenge came from making the game recognise what would be an end state and then how to tell the difference between X wins, O wins or nobody wins.  
The second and probably much worse sticking point was working out how to use the 'data-num=' tag correctly.  
  
I think primarily I am learning to research things more efficiently but I have also come to the conclusion that generally there are better tags to use than data-* tags, they seem far less versatile and simple to use than the other options.

### Code

```
<tr>
	<td data-num="0"></td>
	<td data-num="1"></td>
	<td data-num="2"></td>
</tr>
```
Above is the particular data tags that gave me trouble.

```
var space = [
  $(`td[data-num="0"]`).text(),
  $(`td[data-num="1"]`).text(),
  $(`td[data-num="2"]`).text()
```
And here is the way to call those particular elements, i feel that is a little complicated and messy. To me $(".space1").text() seems far clearer and easier to use.