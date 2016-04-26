using UnityEngine;
using System.Collections;


public class ArmeMulti : MonoBehaviour {

	public Rigidbody[] bulletCasing;
	public int ejectSpeed = 50;
	public float fireRate = 1f;

	private GameObject arme;
	private Rigidbody bullet;
	private float nextFire = 0.0f;


	void Start()
	{
		arme = GameObject.FindGameObjectWithTag ("armemulti");
	}

	void Update () 
	{
		if (arme == null) 
		{
			arme = GameObject.FindGameObjectWithTag ("armemulti");
		}
		if (Input.GetButton("Fire1") && Time.time > nextFire) 
		{
			nextFire = Time.time + fireRate;
			bullet = (UnityEngine.Rigidbody) Instantiate (bulletCasing[(int)Random.Range (0f, (float)bulletCasing.Length)], transform.position, transform.rotation);
			arme.GetComponent<Animation>().PlayQueued ("pourriMulti");
			bullet.velocity = transform.TransformDirection (Vector3.left * ejectSpeed);
		}
	}
}