#pragma strict

var TheDammage : int = 33;
private var Distance : float;
var MaxDistance : float = 1.5;
var DammageDelay : float = 0.6;

var hitsound : AudioClip;

function Update () 
{
	if(Input.GetButtonDown("Fire1"))
	{
		GetComponent.<AudioSource>().PlayOneShot(hitsound);
		AttackDammage();
	}

}


function AttackDammage()
{
	yield WaitForSeconds(DammageDelay);
	var hit : RaycastHit;
	var ray = Camera.main.ScreenPointToRay(Vector3(Screen.width/2, Screen.height/2, 0));

	if(Physics.Raycast (ray,hit))
	{
		Distance = hit.distance;
		if(Distance < MaxDistance)
		{
			hit.transform.SendMessage("ApplyDammage", TheDammage, SendMessageOptions.DontRequireReceiver);
		}
	}

}