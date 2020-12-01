//parent class
class Team
{
    //properties
    teamName; //string
    wins; //int
    losses; //int
    winLossPct; //Double
    games = []; //populated by objects created in Game class
    
    getTeam() //returns team name
    {
        return this.teamName;
    }
    
    setTeam(sTeamName) //recieves parameter used to set variable teamName
    {
        this.teamName = sTeamName;
    }
    
    setWinsLosses(iWins, iLosses) //receives parameters for wins and losses
    {
        this.wins = iWins
        this.losses = iLosses;
        //also calculates winLossPct variable
        this.winLossPct = this.calcWinLossPct;
    }
    
    getWins() //returns number of wins
    {
        return this.wins;
    }
    
    getLosses() //returns number of losses
    {
        return this.losses;
    }
    
    calcWinLossPct() //calculates and updates winLossPct attribute
    {
        winLossPct = this.wins / this.losses;
    }
}


//create objects in Team class "games" array
class Game
{
    //attributes
    myScore; //int
    theirScore; //int
    winOrLoss; //int
    
    //constructor that receives all 3 parameters to populate above attributes
    constructor (iScore, iTheirScore, sWinOrLoss)
    {
        this.myScore = iScore;
        this.theirScore = iTheirScore;
        this.winOrLoss = sWinOrLoss; 
    }
}


//inherits from Team class (child of Team class)
class BasketballTeam extends Team
{
    super.BasketballTeam();
    super(iScore, iTheirScore, sWinOrLoss);

    //AND adds the following attributes
    totalPointsFor; //int
    totalPointsAgainst; //int

    addPointsFor(iAddPoints) //adds points to totalPointsFor
    {
        this.totalPointsFor = this.totalPointsFor + iAddPoints;
    }

    addPointsAgainst(iSubtractPoints) //adds points to totalPointsAgainst
    {
        this.totalPointsAgainst = this.totalPointsAgainst + iSubtractPoints;
    }

    getAllPoints() //returns string displaying totalPointsFor and totalPointsAgainst as follows:
    {
        "Points for " + this.totalPointsFor + " and Points Against " + this.totalPointsAgainst;
    }
}