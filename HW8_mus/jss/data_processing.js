function get_n_objects(j, n, collection_objects, result, resolve){
    let objects_ids = [];
    for (let i=j; i<j+n; i++){
        objects_ids.push(collection_objects['objectIDs'][i]);
    }
    let promises = [];

    for (id of objects_ids){
        let promise = get_object(id).then(get_object_json);
        promises.push(promise)
    }
    Promise.all(promises).then((values) => {
        let k = n;
        for (value of values){
            if (value['objectImage'].length != 0){
                let e = true;
                for (ready of result){
                    e = e && !(ready['objectImage'] === value['objectImage']);
                }
                if (e){
                    result.push(value);
                    k--;
                }
            }
        }
        if (result.length === 10){
            resolve(result);
        } else{
            get_n_objects(j+n, k, collection_objects, result, resolve);
        }
    });
};

function get_ten_objects_with_images(collection_objects){
    let objects_with_images = [];
    return new Promise((resolve, reject) => {
        get_n_objects(0, 10, collection_objects, objects_with_images, resolve);
    });
};

function get_object_json(object){
    let object_json = {
        objectId: object['objectID'],
        objectName: object['title'],
        objectDate: object['objectDate'],
        objectArtist: object['artistDisplayName'],
        objectImage: object['primaryImage'] || object['primaryImageSmall'] || object['additionalImages']
    };
    return object_json;
};