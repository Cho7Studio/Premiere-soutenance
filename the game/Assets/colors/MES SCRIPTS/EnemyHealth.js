#pragma strict

var Health = 100;
var EnemyName : String;

function ApplyDammage (TheDammage : int)
{
	Health -= TheDammage;
	
	if(Health <= 0)
	{
	    GameObject.Find(EnemyName).GetComponent(AdvancedAI).enabled = false;
	    GetComponent.<Animation>().Play("death");
	    GetComponent.<Animation>()["death"].speed = 1;
	    yield WaitForSeconds (10);
		Dead();
	}
}

function Dead()
{
	Destroy (gameObject);
}