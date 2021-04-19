function create_departments_droplist(departments){
    let selectList = document.createElement("select");
    selectList.id = "museumDepartments";
    document.body.appendChild(selectList);

    let option = document.createElement("option");
    option.value = "None";
    option.text = "";
    selectList.appendChild(option);
    
    for (let i = 0; i < departments['departments'].length; i++) {
        let option = document.createElement("option");
        option.value = departments['departments'][i]['departmentId'];
        option.text = departments['departments'][i]['displayName'];
        selectList.appendChild(option);
    }
}

function display_objects(objects_with_images){
    console.log(objects_with_images);

    let imagesList = document.createElement("ul");
    imagesList.id = "objectsImagesList";
    document.body.appendChild(imagesList);

    let imagesDiv = document.createElement("div");
    imagesDiv.id = "objectsImagesDiv";
    imagesList.appendChild(imagesDiv);

    for (object of objects_with_images){
        let figure = document.createElement('figure');
        let list = document.createElement('li');
        let image = document.createElement('img');
        image.src = object['objectImage'];
        figure.appendChild(image);
        list.appendChild(figure);
        imagesDiv.appendChild(list);
    }
};
