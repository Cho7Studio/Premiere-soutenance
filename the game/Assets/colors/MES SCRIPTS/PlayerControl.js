#pragma strict

private var hasAxe : boolean = false;

private var canSwing : boolean = true;
private var isSwinging : boolean = false;
var swingTimer : float = 0.7;

private var controller : CharacterController;
function Start()
{
	hasAxe = true;
	controller = GameObject.Find("FPSController").GetComponent(CharacterController);
}

function Update()
{
	//If we aren't moving and if we aren't swinging, then we idle!
	
//	if(controller.velocity.magnitude <= 0 && isSwinging == false)
//	{
//		animation.Play("IdleWithWeapon");
//		animation["IdleWithWeapon"].wrapMode = WrapMode.Loop;
//		animation["IdleWithWeapon"].speed = 0.2;
//	}
	
	//If we're holding shift and moving, then sprint!
	
//	if(controller.velocity.magnitude > 0 && Input.GetKey(KeyCode.LeftShift))
//	{
//		animation.Play("Run");
//		animation["Run"].wrapMode = WrapMode.Loop;
//	}
	
	//HIT SECTION
	if(hasAxe == true && canSwing == true)
	{
		if(Input.GetMouseButtonDown(0))
		{			
			//Swinging animation
			GetComponent.<Animation>().Play("hit");
			GetComponent.<Animation>()["hit"].speed = 1.8;
			isSwinging = true;
			canSwing = false;
		}
	}
	
	if(canSwing == false)
	{
		swingTimer -= Time.deltaTime;
	}
	
	if(swingTimer <= 0)
	{
		swingTimer = 0.5;
		canSwing = true;
		isSwinging = false;
	}
}

















