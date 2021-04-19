function get_museum_departments(){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET','https://collectionapi.metmuseum.org/public/collection/v1/departments');
        xhr.responseType = 'json';
    
        xhr.onload = function() {
            let departments = xhr.response;
            resolve(departments);
        }
        xhr.onerror = function(){
            reject(xhr.response);
        }
        xhr.send();
    });
};

function get_collection_objects(departmentId){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        let url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=' + departmentId;
        xhr.open('GET', url);
        xhr.responseType = 'json';
    
        xhr.onload = function() {
            let collection_objects = xhr.response;
            resolve(collection_objects);
        }
        xhr.onerror = function(){
            reject(xhr.response);
        }
        xhr.send();
    });
};

function get_object(objectId){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/' + objectId;
        xhr.open('GET', url);
        xhr.responseType = 'json';
    
        xhr.onload = function() {
            let object = xhr.response;
            resolve(object);
        }
        xhr.onerror = function(){
            reject(xhr.response);
        }
        xhr.send();
    });
};