using UnityEngine;
using System.Collections;
using UnityEngine.Networking;

public class BulletMulti : NetworkBehaviour {

	public float moveSpeed = 1.0f;
	public Vector3 velocity;
	public int ejectSpeed = 50;
	Rigidbody bullet;

	void Start()
	{
		bullet = gameObject.GetComponent<Rigidbody> ();
		bullet.velocity = transform.TransformDirection(Vector3.left * ejectSpeed);
	}
}
