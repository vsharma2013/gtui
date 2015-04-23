window.onload = onAppReady;

function onAppReady(){
	var dragDropApp = new DragDropApp();
}

function DragDropApp(){
	this.init();
	this.fileType = {
		txt : 1,
		img : 2
	};
	this.uploadUrl = 'http://localhost:8080/file';
}

DragDropApp.prototype.init = function(){
	this.addEventListners();
}

DragDropApp.prototype.addEventListners = function(){
	var dropZone = document.getElementById('dropZone');
	dropZone.addEventListener('dragover', this.onDragOver.bind(this));
	dropZone.addEventListener('drop', this.onDropComplete.bind(this));
}

DragDropApp.prototype.onDragOver = function(e){
	e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
}

DragDropApp.prototype.onDropComplete = function(e){
	e.stopPropagation();
    e.preventDefault();

    var droppedFile = e.dataTransfer.files[0];
    this.readAndUploadFile(droppedFile);
}

DragDropApp.prototype.readAndUploadFile = function(file){
	var reader = new FileReader();
	
	reader.onload = this.onFileLoad.bind(this, file);
	
	var fileType = this.getFileType(file);
	
	switch(fileType){
		case this.fileType.txt : 
			reader.readAsText(file, 'utf8');
			break;
		case this.fileType.img :
			reader.readAsDataURL(file);
			break;
		default : 
			alert('File type not supported');
	}
}

DragDropApp.prototype.getFileType = function(file){
	if(file.type === 'text/plain'){
		return this.fileType.txt;
	}
	else if (file.type.match(/image.*/)) {
		return this.fileType.img;
	}
}

DragDropApp.prototype.onFileLoad = function(file, e){
	var fd = new FormData();
	fd.append("name", file.name);
	fd.append("file", file);
    var xhr = this.getHttpRequestObject();
    xhr.upload.addEventListener("progress", this.uploadProgress.bind(this), false);
    xhr.addEventListener("load", this.uploadComplete.bind(this), false);
    xhr.addEventListener("error", this.uploadFailed.bind(this), false);
    xhr.addEventListener("abort", this.uploadFailed.bind(this), false);
    xhr.open('POST', this.uploadUrl, true); 
	xhr.send(fd);
}

DragDropApp.prototype.getHttpRequestObject = function () {
    var xmlHttpRequst = false;
    if (window.XMLHttpRequest) {
        xmlHttpRequst = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xmlHttpRequst = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlHttpRequst;
}

DragDropApp.prototype.uploadProgress = function(e){
	console.log('upload progess');
}

DragDropApp.prototype.uploadComplete = function(e){
	console.log('upload complete');
}

DragDropApp.prototype.uploadFailed = function(e){
	console.log('upload failed');
}