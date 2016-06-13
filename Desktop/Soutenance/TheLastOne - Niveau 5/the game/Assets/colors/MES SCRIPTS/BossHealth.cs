using UnityEngine;
using System.Collections;

public class BossHealth : MonoBehaviour {

	public float Health = 500f;
	public string EnemyName;
	public int cadalDammage;

	void OnCollisionEnter(Collision col)
	{
		if (col.gameObject.tag == "cadal") 
		{
			ApplyDammage (cadalDammage);
		}
	}

	void ApplyDammage(int TheDammage)
	{
		Health -= TheDammage;

		if(Health <= 0)
		{
			GameObject.Find (EnemyName).GetComponent<BossAI> ().enabled = false;
			gameObject.GetComponent<Animation> ().Play ("death");
			StartCoroutine (Attendre ());
		}
	}

	IEnumerator Attendre()
	{
		yield return new WaitForSeconds (10);
	}

	void Dead()
	{
		Destroy (gameObject);
	}
		
}