#pragma strict

var Health : float = 100.0;
var maxHP : float = 100.0;

var HpTexture : Texture2D;
var HpLenght : float;
var hitsound : AudioClip;

function Start()
{
	Screen.lockCursor = true;
}

function OnGUI()
{
	if(Health > 0)
	{
		GUI.DrawTexture(Rect(10,10, HpLenght, 10), HpTexture);
	}
}

function Update()
{
	HpLenght = (Health/maxHP) * 100;
	if(Health <=0)
	{
		Health = 0;
	}
}

function ApplyDammage (TheDammage : int)
{
	Health = Health - TheDammage;
	GetComponent.<AudioSource>().PlayOneShot(hitsound);
	if(Health <= 0)
	{
		Dead();
	}

}

function Dead() 
{
	Application.LoadLevel("GameOver");
}