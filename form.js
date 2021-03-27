class Form
{
    constructor()
    {
        this.input = createInput("Enter Your Name:");
        this.button = createButton("PLAY");
        this.greetings = createElement("h2");
    }

    display()
    {
        var title=createElement("h1");
        title.html("Multi-Player Game");
        title.position(displayWidth/2 -40, 50);

        this.input.position(displayWidth/2 -40, displayHeight/2 - 80);
        this.input.size(200,50);

        this.button.position(displayWidth/2 + 30, displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            var Name=this.input.value();
          //  console.log("Before = "+playerCount)
            playerCount += 1;
           // console.log("After = "+playerCount)
            player.p = playerCount;
            player.updateCount(player.p);
            player.updateName(Name);

            this.greetings.html("Welcome  "+Name);        
            this.greetings.position(displayWidth/2 -70, displayHeight/4);
            //console.log("Player Added "+player.p)
        }
        );
    }

    hide()
    {
        this.input.hide();
        this.button.hide();
        this.greetings.hide();
    }
            
}