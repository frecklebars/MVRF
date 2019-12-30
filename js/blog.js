function show_blog_archive()
{
	document.getElementById("collectionlist").style.display = "none";
	document.getElementById("tutoriallist").style.display = "none";
	document.getElementById("bloglist").style.display = "block";
}

function show_collection_archive()
{
	document.getElementById("bloglist").style.display = "none";
	document.getElementById("tutoriallist").style.display = "none";
	document.getElementById("collectionlist").style.display = "block";
}

function show_tutorial_archive()
{
	document.getElementById("bloglist").style.display = "none";
	document.getElementById("collectionlist").style.display = "none";
	document.getElementById("tutoriallist").style.display = "block";
}