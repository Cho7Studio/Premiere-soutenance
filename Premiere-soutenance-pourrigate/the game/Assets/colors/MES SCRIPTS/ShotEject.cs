using UnityEngine;
using System.Collections;


public class ShotEject : MonoBehaviour {

	public Rigidbody[] bulletCasing;
	public int ejectSpeed = 50;
	public float fireRate = 0.5f;
	public int munition = 30;
	public int maxMunition = 100;
	public GUIStyle InstructionBoxSkin;

	private Rigidbody bullet;
	private float nextFire = 0.0f;
	private bool fullAuto = false;


	// Update is called once per frame
	void Update () 
	{
		if (Input.GetButton("Fire1") && (munition > 0) && Time.time > nextFire) 
		{
			nextFire = Time.time + fireRate;
			bullet = (UnityEngine.Rigidbody) Instantiate (bulletCasing[(int)Random.Range (0f, (float)bulletCasing.Length)], transform.position, transform.rotation);
			munition--;
			bullet.velocity = transform.TransformDirection (Vector3.left * ejectSpeed);
		}

		if (Input.GetButtonDown ("Fire2")) 
		{
			fullAuto = !fullAuto;
		}

		if (fullAuto) 
		{
			fireRate = 0.1f;
		} 
		else 
		{
			fireRate = 0.5f;
		}

		if (munition > maxMunition) 
		{
			munition = maxMunition;
		}
	}

	void OnGUI()
	{
		GUI.Label(new Rect(Screen.width - 155, 10, 150, 30), "Cadeaux : " + munition, InstructionBoxSkin);
	}

	public void MoreMunition()
	{
		munition += 10;
	}
}