class Player
{
    constructor()
    {
        this.p = null;
        this.score = 0;
        this.name = null;
        this.distance = 0;

    }

    updateCount(C)
    {
        console.log("updatingCount");
        db.ref("/").update({"playerCount":C});
    }

    updateName(A)
    {
        db.ref("players/Player"+this.p).update({"Name":A});
    }

    updateScore(A)
    {
        db.ref("players/Player"+this.p).update({"Score":A});
    }

    static getPlayerInfo()
    {
        db.ref("players").on("value",(data)=>{
            playerInfo=data.val();
        });
    }

    updateDistance()
    {
        db.ref("players/Player"+this.p).update({"distance":this.distance});
    }
    
    
}