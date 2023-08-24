function checkIfRequiredFilled() {
    var requiredFields = document.getElementById("form").querySelectorAll("[required]");
    var unfilledField = 0;
    for (i = 0; i < requiredFields.length; i++) {
        if (requiredFields[i].value.length == 0) {
            unfilledField = +1;
        }
    }

    if (unfilledField > 0) {
        alert("Remplir les champs obligatoires (précédés par une *)")
    } else {
        saveDynamicDataToFile();
    }
}

function saveDynamicDataToFile() {
    let formDiv = document.getElementById("form");
    let formFields = formDiv.querySelectorAll(".formValue");

   let postMeta = "---";
    for(i=0; i < postLayouts.length; i++){
        if(postvalCategory == postLayouts[i][0]){
            postMeta += "\nlayout: "+postLayouts[i][1];
        }
    }

    // Eléments indispensables à un post : title + date / Elément indispensable à un post si différentes catégories : categories
    // ==> Rendre systématiques ces trois valeurs dans postslayouts.js ??
    var postvalCategory = document.getElementById("categories").value;
    var postvalDate = document.getElementById("date").value;
    var postvalTitle = document.getElementById("title").value;

    postMeta += "\ncategories: '"+postvalCategory+"'";

    for(j=0; j < formFields.length; j++){
        postMeta += "\n"+formFields[j].id+": '"+formFields[j].value+"'";
    }

    for(k=0; k < postContents.length; k++){
        var postLang = "\nlang: '"+ postContents[k][2]+"'\n---\n";
        var postContent = document.getElementById(postContents[k][0]).value;
        var blobContent = postMeta + postLang + postContent;
        var posttitleFile = slugifyTitle(postvalTitle);
        var blob = new Blob([blobContent], { type: "text/plain;charset=utf-8" });
        saveAs(blob, postvalDate + "-" +postContents[k][2]+"-" + posttitleFile + '.md');
    }
}

function slugifyTitle(str) {
    return String(str)
        .normalize('NFKD') // split accented characters into their base characters and diacritical marks
        .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
        .trim() // trim leading or trailing whitespace
        .toLowerCase() // convert to lowercase
        .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
        .replace(/\s+/g, '-') // replace spaces with hyphens
        .replace(/-+/g, '-'); // remove consecutive hyphens
}

function generateDistinctHeads() {
    var postvalCategory = document.getElementById("categories").value;
    var postHead = document.getElementById("divDistinctHeads");
    postHead.innerHTML = "";
    var postContentToFill = document.getElementById("divContents");

    for (i = 0; i < postfields.length; i++) {
        if(postvalCategory == postfields[i][0]){
            for(j=1; j < postfields[i].length; j++){              
                generateFields(postfields[i][j][0], postfields[i][j][1], postfields[i][j][2], postfields[i][j][3], postfields[i][j][4]);
            }
        }
    }

    if(postContentToFill.innerHTML == ""){
        for (k = 0; k < postContents.length; k++){
            generateContents(postContents[k][0], postContents[k][1]);
        }
        generateSaveButton();
    }
    
    function generateFields(field, label, required, type, options) {
        var postField = document.createElement("div");
        postField.classList.add("formgrid");
        var postinput = document.createElement(type);
        postinput.classList.add("formValue");
        postinput.id = field;
        postinput.name = field;
        if(type=="input"){
            postinput.type = options;
        }else if(type=="select"){
            var optionN = "";
            for (k = 0; k < options.length; k++){
                optionN += '<option>'+ options[k]+'</option>';
            }
            postinput.innerHTML = optionN;
        }

        postinput.required = required;
        var postlabel = document.createElement("label");
        postlabel.setAttribute("for", postinput.name);
        if (required == true){
            label = "<span class='colored'>*</span>" + label;
        }
        postlabel.innerHTML = label;
        postHead.appendChild(postField);
        postField.appendChild(postlabel);
        postField.appendChild(postinput);
    }

    function generateContents(id, label){
        var contentColumn = document.createElement("div");
        contentColumn.classList.add("contentcolumn");
        var content = document.createElement("textarea");
        var labelcontent = document.createElement("label");
        labelcontent.classList.add("labelcontent");
        content.id=id;
        content.setAttribute("rows", 30);
        labelcontent.setAttribute("for", id);
        labelcontent.innerHTML = label;
        postContentToFill.appendChild(contentColumn)
        contentColumn.appendChild(labelcontent);
        contentColumn.appendChild(content);
    }

    function generateSaveButton(){
        var wholeform = document.getElementById("form");
        var saveButton = document.createElement("button");
        saveButton.classList.add("savebutton");
        saveButton.setAttribute("onclick", "checkIfRequiredFilled();");
        saveButton.innerHTML = "Enregistrer";
        wholeform.appendChild(saveButton);
    }
}





