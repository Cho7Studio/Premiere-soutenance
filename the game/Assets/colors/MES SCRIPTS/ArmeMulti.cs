using UnityEngine;
using System.Collections;
using System.ComponentModel.Design;
using UnityEngine.Networking;


public class ArmeMulti : NetworkBehaviour {

	public GameObject[] bulletCasing;
	public float fireRate = 1f;

	private Transform Mytransform;
	private GameObject arme;
	private Rigidbody bullet;
	private float nextFire = 0.0f;

	[Command]
	public void CmdShoot()
	{
		 
		GameObject obj = (GameObject)Instantiate (bulletCasing [(int)Random.Range (0f, (float)bulletCasing.Length)], Mytransform.position, Mytransform.rotation);
		BulletMulti bullet = obj.GetComponent<BulletMulti> ();
		Destroy (obj,5.0f);
		NetworkServer.Spawn (obj);
	}

	void Start()
	{
		arme = GameObject.FindGameObjectWithTag ("armemulti");
		Transform[] ts = gameObject.GetComponentsInChildren<Transform> ();
		foreach (Transform t in ts) 
		{
			if (t.name == "FirstPersonCharacter") {
				Transform[] poet = t.GetComponentsInChildren<Transform> ();
				foreach (Transform e in poet) 
				{
					if (e.name == "Weapon") {
						Transform[] hey = e.GetComponentsInChildren<Transform> ();
						foreach (Transform v in hey) {
							if (v.name == "armepourrimulti 1 1") {
								Transform[] enfin = v.GetComponentsInChildren<Transform> ();
								foreach (Transform yeah in enfin) {
									if (yeah.name == "Canon") {
										Mytransform = yeah.transform;
									}
								}
							}
						}
					}
				}
			}
		}
	}

	void Update () 
	{
		if (arme == null) 
		{
			arme = GameObject.FindGameObjectWithTag ("armemulti");
		}
		if (Input.GetButton("Fire1") && Time.time > nextFire) 
		{
			CmdShoot ();
			nextFire = Time.time + fireRate;
			arme.GetComponent<Animation>().PlayQueued ("pourriMulti");
		}
	}

	void OnGUI()
	{
		GUI.Label (new Rect(Screen.width/2,Screen.height/2,200,200), "+");
	}
}