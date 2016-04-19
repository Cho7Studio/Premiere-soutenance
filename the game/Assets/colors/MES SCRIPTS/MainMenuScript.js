#pragma strict
function Start()
{
	Time.timeScale = 1f;
}

function NouvellePartie()
{
	Application.LoadLevel("Scene.1");
}

function Quitter()
{
	Application.Quit();
}

function Courses()
{
	Application.LoadLevel("MenuCourse");
}

function RetourMenu()
{
	Application.LoadLevel("Menu");
}

function Multi()
{
	Application.LoadLevel("MenuMulti");
}