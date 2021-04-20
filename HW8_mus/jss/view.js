function create_departments_droplist(departments){
    let selectList = document.createElement("select");
    selectList.id = "museumDepartments";
    document.body.appendChild(selectList);

    let option = document.createElement("option");
    option.value = "";
    option.text = "Select department …";
    selectList.appendChild(option);
    selectList.addEventListener('change', (event) =>{
        if (event.target.value){
            selectList.disabled = true;
            let section = document.getElementById('objectsImagesSection');
            if (section != null){
                document.body.removeChild(section);
            }
            get_collection_objects(event.target.value).then(get_ten_objects_with_images).then(display_objects);
        }
    })
    
    for (let i = 0; i < departments['departments'].length; i++) {
        let option = document.createElement("option");
        option.value = departments['departments'][i]['departmentId'];
        option.text = departments['departments'][i]['displayName'];
        selectList.appendChild(option);
    }
}

function display_objects(objects_with_images){
    let imagesSection = document.createElement("section");
    imagesSection.id = "objectsImagesSection";
    document.body.appendChild(imagesSection);

    let imagesList = document.createElement("ul");
    imagesSection.appendChild(imagesList);

    let imagesDiv = document.createElement("div");
    imagesDiv.id = "imagesDiv";
    imagesList.appendChild(imagesDiv);

    for (object of objects_with_images){
        let list = document.createElement('li');
        let figure = document.createElement('figure');
        let image = document.createElement('img');
        image.src = object['objectImage'];
        let h2 = document.createElement('h2');
        h2.innerHTML = object['objectName'];
        let paragraph = document.createElement('p');
        paragraph.innerHTML = object['objectArtist'] + ' ' + object['objectDate'];
        figure.appendChild(image);
        list.appendChild(figure);
        list.appendChild(h2);
        list.appendChild(paragraph);
        imagesDiv.appendChild(list);
    }
    document.getElementById('museumDepartments').disabled = false;
};
