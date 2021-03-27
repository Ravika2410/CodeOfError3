class game
{
    constructor()
    {
      //  console.log("game constructor called");
    }

    getState()
    {
        db.ref("gameState").on("value",function(data){
            gameState=data.val();
        },function(){});
    }

 async start()
    {
        if(gameState==0)
        {
            player = new Player();
            playerCount = await db.ref("playerCount").once("value");

            if(playerCount.exists())
            {
                playerCount = playerCount.val();
            }

            form = new Form();
            form.display();

        }

        c1 = createSprite(50,displayHeight*4,20,20);
        c1.addImage(c);
        c2 = createSprite(150,displayHeight*4,20,20);
        c2.addImage(a);
        c3 = createSprite(250,displayHeight*4,20,20);  
        c3.addImage(r);
        c4 = createSprite(350,displayHeight*4,20,20);
        c4.addImage(w);

        cars=[c1, c2, c3, c4];

    }

    changeState(s)
    {

        db.ref("/").update({"gameState":s});

    }

    play()
    {
        form.hide();

        var x = 0, y, o = 0;
        var x1=0,y1=-displayHeight;

        Player.getPlayerInfo();

        if(playerInfo != undefined)
        {
            background("red");
            //image(e,0,x1,displayWidth,displayHeight);
            image(e,0,-displayHeight*2,displayWidth,displayHeight*8);
            console.log(displayWidth+","+displayHeight);



            var a = 100;
            for(var i in playerInfo)
            {
                if(o<4)
                o = o + 1;
                x = x + 200;
                y = displayHeight*4 - playerInfo[i].distance;

                cars[o-1].x = x;
                cars[o-1].y = y;

                if(i == "Player"+player.p)
                {

                    fill("red");
                    stroke(10);
                    ellipse(x,y,70,70);
                    cars[o-1].shapeColor="red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[o-1].y;

                } 

                else 

                {

                    fill("black");
                    cars[o-1].shapeColor = "black";

                }

                if(keyIsDown(UP_ARROW) && player.p != null)
                 {
                      player.distance += 50;
                    player.updateDistance();
                         //  x1+=5;
                          // y1+=5;
                 }
      
                if(player.distance>5000)
                 {
                    db.ref("/").update({"winner":player.p});
                    win=player.p;
                    playerName=player.name;
                    gameState=2;
                 }

               /* textSize(20);
                text(playerInfo[i].Name.slice(0,5), a, 200);
                text(playerInfo[i].Score, a, 240);
                a += 70;

                 x=cars[]*/

            }

        /*    if(x1>=displayHeight)
            {
                x1=-displayHeight;
            }

        if(y1>=displayHeight)
        {
            y1=-displayHeight;
        }
*/
            drawSprites();
      }

      
    }

    end()
    {
        background(255);
       text("Congratulations "+ playerName,width/2,height/2);
       console.log("end");
    }
} 
