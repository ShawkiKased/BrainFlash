## Welcome To BrainFlash

BrainFlash is a cool website where your able to create your own FlashCards for quick and easy access to studying!
Make multiple decks with multiple cards and be able to test your wits for your own testing pleasure! You can visit it right [Here!](https://brain-flash.herokuapp.com/)

* Technologies Used:
I used a combination of React, Redux, Javascript, HTML, CSS, and Ruby on Rails with PostgreSQL. That's a pretty big package of technologies all right! They were all used for their appropriate places to work together in this project!

## How It Works

Users can create their own decks in an easy to access bar, and each deck can make their own cards that are also in an easy to access bar. Each Card will also have their own Q&A by only showing the question and having you check to see if you remembered!


## Specific Features

### Add Decks and Cards

You can create your own decks with a simple click of a button, give it a name you want the subject to cover and BAM, it appears right there!
But that's not all, you can add a card also with a simple click of a button. All you have to do is give it the question and answer!

![CardExample](https://i.imgur.com/GuwdBk0.png)

I did this by simply creating a Modal that opens and closes when you click on the add button so you can do it on the same page, this was acheived by setting the State of the modal to false by default and then switched to true when the buttons are clicked!
I originally had an issue when the Modal wasn't being called despite the code being correct, figuring it out is what got me to set the State's to true and false since it makes it a lot easier to access without entirely getting rid of it.

Association wise it's pretty simple, a User has many decks and each deck has many cards. There was some liberties i did, like having the Cards Index be rendered inside of the  Deck's show page with a connection specified by the deckId. For example, here's a snippet from the App.jsx

 ``<Route path= "/decks/:deckId" component={DeckShowContainer} />``
 
 ### Your Cards Test You!
 
 After creating a card, the only thing you'll actually see is the question, and the options to study and delete. What better way to help you study than hiding the answers. At your leisure, you can choose a card and get taken to a page where the Question will be shown and give you however time you want to see if you remember. When your ready, simply click on the card and the Answer is rendered along with a Green and Red button option to tell yourself if you knew or not.
This was also done similarly where answer's state is hidden until the User activates the button, in doing so the question is set to blank afterwards. Here's a quick snippet of said button:
 ``<button onClick={() => this.setState({ answer: !this.state.answer })}>
 <CardQuestion question={this.props.currentCard ? this.props.currentCard.question : ""} />
 </button>``

 ![TestExample](https://i.imgur.com/AhQY2xX.png)
 
 ## Future Plans for BrainFlash
 
 * The Ability to search for FlashCards created by other Users.
 * The Ability to set cards under tags and categories for even better organization and searches.
 * The Ability for the study function to go through all Cards and rank your actual choices of how well you did.
 * More polish and more!
