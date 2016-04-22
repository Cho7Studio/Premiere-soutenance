#pragma strict

//This script allows you to create equipment effects that will be called either OnEquip or WhileEquipped. This is usefull for magic effects and stat handling.

@script AddComponentMenu ("Inventory/Items/Equipment Effect")
@script RequireComponent(Item)

private var effectActive = false;
//private var playerstats : PlayerStat;
function Start()
{
	//playerstats = GameObject.Find("cible").GetComponent(PlayerStat);
}

function Update () 
{
	if (effectActive == true)
	{
		//if(gameObject.tag == "regeneration")
		//{
			//if((playerstats.Health < playerstats.maxHP) && (playerstats.Health > 0))
			//{
				//playerstats.Health += Time.deltaTime * 4;
				//if(playerstats.Health > playerstats.maxHP)
				//{
					//playerstats.Health = playerstats.maxHP;
				//}
			//}
		//}
		

		//-----> THIS IS WHERE YOU INSERT CODE YOU WANT TO EXECUTE AS LONG AS THE ITEM IS EQUIPPED. <-----
	}
}

function EquipmentEffectToggle (effectIs : boolean)
{
	if (effectIs == true)
	{
		effectActive = true;
		
		//Debug.LogWarning("Remember to insert code for the EquipmentEffect script you have attached to " + transform.name + ".");
		if(gameObject.tag == "regeneration")
		{
			GameObject.Find("cible").SendMessage("activeRegen", true);
		}
		if(gameObject.tag == "vitesse")
		{
			GameObject.Find("FPSController").SendMessage("ActiveVitesse", true);
		}
		
		//-----> THIS IS WHERE YOU INSERT CODE YOU WANT TO EXECUTE JUST WHEN THE ITEM IS EQUIPPED. <-----
		
	}
	else
	{
		effectActive = false;
		if(gameObject.tag == "regeneration")
		{
			GameObject.Find("cible").SendMessage("activeRegen", false);
		}
		if(gameObject.tag == "vitesse")
		{
			GameObject.Find("FPSController").SendMessage("ActiveVitesse", false);
		}
		//-----> THIS IS WHERE YOU INSERT CODE YOU WANT TO EXECUTE JUST WHEN THE ITEM IS UNEQUIPPED. <-----
	}
}