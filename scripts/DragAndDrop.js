
let currentJournalId;




function addImage(app, url, currentJournalId) {
	var journalEntry;
	//create image tag with url of item
	var containerParagraph;
	var image = new Image();
	//append the child to the body of the journal entry -- gotta figure out how to add it to the journal entry specifically
	var journalDiv = document.getElementById(currentJournalId);
	var journalForm = journalDiv.getElementsByTagName("form")[0];
	var editorContent = journalForm.getElementsByClassName("editor-content")[0];
	containerParagraph = journalForm.getElementsByClassName("editor-content")[0].querySelector("p"); //appendChild(containerParagraph);
	if(containerParagraph == null){
		containerParagraph = document.createElement("p");
		journalForm.getElementsByClassName("editor-content")[0].appendChild(containerParagraph);
	}
	containerParagraph.appendChild(image);
	image.src = url;
	app.object.data.content = editorContent.innerHTML;
	app.object.update({
		content: app.object.data.content
	});

	//app.render(false, {log: true, renderContext: "AddedImageToJournal", renderData: app.object.data });
	//app.object.prepareData();

}

function addImageToJournal(app, url) {
	app.object.data.content += "<img src=" + url + ">";
}

async function handleDrop(app, event, currentJournalId) {
	console.log("Dropping image");
	event.preventDefault();

	var files = event.dataTransfer.files;
	console.log(files)
	for(let f of files){
		checkSource(app, f, currentJournalId);
	}
	// file = files[0];
	// checkSource(app, file, currentJournalId);
}
//tweaked these methods from DragUpload by cswendrowski
//https://github.com/cswendrowski/FoundryVTT-Drag-Upload/blob/master/dragupload.js

async function checkSource(app, file, currentJournalId) {
	var source = "data";
	let response;
	console.log(file)
	if (file.isExternalUrl) {
		response = {
			path: file.url
		}
		console.log("External Url Response path is " + response.path)
	} else {
		response = await FilePicker.upload(source, "tokens", file, {});
		console.log("ELSE Response path is " + response.path)
	}
	addImage(app, response.path, currentJournalId);

}


Hooks.on("renderJournalSheet", (app, html, options) => {
	currentJournalId = html[0].id;
	var journalDiv = html[0];
	if(!journalDiv.querySelector("div.editor")){
		return;
	}
    journalDiv.querySelector("div.editor").addEventListener("drop", (event) => {
	 	handleDrop(app, event, currentJournalId);

	 });
});